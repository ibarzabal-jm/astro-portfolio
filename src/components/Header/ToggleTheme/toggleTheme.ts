const themeToggles = document.querySelectorAll(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  updateToggleButtons(theme);
}

function updateToggleButtons(theme: "light" | "dark") {
  themeToggles.forEach((toggle) => {
    const moonMask = toggle.querySelector(".moon") as SVGElement;
    if (theme === "dark") {
      moonMask.setAttribute("cx", "17");
    } else {
      moonMask.setAttribute("cx", "24");
    }
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") as "light" | "dark";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(prefersDarkScheme.matches ? "dark" : "light");
}

themeToggles.forEach((toggle) => {
  toggle.addEventListener("click", toggleTheme);
});

prefersDarkScheme.addEventListener("change", (e) => {
  const newTheme = e.matches ? "dark" : "light";
  setTheme(newTheme);
});
