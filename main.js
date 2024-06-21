const theme_switcher = document.querySelectorAll("[data-theme]");

theme_switcher.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.documentElement.className = e.target.dataset.theme;
    // console.log(e.target.dataset.theme);
  });
});
