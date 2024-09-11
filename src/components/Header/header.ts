import { headerToggleOnScroll } from "./utils/scroll";
import { initializeSidebar } from "./utils/sidebar";
import { initializeNavigation, updateActiveNavItem } from "./utils/navigation";

window.addEventListener("scroll", () => {
  headerToggleOnScroll();
  updateActiveNavItem();
});

initializeSidebar();

initializeNavigation();
