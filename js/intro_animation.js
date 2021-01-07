let let1 = document.getElementById('let1');
let let2 = document.getElementById('let2');
let let3 = document.getElementById('let3');
let let4 = document.getElementById('let4');

let anim =[
  {c:"black", ms: 100, l:"0%", t:"0%", b:"0%", r:"0%"},
  {c:"lightseagreen", ms: 100, l:"2%", t:"2%", b:"2%", r:"2%"},
  {c:"lightseagreen", ms: 100, l:"4%", t:"4%", b:"4%", r:"4%"},
]

let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    let1.style.color = step.c;
    let2.style.color = step.c;
    let3.style.color = step.c;
    let4.style.color = step.c;
    let1.style.left = step.l;
    let2.style.top = step.t;
    let3.style.bottom = step.b;
    let4.style.right = step.r;
    i++;

    if (i < anim.length){
        setTimeout(update, step.ms / stepDenominator);
    }else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();