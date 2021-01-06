onload = function() {
    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;
  letter2.style.left = timePassed / 5 + 'px';
  letter2.style.color = "lightseagreen";
  if (timePassed > 5000) {
      letter1.style.color = "lightseagreen";
      clearInterval(timer);
  }
}, 1);
}