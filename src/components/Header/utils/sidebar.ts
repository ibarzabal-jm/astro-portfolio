const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const body = document.body;

export function toggleSidebar() {
  hamburger?.classList.toggle("active");
  sidebar?.classList.toggle("active");
  body.classList.toggle("no-scroll");
}

export function closeSidebar() {
  hamburger?.classList.remove("active");
  sidebar?.classList.remove("active");
  body.classList.remove("no-scroll");
}

export function initializeSidebar() {
  if (hamburger && sidebar) {
    hamburger.addEventListener("click", toggleSidebar);
  }
}
