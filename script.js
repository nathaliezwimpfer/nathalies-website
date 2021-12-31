let acorn1 = document.querySelector('.acorn-1');
let acorn2 = document.querySelector('.acorn-2');
let dataLeak = document.querySelector('.full-image-1');
let twitter = document.querySelector('.full-image-2');
let ideaBot = document.querySelector('.full-image-3');

dataLeak.addEventListener('mouseover', function(e) {
  event.target.src = "./ih-illustrations/Image_FB-dataleak.png";
});

dataLeak.addEventListener('mouseleave', function(e) {
  event.target.src = "./ih-illustrations/1_FB-Data-Leak.gif";
});

twitter.addEventListener('mouseover', function(e) {
  event.target.src = "./ih-illustrations/Image_Twitter.png";
});

twitter.addEventListener('mouseleave', function(e) {
  event.target.src = "./ih-illustrations/1_Twitter.gif";
});

ideaBot.addEventListener('mouseover', function(e) {
  event.target.src = "./ih-illustrations/Image_Idea_Bot.png";
});

ideaBot.addEventListener('mouseleave', function(e) {
  event.target.src = "./ih-illustrations/1_IdeasBot.gif";
});

acorn1.addEventListener('mouseover', function(e) {
  event.target.src = "./webdev-acorn-new.gif";
});

acorn1.addEventListener('mouseleave', function(e) {
  event.target.src = "./acorn-landing-gif.gif";
});

acorn2.addEventListener('mouseover', function(e) {
  event.target.src = "./illustration-acorn-tilted.gif";
});

acorn2.addEventListener('mouseleave', function(e) {
  event.target.src = "./acorn-tilted-gif.gif";
});
