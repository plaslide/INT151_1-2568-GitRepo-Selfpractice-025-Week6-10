//งานในห้อง

const username = document.getElementById("username")
const email = document.getElementById("email")
const message = document.querySelector("p")
const password = document.getElementById("password")
const confirms = document.getElementById("confirm-password")
 
 
if (
  username.value.trim() === "" ||
  email.value.trim() === "" ||
  password.value.trim() === "" ||
  confirms.value.trim() === ""
) {
  message.textContent = "missing some values, please try again!";
  message.style.color = "red";
} else if (password.value !== confirms.value) {
  message.textContent = "password and confirm do not match, check again";
  message.style.color = "red";
} else {
  message.textContent = "your data completed";
  message.style.color = "green";
}

// จาก HTML week9
// --- 1. เลือก Element และเปลี่ยนข้อความ ---
  const mainTitle = document.getElementById('main-title');
  mainTitle.textContent = 'Welcome to the Arena!';

  // --- 2. ค้นหาด้วย Class และวนลูป ---
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.textContent += ' (selected)';
  });

  // --- 3. เดินทางใน DOM (Traversal) ---
  const listAForTraversal = document.getElementById('list-a');
  const parentSection = listAForTraversal.parentElement;
  parentSection.classList.add('highlight');

  // --- 4. สร้าง Element และนำไปต่อท้าย (appendChild) ---
  const listAForAppend = document.getElementById('list-a');
  const newItem = document.createElement('li');
  newItem.textContent = 'Item 4';
  listAForAppend.appendChild(newItem);

  // --- 5. จัดการ dataset Attribute ---
  const pendingItem = document.querySelector('li[data-status="pending"]');
  if (pendingItem) {
    pendingItem.dataset.status = 'completed';
  }

  // --- 6. จัดการ Event (addEventListener) ---
  const actionButton = document.getElementById('action-button');
  const targetDiv = document.getElementById('target-div');
  actionButton.addEventListener('click', () => {
    targetDiv.textContent = 'Button was clicked!';
  });

  // --- 7. ลบ Element (remove) ---
  const item3 = document.querySelector('#list-a li:nth-child(3)');
  if (item3) {
    item3.remove();
  }

  // --- 8. แทรก Element (insertBefore) ---
  const sectionA = document.getElementById('section-a');
  const listAForInsert = document.getElementById('list-a');
  const warningText = document.createElement('p');
  warningText.classList.add('error-text');
  warningText.textContent = 'Warning!';
  sectionA.insertBefore(warningText, listAForInsert);

  // --- 9. ใช้ event.target ---
  const mainContent = document.getElementById('main-content');
  mainContent.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.id) {
      console.log(`Clicked element ID: ${clickedElement.id}`);
    }
  });

  // --- 10. แทนที่ Element (replaceWith) ---
  const footerText = document.getElementById('footer-text');
  const newFooterHeader = document.createElement('h4');
  newFooterHeader.textContent = 'Footer Updated';
  if (footerText) {
    footerText.replaceWith(newFooterHeader);
  }