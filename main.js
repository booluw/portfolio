import loadEasterEgg from "./scripts/easter-egg";
import scroll from "./scripts/locomotive-scroller";

const theme_switcher = document.querySelectorAll("[data-theme]");

const switchTheme = function () {

  document.documentElement.classList.forEach((cls) => {
    if (
      ["primary", "reading", "space", "dark"].includes(cls) &&
      cls !== localStorage.getItem("theme")
    ) {
      document.documentElement.classList.remove(cls);
    }
  });

  if (
    !("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.add(localStorage.getItem("theme"));
  }

  theme_switcher.forEach((el) => {
    if (el.dataset.theme !== localStorage.getItem("theme")) {
      el.classList.remove("theme-active");
    } else {
      el.classList.add("theme-active");
    }
  });
};

theme_switcher.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.documentElement.classList.add(e.target.dataset.theme);
    localStorage.setItem("theme", e.target.dataset.theme);
    switchTheme();
  });
});

switchTheme();
loadEasterEgg();
scroll.init();
