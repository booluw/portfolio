const theme_switcher = document.querySelectorAll("[data-theme]");

const switchTheme = function () {
  if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.className = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.className = localStorage.getItem("theme");
  }

  theme_switcher.forEach((el) => {
    if (el.dataset.theme !== localStorage.getItem("theme")) {
      el.classList.remove("theme-active");
    } else {
      el.classList.add("theme-active");
    }
  });
}

theme_switcher.forEach((item) => {

  item.addEventListener("click", (e) => {
    document.documentElement.className = e.target.dataset.theme;
    localStorage.setItem("theme", e.target.dataset.theme);
    switchTheme();

  });
});

switchTheme();