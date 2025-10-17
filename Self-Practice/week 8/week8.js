//ท้ายคาบ

const box = document.getElementById("box");
const buttons = document.querySelectorAll('button[data-color]');
 
buttons.forEach(button => {
  button.onclick = () => {
    box.style.backgroundColor = button.dataset.color;
    box.textContent = button.dataset.color.toUpperCase();
  };
});

// 2. สร้าง Element และจัดการ dataset
// โจทย์: จงเขียนฟังก์ชัน createProductCard(productName, productId) 
// ที่สร้าง <div> ขึ้นมา 1 อัน จากนั้นให้กำหนด class เป็น "card" และเพิ่ม data-product-id 
// ให้มีค่าเท่ากับ productId ที่รับเข้ามา สุดท้ายให้ใส่ข้อความ productName เข้าไปใน div แล้ว return div นั้นออกมา

function createProductCard(productName, productId) {

  const card = document.createElement('div');
  card.classList.add('card');
  card.textContent = productName;
  card.dataset.productId = productId;

  return card;
}

const newCard = createProductCard('Gaming Mouse', 'prod-456');
document.body.appendChild(newCard);

// 3. ค้นหาด้วย querySelectorAll และแก้ไขหลายรายการ
// โจทย์: จงเขียนโค้ดเพื่อหา <li> ทุกตัว ที่มี class="vegan" จากนั้นให้วนลูปเพื่อเพิ่มข้อความ (Vegan) ต่อท้ายข้อความเดิมของแต่ละ <li>

const veganItems = document.querySelectorAll('.vegan');
veganItems.forEach(item => {
  item.textContent += ' (Vegan)';
});

// 4. ลบ Element (removeChild)
// โจทย์: จงหา <ul> ที่มี id="soup" จากนั้นให้ค้นหาและ ลบ <li> ที่มีข้อความ "Beef Soup" ออกจากรายการ

const soupList = document.getElementById('soup');
const allSoups = soupList.children; 
for (const soup of allSoups) {
  if (soup.textContent === 'Beef Soup') {
    soupList.removeChild(soup); 
    break; 
  }
}

// 6. แทรก Element (insertBefore)
// โจทย์: จงสร้าง <li> ใหม่ที่มีข้อความ "Pork Soup" จากนั้นให้แทรก <li> ใหม่นี้เข้าไป ก่อนหน้า <li> ที่มีข้อความ "Mushroom Soup"

const porkSoup = document.createElement('li');
porkSoup.textContent = 'Pork Soup';
const soupList = document.getElementById('soup');
const mushroomSoup = soupList.querySelector('li:last-child');
soupList.insertBefore(porkSoup, mushroomSoup);

// 8. แทนที่ Element (replaceChild)
// โจทย์: จงสร้าง <p> ใหม่ที่มีข้อความ "This section is updated." จากนั้นให้ใช้มันไป แทนที่ <div> ที่มี id="old-content"

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This section is updated.';
const container = document.getElementById('container');
const oldDiv = document.getElementById('old-content');
if (container && oldDiv) {
  container.replaceChild(newParagraph, oldDiv);
}