import { smoothScroll } from "./scroll";
import { closeSidebar } from "./sidebar";

const header = document.querySelector("header");
const headerHeight = header?.offsetHeight || 0;

export function updateActiveNavItem() {
  const scrollPosition = window.scrollY + headerHeight + 50;
  const sections = document.querySelectorAll("section[id], div[id]");
  const navItems = document.querySelectorAll(".nav-item, .nav-item-sidebar");

  sections.forEach((section) => {
    const sectionTop = (section as HTMLElement).offsetTop;
    const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
    const sectionId = section.id;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${sectionId}`) {
          item.classList.add("active");
        }
      });
    }
  });
}

export function handleNavItemClick(e: Event) {
  e.preventDefault();
  const target = e.currentTarget as HTMLAnchorElement;
  const targetId = target.getAttribute("href");

  if (targetId) {
    closeSidebar();
    setTimeout(() => {
      smoothScroll(targetId);
    }, 300);
  }
}

export function initializeNavigation() {
  const allNavItems = document.querySelectorAll(".nav-item, .nav-item-sidebar");
  allNavItems.forEach((item) => {
    item.addEventListener("click", handleNavItemClick);
  });

  updateActiveNavItem();
  window.addEventListener("scroll", updateActiveNavItem);
}
