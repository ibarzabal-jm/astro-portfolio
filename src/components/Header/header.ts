// when user scroll down hide the header

let lastScrollTop = 0;
const header = document.querySelector("header");
const headerHeight = header?.offsetHeight || 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (header) {
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      // Scroll hacia abajo
      header.style.transform = "translateY(-100%)";
    } else {
      // Scroll hacia arriba
      header.style.transform = "translateY(0)";
    }
  }

  lastScrollTop = scrollTop;
});
