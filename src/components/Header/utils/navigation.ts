import { smoothScroll } from "./scroll";
import { closeSidebar } from "./sidebar";

export function updateActiveNavItem() {
  const header = document.querySelector("header");
  const headerHeight = header?.offsetHeight || 0;
  const currentPath = window.location.pathname;
  const scrollPosition = window.scrollY + 50 + headerHeight;
  const navItems = document.querySelectorAll(".nav-item, .nav-item-sidebar");
  const sections = document.querySelectorAll("section[id], div[id]");

  navItems.forEach((item) => item.classList.remove("active"));

  if (currentPath === "/") {
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
      const sectionId = section.id;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navItems.forEach((item) => {
          if (item.getAttribute("href") === `/#${sectionId}`) {
            item.classList.add("active");
          }
        });
      }
    });
  }
}

export function initializeNavigation() {
  const navItems = document.querySelectorAll(".nav-item, .nav-item-sidebar");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const href = item.getAttribute("href");
      if (href && href.startsWith("/#")) {
        e.preventDefault();
        closeSidebar();
        if (window.location.pathname === "/") {
          setTimeout(() => {
            smoothScroll(href.substring(1));
          }, 300);
        } else {
          window.location.href = href;
        }
      }
    });
  });

  updateActiveNavItem();
  window.addEventListener("scroll", updateActiveNavItem);
}
