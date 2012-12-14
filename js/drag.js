// Based on JavaScript: The Definitive Guide
function drag(elementToDrag, event) {
  var scroll = {x: window.pageXOffset, y: window.pageYOffset};
  var startX = event.clientX + scroll.x;
  var startY = event.clientY + scroll.y;

  var origX = elementToDrag.offsetLeft;
  var origY = elementToDrag.offsetTop;

  var deltaX = startX - origX;
  var deltaY = startY - origY;

  document.addEventListener('mousemove', moveHandler, true);
  document.addEventListener('mouseup', upHandler, true);

  event.stopPropagation();
  event.preventDefault();

  function moveHandler(e) {
    var scroll = {x: window.pageXOffset, y: window.pageYOffset};
    elementToDrag.style.left = (e.clientX + scroll.x - deltaX) + "px";
    elementToDrag.style.top = (e.clientY + scroll.y - deltaY) + "px";

    e.stopPropagation();
  }

  function upHandler(e) {
    document.removeEventListener('mouseup', upHandler, true);
    document.removeEventListener('mousemove', moveHandler, true);
  }
}
