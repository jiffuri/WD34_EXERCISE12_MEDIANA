const childern = document.querySelectorAll(".childern");
const parent = document.querySelector(".parent");

let startX;
let scrollTop;
let isDown;

parent.addEventListener("mousedown", (e) => mouseIsDown(e));
parent.addEventListener("mouseup", (e) => mouseUp(e));
parent.addEventListener("mouseleave", (e) => mouseLeave(e));
parent.addEventListener("mousemove", (e) => mouseMove(e));

function mouseIsDown(e) {
  isDown = true;
  startY = e.pageY - parent.offsetTop;
  scrollTop = parent.scrollTop;
}
function mouseUp(e) {
  isDown = false;
}
function mouseLeave(e) {
  isDown = false;
}
function mouseMove(e) {
  if (isDown) {
    e.preventDefault();
    //Move vertcally
    const y = e.pageY - parent.offsetTop;
    const walkY = (y - startY) * 5;
    parent.scrollTop = scrollTop - walkY;
  }
}