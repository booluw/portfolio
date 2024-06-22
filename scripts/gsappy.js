import gsap from "gsap";

const el = document.querySelectorAll("[data-animate]");

const animate = function () {
  let elements = gsap.utils.toArray(el);

  elements.forEach((node, index) => {
    gsap.from(node, {
      scale: 3,
      opacity: 0.3,
      duration: 0.2,
      ease: "front(.3)",
      force3D: true,
      stagger: {
        grid: ["auto", elements.length],
        from: "start",
        amount: elements.length,
      },
    });
  })
}

export default animate