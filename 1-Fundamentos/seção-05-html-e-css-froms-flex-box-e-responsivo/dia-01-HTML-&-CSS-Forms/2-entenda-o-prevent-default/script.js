const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const pvd = (event) => {
  event.preventDefault();
}
const pvd2 = (event) => {
  if (event.key !== 'a') {
    event.preventDefault();
  }
}
HREF_LINK.addEventListener('click', pvd);
INPUT_CHECKBOX.addEventListener('click', pvd);
INPUT_TEXT.addEventListener('keypress', pvd2);