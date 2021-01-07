let let1 = document.getElementById('let1');
let let2 = document.getElementById('let2');
let let3 = document.getElementById('let3');
let let4 = document.getElementById('let4');

let anim =[
  {c:"black", ms: 100, l:"0%", t:"0%", b:"0%", r:"0%"},
  {c:"lightseagreen", ms: 100, l:"2%", t:"2%", b:"2%", r:"2%"},
  {c:"lightseagreen", ms: 100, l:"4%", t:"4%", b:"4%", r:"4%"},
  {c:"lightseagreen", ms: 100, l:"6%", t:"6%", b:"6%", r:"6%"},
  {c:"lightseagreen", ms: 100, l:"8%", t:"8%", b:"8%", r:"8%"},
  {c:"lightseagreen", ms: 100, l:"10%", t:"10%", b:"10%", r:"10%"},
  {c:"lightseagreen", ms: 100, l:"12%", t:"12%", b:"12%", r:"12%"},
  {c:"lightseagreen", ms: 100, l:"14%", t:"14%", b:"14%", r:"14%"},
  {c:"lightseagreen", ms: 100, l:"16%", t:"16%", b:"16%", r:"16%"},
  {c:"lightseagreen", ms: 100, l:"18%", t:"18%", b:"18%", r:"18%"},
  {c:"lightseagreen", ms: 100, l:"20%", t:"20%", b:"20%", r:"20%"},
  {c:"lightseagreen", ms: 100, l:"24%", t:"24%", b:"24%", r:"24%"},
  {c:"lightseagreen", ms: 100, l:"26%", t:"26%", b:"26%", r:"26%"},
  {c:"lightseagreen", ms: 100, l:"28%", t:"28%", b:"28%", r:"28%"},
  {c:"lightseagreen", ms: 100, l:"30", t:"30%", b:"30%", r:"30%"},
  {c:"lightseagreen", ms: 100, l:"32%", t:"32%", b:"32%", r:"32%"},
  {c:"lightseagreen", ms: 100, l:"34%", t:"34%", b:"34%", r:"34%"},
  {c:"lightseagreen", ms: 100, l:"36%", t:"36%", b:"36%", r:"36%"},
  {c:"lightseagreen", ms: 100, l:"38%", t:"38%", b:"38%", r:"38%"},
  {c:"lightseagreen", ms: 100, l:"40%", t:"40%", b:"40%", r:"40%"},
  {c:"lightseagreen", ms: 100, l:"42%", t:"42%", b:"42%", r:"42%"},
  {c:"lightseagreen", ms: 100, l:"44%", t:"44%", b:"44%", r:"44%"},
  {c:"lightseagreen", ms: 100, l:"46%", t:"46%", b:"46%", r:"46%"},
  {c:"lightseagreen", ms: 100, l:"48%", t:"48%", b:"48%", r:"48%"},
  {c:"lightseagreen", ms: 100, l:"50%", t:"50%", b:"50%", r:"50%"}
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
        let1.classList.add('top');
        let2.classList.add('top');
        let3.classList.add('top');
        let4.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();