// ท้ายคาบ

document.addEventListener("DOMContentLoaded", () => {
const background_color = document.getElementById("bgColor")
const saveBtn = document.getElementById("saveBtn")
const resetBtn = document.getElementById("resetBtn")
const fontcolor = document.getElementById("fontColor")
 
const storage = localStorage.getItem("bgColor")
const storage1 = localStorage.getItem("fontColor")
 
if (storage) {
    document.body.style.backgroundColor = storage
    background_color.value = storage
}
if (storage1) {
    document.body.style.color = storage1
    fontcolor.value = storage1
}
else {
    document.body.style.backgroundColor = "#000000"
    background_color.value = "#000000"
    document.body.style.color = "#000000"
    fontcolor.value = "#000000"
}
saveBtn.addEventListener("click", () => {
    const color = background_color.value
    localStorage.setItem("bgColor", color);
})
resetBtn.addEventListener("click", () => {
    localStorage.removeItem("bgColor")
    document.body.style.color = "#000000"
    background_color.value = "#000000"
})
 
saveBtn.addEventListener("click", () => {
    const color = fontcolor.value
    localStorage.setItem("fontColor", color);
})
resetBtn.addEventListener("click", () => {
    localStorage.removeItem("fontColor")
    document.body.style.color = "#000000"
    fontcolor.value = "#000000"
})
 
})

//1. บันทึก Theme ที่ผู้ใช้เลือก
//โจทย์: จงเขียนโค้ดที่เมื่อผู้ใช้กดปุ่ม "Dark Mode" หรือ "Light Mode" ให้บันทึกค่า theme (เป็น 'dark' หรือ 'light') ลงใน localStorage

const darkBtn = document.getElementById('darkBtn');
const lightBtn = document.getElementById('lightBtn');

darkBtn.addEventListener('click', () => {
  localStorage.setItem('theme', 'dark');
  console.log('Theme saved: dark');
});

lightBtn.addEventListener('click', () => {
  localStorage.setItem('theme', 'light');
  console.log('Theme saved: light');
});


// 2. โหลด Theme เมื่อเปิดหน้าเว็บ
// โจทย์: (ต่อจากข้อ 1) จงเขียนโค้ดที่เมื่อหน้าเว็บโหลดเสร็จ (ใช้ event DOMContentLoaded) ให้ดึงค่า theme 
// จาก localStorage แล้ว console.log ค่าที่บันทึกไว้ออกมา


document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    console.log(`Saved theme is: ${savedTheme}`);
  }
});

// 3. นับจำนวนครั้งที่เข้าชม (Session Counter)
// โจทย์: จงเขียนโค้ดเพื่อนับว่าผู้ใช้รีเฟรชหน้าเว็บใน Session นี้ไปกี่ครั้ง โดยใช้ sessionStorage


let visitCount = parseInt(sessionStorage.getItem('pageVisits') || '0');
visitCount++;
sessionStorage.setItem('pageVisits', visitCount);
console.log(`You have visited this page ${visitCount} times in this session.`);

// 4. สร้างคุกกี้ต้อนรับ (Set Cookie)
// โจทย์: จงเขียนโค้ดเพื่อสร้างคุกกี้ชื่อ welcomeMessage ที่มีค่าเป็น "HelloUser" และให้คุกกี้นี้ หมดอายุใน 1 ชั่วโมง



const now = new Date();
now.setTime(now.getTime() + (60 * 60 * 1000));
const expires = `expires=${now.toUTCString()}`;
document.cookie = `welcomeMessage=HelloUser;${expires};path=/`;

console.log('Welcome cookie has been set!');

// 5. ลบคุกกี้ (Delete Cookie)
// โจทย์: (ต่อจากข้อ 4) จงเขียนโค้ดเพื่อ ลบ คุกกี้ welcomeMessage ที่สร้างไว้

document.cookie = 'welcomeMessage=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
console.log('Welcome cookie has been deleted.');