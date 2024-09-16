export function headerToggleOnScroll() {
  const header = document.querySelector("header");
  const headerHeight = header?.offsetHeight || 0;
  let lastScrollTop = 0;

  function toggle() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (header) {
      if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
    }

    lastScrollTop = scrollTop;
  }

  window.removeEventListener("scroll", toggle);
  window.addEventListener("scroll", toggle);
}

export function smoothScroll(targetId: string) {
  const header = document.querySelector("header");
  const headerHeight = header?.offsetHeight || 0;

  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    const isHeaderVisible = header?.style.transform === "translateY(0)";
    const offsetTop =
      (targetElement as HTMLElement).offsetTop - (isHeaderVisible ? headerHeight : 0);

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}
