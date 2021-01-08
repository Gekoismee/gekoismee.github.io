let let1 = document.getElementById('let1');
let let2 = document.getElementById('let2');
let let3 = document.getElementById('let3');
let let4 = document.getElementById('let4');
let full = document.getElementById('full');
let full2 = document.getElementById('full2');

let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let ms = 0;
let l = 0;
let t = 0;
let update = () => {

    let1.style.left = (l+"%");
    let2.style.top = (t+"%");
    let3.style.top = ((100-t)+"%");
    let4.style.left = ((100-l)+"%");
    i++;
    if(l<=50){
    l = l+2;
    t = t+2;
    }
    ms = ms+100;
    if(i>25){
      full.style.opacity="100%"
    }
    if (i>26){
      let1.innerHTML="";
      let2.innerHTML="";
      let3.innerHTML="";
      let4.innerHTML="";
    }
    if (i>30){
        setTimeout(update, ms / stepDenominator);
    }else {
        full.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();