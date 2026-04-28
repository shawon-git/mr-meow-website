const members = [
  { name: "Sudipto Nandi Shawon", title: "Leader", bio: "", photo: "assets/shawon.jpg" },
  { name: "Shougoto Hazra Partho", title: "Member #2", bio: "", photo: "assets/partho.png" }
];

const navMenu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuBtn");
if (menuBtn && navMenu) menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("mrmeow-theme");
if (savedTheme === "light") document.body.classList.add("light");
if (themeToggle) {
  themeToggle.textContent = document.body.classList.contains("light") ? "☾" : "☼";
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const light = document.body.classList.contains("light");
    localStorage.setItem("mrmeow-theme", light ? "light" : "dark");
    themeToggle.textContent = light ? "☾" : "☼";
  });
}

const memberGrid = document.getElementById("memberGrid");
if (memberGrid) {
  memberGrid.innerHTML = members.map(member => `
    <article class="member-card">
      <img src="${member.photo}" alt="${member.name}">
      <h3>${member.name}</h3>
      <div class="role">${member.title}</div>
      ${member.bio ? `<p>${member.bio}</p>` : ""}
    </article>
  `).join("");
}

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

function loginAdmin() {
  const user = document.getElementById("adminUser")?.value;
  const pass = document.getElementById("adminPass")?.value;
  const panel = document.getElementById("adminPanel");
  const message = document.getElementById("loginMessage");
  if (user === "Shawon229" && pass === "607070") {
    document.querySelector(".login-area")?.classList.add("hidden");
    panel?.classList.remove("hidden");
  } else if (message) {
    message.textContent = "Wrong username or password.";
  }
}
window.loginAdmin = loginAdmin;
