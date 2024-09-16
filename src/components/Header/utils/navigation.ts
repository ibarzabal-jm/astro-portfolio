import { smoothScroll } from "./scroll";
import { closeSidebar } from "./sidebar";

function updateActiveNavItem() {
  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
  const navItems = document.querySelectorAll(".nav-item, .nav-item-sidebar");
  const sections = document.querySelectorAll("section[id], div[id]");

  const observerOptions = {
    rootMargin: `-${headerHeight}px 0px -50% 0px`,
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        navItems.forEach((item) => {
          const href = item.getAttribute("href");
          if (href) {
            const itemPath = href.split("#")[0];
            const itemHash = href.split("#")[1];
            if (
              (itemPath === "" || itemPath === window.location.pathname) &&
              itemHash === sectionId
            ) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  return () => {
    observer.disconnect();
  };
}

export function initializeNavigation() {
  const navItems = document.querySelectorAll(".nav-item, .nav-item-sidebar");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const href = item.getAttribute("href");
      if (!href) return;

      const currentPath = window.location.pathname;
      const [targetPath, targetHash] = href.split("#");

      if (targetPath === "" || targetPath === currentPath) {
        e.preventDefault();
        closeSidebar();

        if (targetHash) {
          smoothScroll(`#${targetHash}`);
          history.pushState(null, "", `#${targetHash}`);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        closeSidebar();
      }
    });
  });

  updateActiveNavItem();

  const observer = new IntersectionObserver(updateActiveNavItem, {
    rootMargin: "-100px 0px -50% 0px",
    threshold: 0,
  });

  document.querySelectorAll("section[id], div[id]").forEach((section) => {
    observer.observe(section);
  });
}
