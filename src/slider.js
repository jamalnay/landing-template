const container = document.getElementById("testimonials-section");
const cards = document.getElementById("testimonials-cards");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

cards.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.clientX - cards.offsetLeft;
  cards.style.cursor = "grabbing";
});

cards.addEventListener("mouseup", () => {
  cards.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
  container.style.cursor = "default";
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.clientX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}
