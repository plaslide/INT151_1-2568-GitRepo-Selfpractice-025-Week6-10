import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'

const quoteList = document.getElementById('quote-list')
const form = document.getElementById('quoteForm')
const contentInput = document.getElementById('content')
const authorInput = document.getElementById('author')
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.getElementById('randomQuoteDisplay')

function createQuoteElement(quote) {
  const div = document.createElement('div')
  div.dataset.id = quote.id 

  const contentP = document.createElement('p')
  contentP.textContent = quote.content

  const authorP = document.createElement('p')
  authorP.textContent = quote.author

  const editBtn = document.createElement('button')
  editBtn.className = 'edit-btn'
  editBtn.textContent = 'Edit'
  editBtn.dataset.id = quote.id

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'delete-btn'
  deleteBtn.textContent = 'Delete'
  deleteBtn.dataset.id = quote.id


  editBtn.addEventListener('click', () => {
    idInput.value = quote.id
    contentInput.value = quote.content
    authorInput.value = quote.author
  })
  deleteBtn.addEventListener('click', () => {
    const idToDelete = parseInt(deleteBtn.dataset.id)
    deleteQuote(idToDelete) 
    deleteQuoteFromDOM(idToDelete)
  })

  div.append(contentP, authorP, editBtn, deleteBtn)
  return div
}

function addQuoteToDOM(quote) {
  const quoteElement = createQuoteElement(quote)
  quoteList.appendChild(quoteElement)
}

function updateQuoteInDOM(quote) {
  const quoteDiv = document.querySelector(`div[data-id="${quote.id}"]`)
  if (quoteDiv) {
    quoteDiv.children[0].textContent = quote.content
    quoteDiv.children[1].textContent = quote.author
  }
}


function deleteQuoteFromDOM(id) {
  const quoteDiv = document.querySelector(`div[data-id="${id}"]`)
  if (quoteDiv) {
    quoteDiv.remove()
  }
}

function renderQuotes() {
  quoteList.innerHTML = '' 
  const allQuotes = getAllQuotes()
  allQuotes.forEach(quote => {
    addQuoteToDOM(quote)
  })
}

form.addEventListener('submit', event => {
  event.preventDefault() 

  const content = contentInput.value.trim()
  const author = authorInput.value.trim()
  const id = parseInt(idInput.value) 

  if (content && author) {
    if (id) {
      const updatedQuote = { id, content, author }
      updateQuote(id, content, author) 
      updateQuoteInDOM(updatedQuote) 
    } else {
      const newQuote = addQuote(content, author)
      addQuoteToDOM(newQuote) 
    }
    form.reset() 
    idInput.value = ''
  }
})

function showRandomQuote() {
  const allQuotes = getAllQuotes()
  if (allQuotes.length === 0) {
    randomDisplay.textContent = '-- No quotes to show --'
  } else {
    const randomIndex = Math.floor(Math.random() * allQuotes.length)
    const randomQuote = allQuotes[randomIndex]
    randomDisplay.textContent = `"${randomQuote.content}" — ${randomQuote.author}`
  }
}
randomBtn.addEventListener('click', showRandomQuote)


renderQuotes()
showRandomQuote() 