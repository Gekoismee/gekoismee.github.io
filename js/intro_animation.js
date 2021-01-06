onload = function() {
    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;
  letter2.style.left = timePassed / 10 + 'px';
  letter2.style.color = "lightseagreen";
  if (timePassed > 4474) {
      letter1.innerHTML = "Ge";
      letter2.innerHTML ="";
      letter1.style.color = "lightseagreen";
      clearInterval(timer);
  }
}, 1);
}