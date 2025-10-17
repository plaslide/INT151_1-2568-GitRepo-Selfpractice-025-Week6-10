//ท้ายคาบ
const p = document.createElement("p");
p.setAttribute("format", "italic");
 
const p1 = document.createElement("p");
p1.innerHTML = "<i>Sample Italic Text</i>";
p1.setAttribute("method", "innerHTML");
 
const p2 = document.createElement("p");
p2.innerText = "<i>Sample Italic Text</i>";
p2.setAttribute("method", "innerText");
 
const p3 = document.createElement("p");
p3.textContent = "<i>Sample Italic Text</i>";  
p3.setAttribute("method", "textContent");
 
const div = document.getElementById("demo");
div.appendChild(p);    
div.appendChild(p1);  
div.appendChild(p2);  
div.appendChild(p3);    

// 1. เดินทางใน DOM (DOM Traversal)
// โจทย์: จงเขียนโค้ดเพื่อหา div ที่มี id="start" จากนั้นให้เดินทางไปหา 
// element พี่น้องตัวถัดไป (div ที่มี id="next") แล้วเปลี่ยนข้อความข้างในเป็น "Found me!"

const startDiv = document.getElementById('start');
const nextDiv = startDiv.nextElementSibling;

if (nextDiv) {
  nextDiv.textContent = 'Found me!';
}

console.log(nextDiv.textContent); // Found me!


// 2. สร้าง Element จาก Array
// โจทย์: จงเขียนฟังก์ชัน createList(items) ที่รับ array ของ string เข้ามา 
// ล้วสร้าง <ul> ที่มี <li> ตามจำนวน item ใน array จากนั้นให้ return <ul> ที่สร้างเสร็จแล้วออกมา



const fruits = ['Apple', 'Banana', 'Orange'];

function createList(items) {
  const ul = document.createElement('ul');
  items.forEach(itemText => {
    const li = document.createElement('li');
    li.textContent = itemText;
    ul.appendChild(li); // เอา li ไปเป็นลูกของ ul
  });

  return ul;
}

const fruitList = createList(fruits);
document.body.appendChild(fruitList);

// 3. จัดการ Attribute
// โจทย์: จงหา <img> ที่มี id="profile-pic" แล้วเพิ่ม class="thumbnail" และ data-user-id="123" ให้กับรูปนั้น

const profilePic = document.getElementById('profile-pic');
profilePic.setAttribute('class', 'thumbnail');
profilePic.setAttribute('data-user-id', '123');


// 4. DOM และ Chaining
// โจทย์: จาก HTML ที่ให้มา จงเขียนโค้ดเพื่อหา <p> 
// ทั้งหมดที่มี class="item" จากนั้นให้กรองเอาเฉพาะอันที่มีคำว่า "Error" อยู่ข้างใน แล้วเปลี่ยนสีข้อความของอันที่กรองได้ให้เป็นสีแดง

const allItems = document.querySelectorAll('.item');
const itemsArray = Array.from(allItems);
itemsArray
  .filter(p => p.textContent.includes('Error'))
  .forEach(p => p.style.color = 'red');
  
//   6. แปลง Array เป็น Object (Reduce)
// โจทย์: จงเขียนโค้ดโดยใช้ .reduce() เพื่อเปลี่ยน array ของ products ให้กลายเป็น object ที่มี id ของสินค้าเป็น key และตัว product เองเป็น value

const products = [
  { id: 'p1', name: 'Laptop', price: 45000 },
  { id: 'p2', name: 'Mouse', price: 1500 },
  { id: 'p3', name: 'Keyboard', price: 2000 }
];

const productsMap = products.reduce((acc, product) => {
  acc[product.id] = product; 
  return acc;
}, {});

console.log(productsMap);
// {
//   p1: { id: 'p1', name: 'Laptop', price: 45000 },
//   p2: { id: 'p2', name: 'Mouse', price: 1500 },
//   p3: { id: 'p3', name: 'Keyboard', price: 2000 }
// }

// 9. เข้าใจ Node Properties
// โจทย์: จาก HTML ที่ให้มา จงหา div ที่มี id="content" แล้ว console.log ค่า nodeName ของมัน และ nodeType ของ Node ลูกตัวแรกสุด ของมัน

const contentDiv = document.getElementById('content');
const firstChildNode = contentDiv.firstChild;
console.log(contentDiv.nodeName); //  "DIV"
console.log(firstChildNode.nodeType); //  3

//10. สร้างฟังก์ชันครอบ (Wrapper Function)
// โจทย์: จงเขียน Higher-Order Function ชื่อ withTryCatch(fn) ที่รับฟังก์ชัน (fn) เข้ามา แล้ว return ฟังก์ชันใหม่ที่ครอบ 
// fn ไว้ด้วย try...catch บล็อก ถ้า fn ทำงานสำเร็จ ก็ return ค่าปกติ แต่ถ้าเกิด error ให้ console.log ข้อความ error แล้ว return null

function withTryCatch(fn) {
  return function(...args) {
    try {
      return fn(...args);
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null;
    }
  };
}

const riskyFunction = (data) => {
  if (!data) throw new Error('Data is required');
  return data.toUpperCase();
};

const safeFunction = withTryCatch(riskyFunction);

console.log(safeFunction('hello')); //  HELLO
console.log(safeFunction(null));    //  An error occurred: Data is required, null