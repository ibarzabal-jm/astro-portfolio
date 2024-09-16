export function toggleSidebar() {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const body = document.body;

  hamburger?.classList.toggle("active");
  sidebar?.classList.toggle("active");
  body.classList.toggle("no-scroll");
}

export function closeSidebar() {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const body = document.body;

  body.classList.remove("no-scroll");
  hamburger?.classList.remove("active");
  sidebar?.classList.remove("active");
}

export function initializeSidebar() {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleSidebar);
  }
}
