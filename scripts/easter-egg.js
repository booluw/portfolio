const easterEggs = document.querySelectorAll("[data-easter]");

let rotateCounter = 0

const easter = {
  rotate: function () {
    document.documentElement.classList.add("rotate-page");

    setTimeout(() => {
      document.documentElement.classList.remove("rotate-page");
    }, 500);

    rotateCounter++;

    if (rotateCounter === 5) {
      document.documentElement.classList.add("spin-page");

      setTimeout(() => {
        document.documentElement.classList.remove("spin-page");
      }, 1000);

      rotateCounter = 0
    }
  },
};
const eggs = {
  dbl: {
    attr: "",
    event: "dblclick",
    function: easter.rotate,
  },
  clk: {
    attr: "",
    event: "click",
    function: easter.rotate,
  }
};

const loadEasterEgg = function () {
  easterEggs.forEach((el) => {
    // console.log(eggs[el.dataset.easter].event);
    el.addEventListener(eggs[el.dataset.easter].event, (e) => {
      eggs[el.dataset.easter].function()
    });
  });
};

export default loadEasterEgg;
