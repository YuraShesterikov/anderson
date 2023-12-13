// const sides = document.querySelectorAll("#side");
const body = document.body,
  html = document.documentElement;

// const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
// sides.forEach((side) => {
//   side.style.height = height + "px";
// });

let slideCount = 4;
if (body.clientWidth < 991) {
  slideCount = 2;
}
if (body.clientWidth < 768) {
  slideCount = 1;
}

const splide = new Splide(".splide", {
  type: "loop",
  perPage: slideCount,
  perMove: 1,
  pagination: false,
  gap: 18,
});

splide.mount();
