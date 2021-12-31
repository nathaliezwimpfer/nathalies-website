let acorn1 = document.querySelector('.acorn-1');
let acorn2 = document.querySelector('.acorn-2');

acorn1.addEventListener('mouseover', function(e) {
  event.target.src = "./images/webdev-acorn-new.gif";
});

acorn1.addEventListener('mouseleave', function(e) {
  event.target.src = "./images/acorn-landing-gif.gif";
});

acorn2.addEventListener('mouseover', function(e) {
  event.target.src = "./images/illustration-acorn-tilted.gif";
});

acorn2.addEventListener('mouseleave', function(e) {
  event.target.src = "./images/acorn-tilted-gif.gif";
});
