
import { addQuote, getAllQuotes } from './quote.js';


const quoteList = document.getElementById('quote-list');


function renderQuotes() {
  const quotes = getAllQuotes();
  quoteList.innerHTML = '';
  quotes.forEach(quote => {
    const p = document.createElement('p');
    p.textContent = `"${quote.content}" — ${quote.author}`;
    quoteList.appendChild(p);
  });
}


addQuote('Stay hungry, stay foolish.', 'Steve Jobs');
addQuote('Do or do not. There is no try.', 'Yoda');
addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci');


renderQuotes();
