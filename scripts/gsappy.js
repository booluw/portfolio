import gsap from "gsap";

const el = document.querySelectorAll("[data-animate]");

const animate = function () {
  let elements = gsap.utils.toArray(el);

  elements.forEach((node, index) => {
    gsap.from(node, {
      scale: 1.5,
      duration: 0.2,
      stagger: -0.4,
    });
  })
}

export default animate