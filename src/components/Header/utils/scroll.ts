let lastScrollTop = 0;
const header = document.querySelector("header");
const headerHeight = header?.offsetHeight || 0;

export function headerToggleOnScroll() {
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

export function smoothScroll(targetId: string) {
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
