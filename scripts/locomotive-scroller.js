import LocomotiveScroll from "locomotive-scroll";

const scrollContainer = document.querySelector("[data-scroll-container]");
const internalLinks = document.querySelectorAll("[data-internal-link]");

const scroll = new LocomotiveScroll({
  el: scrollContainer,
});

internalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    scroll.scrollTo(event.target.attributes[0].nodeValue, {
      offset: -90,
    });
  })
})

export default scroll;