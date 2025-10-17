document.addEventListener("DOMContentLoaded", () => {
  const bgColorInput = document.getElementById("bgColor");
  const fontColorInput = document.getElementById("fontColor");
  const fontSizeSelect = document.getElementById("fontSize");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  // ฟังก์ชันอัปเดตค่าหน้าเว็บ
  function applySettings(settings) {
    document.body.style.backgroundColor = settings.bgColor || "white";
    document.body.style.color = settings.fontColor || "black";

    let size = settings.fontSize || "medium";
    if (size === "small") document.body.style.fontSize = "12px";
    if (size === "medium") document.body.style.fontSize = "16px";
    if (size === "large") document.body.style.fontSize = "20px";

    // อัปเดตค่าใน input ให้ตรง
    bgColorInput.value = settings.bgColor || "#ffffff";
    fontColorInput.value = settings.fontColor || "#000000";
    fontSizeSelect.value = size;
  }

  // โหลดค่าที่เก็บไว้ใน localStorage
  const savedSettings = JSON.parse(localStorage.getItem("settings")) || {};
  applySettings(savedSettings);

  // เมื่อกด Save
  saveBtn.addEventListener("click", () => {
    const settings = {
      bgColor: bgColorInput.value,
      fontColor: fontColorInput.value,
      fontSize: fontSizeSelect.value,
    };
    localStorage.setItem("settings", JSON.stringify(settings));
    applySettings(settings);
  });

  // เมื่อกด Reset
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("settings");
    applySettings({});
  });
});
