
// Lesson 1: Arrays, Objects, and Functions
 
// 1. Create an empty array to hold the quotes
const quotes = [
  id = Number,
  content = String,
  author = String
]
/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  quotes.push(quote);
  // TODO: Add the quote object to the quotes array
}
 
/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
    const index = quotes.findIndex(q => q.id === id)
  if (index !== -1) {
    quotes.splice(index, 1)
  }
  // TODO: Remove the quote object from the array using the given id
}
 
/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  const quote = quotes.find(q => q.id === id)
  if (quote) {
    quote.content = updatedQuote.content || quote.content
    quote.author = updatedQuote.author || quote.author
  }
  // TODO: Find the quote by id and update its properties
}
 
/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes;
  // TODO: Return the quotes array
}
 
// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({id: 1, content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt"});
addQuote({id: 2, content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein"});
addQuote({id: 3, content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"});
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2);
// TODO: Update 1 quote using updateQuote()
updateQuote(1, {content: "Believe you can and you're halfway there" , author: "Theodore Roosevelt"} );
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes());

//โจทย์ 1: กรองและแปลงข้อมูล (Chaining)
//จงเขียนโค้ด เพื่อสร้าง array ใหม่ชื่อ activeUsers ที่มี เฉพาะอีเมล ของ user ที่มี isActive: true


const users = [
  { name: 'Alice', email: 'alice@email.com', isActive: true },
  { name: 'Bob', email: 'bob@email.com', isActive: false },
  { name: 'Charlie', email: 'charlie@email.com', isActive: true }
];

// เขียนโค้ดของนายตรงนี้
const activeUsers = users
  .filter (users => users.isActive === true)
  .map (users => users.email)

console.log(activeUsers); // ['alice@email.com', 'charlie@email.com']

// 2. สร้าง Higher-Order Function
//โจทย์: จงเขียน Higher-Order Function ชื่อ withLogging 
//ที่รับฟังก์ชัน (fn) เข้ามา แล้ว return ฟังก์ชันใหม่ที่ทำงานเหมือน fn แต่จะ console.log('calling function...') ก่อนทุกครั้ง

const add = (a, b) => a + b;

function withLogging(fn) {
  return function(...args) { 
    console.log('calling function...');
    return fn(...args);
  };
}

const addWithLogging = withLogging(add);
console.log(addWithLogging(5, 3));
// 8

// 3. คำนวณค่าด้วย Reduce
// โจทย์: จงเขียนโค้ดโดยใช้ .reduce() เพื่อคำนวณราคารวมของสินค้าทั้งหมดในตะกร้า


const cart = [
  { name: 'Laptop', price: 45000 },
  { name: 'Mouse', price: 1500 },
  { name: 'Keyboard', price: 2000 }
];
// 0 คือค่าเริ่มต้นของตัวสะสม
const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice); // 48500

// 4. สร้างฟังก์ชันจากโรงงาน (Closure)
// โจทย์: จงเขียนฟังก์ชัน createMultiplier(x) ที่ return ฟังก์ชันลูกออกมา ฟังก์ชันลูกนี้จะรับ y เข้ามาแล้วคืนค่าเป็นผลคูณของ x กับ y


function createMultiplier(x) {

  return function(y) {
    return x * y;
  };
}

const multiplyByFive = createMultiplier(5);
console.log(multiplyByFive(10)); // 50

const multiplyByTen = createMultiplier(10);
console.log(multiplyByTen(7));// 70

// 5. จัดการสถานะด้วย Closure
// โจทย์: จงเขียนฟังก์ชัน makeCounter() ที่ return object ที่มี 2 เมธอดคือ 
// increment() เพื่อเพิ่มค่า และ getValue() เพื่อดูค่า โดยค่า count ต้องถูกซ่อนไว้ด้วย Closure


function makeCounter() {
  let count = 0; 

  return {
    increment: function() {
      count++;
    },
    getValue: function() {
      return count;
    }
  };
}

const counter = makeCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2


// 7. หาค่ายาวที่สุดด้วย Chaining
// โจทย์: จงเขียนโค้ดบรรทัดเดียวเพื่อหาความยาวของสตริงที่ ยาวที่สุด ใน array


const words = ['Hello', 'World', 'Programming', 'JavaScript'];
const longestLength = Math.max(...words.map(word => word.length));

console.log(longestLength); // 11

// 9. ดึงข้อมูลด้วย Destructuring
// โจทย์: จงเขียนโค้ด 1 บรรทัดเพื่อดึงค่า name และ lat ออกมาเก็บในตัวแปรชื่อเดียวกัน จากผลลัพธ์ของ getApiResponse()


function getApiResponse() {
  return {
    id: 1,
    data: {
      user: { name: 'Gemini' },
      location: { lat: 13.75, lng: 100.5 }
    }
  };
}

const { data: { user: { name }, location: { lat } } } = getApiResponse();

console.log(name); // 'Gemini'
console.log(lat);  //  13.75

// 10. สร้างฟังก์ชันอเนกประสงค์
// โจทย์: จงเขียนฟังก์ชัน createPropertyChecker(propName) ที่รับชื่อ property เข้ามา แล้ว return ฟังก์ชันใหม่ที่ใช้สำหรับเช็คว่า object 
// ที่ส่งเข้ามามี property นั้นๆ หรือไม่


function createPropertyChecker(propName) {
  return function(obj) {
    return propName in obj;
  };
}

const hasName = createPropertyChecker('name');
const hasPrice = createPropertyChecker('price');

const product = { name: 'Book', price: 350 };

console.log(hasName(product));   // true
console.log(hasPrice({ name: 'Pen' }));  // false