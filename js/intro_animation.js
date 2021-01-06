intro = function() {
    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

  intro.style.left = timePassed / 5 + 'px';
  intro.style.color = "white";

  if (timePassed > 2000) {
      clearInterval(timer);
  }
}, 1);
}