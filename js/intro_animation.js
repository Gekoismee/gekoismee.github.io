let let1 = document.getElementById('let1');
let let2 = document.getElementById('let2');
let let3 = document.getElementById('let3');
let let4 = document.getElementById('let4');

let anim =[
  {c:"black", ms: 100, l:"0%", t:"0%", b:"100%", r:"100%"},
  {c:"lightseagreen", ms: 100, l:"2%", t:"2%", b:"98%", r:"98%"},
  {c:"lightseagreen", ms: 100, l:"4%", t:"4%", b:"96%", r:"96%"},
  {c:"lightseagreen", ms: 100, l:"6%", t:"6%", b:"94%", r:"94%"},
  {c:"lightseagreen", ms: 100, l:"8%", t:"8%", b:"92%", r:"92%"},
  {c:"lightseagreen", ms: 100, l:"10%", t:"10%", b:"90%", r:"90%"},
  {c:"lightseagreen", ms: 100, l:"12%", t:"12%", b:"88%", r:"88%"},
  {c:"lightseagreen", ms: 100, l:"14%", t:"14%", b:"86%", r:"86%"},
  {c:"lightseagreen", ms: 100, l:"16%", t:"16%", b:"84%", r:"84%"},
  {c:"lightseagreen", ms: 100, l:"18%", t:"18%", b:"82%", r:"82%"},
  {c:"lightseagreen", ms: 100, l:"20%", t:"20%", b:"80%", r:"80%"},
  {c:"lightseagreen", ms: 100, l:"22%", t:"22%", b:"78%", r:"78%"},
  {c:"lightseagreen", ms: 100, l:"24%", t:"24%", b:"76%", r:"76%"},
  {c:"lightseagreen", ms: 100, l:"26%", t:"26%", b:"74%", r:"74%"},
  {c:"lightseagreen", ms: 100, l:"28%", t:"28%", b:"72%", r:"72%"},
  {c:"lightseagreen", ms: 100, l:"30%", t:"30%", b:"70%", r:"70%"},
  {c:"lightseagreen", ms: 100, l:"32%", t:"32%", b:"68%", r:"68%"},
  {c:"lightseagreen", ms: 100, l:"34%", t:"34%", b:"66%", r:"66%"},
  {c:"lightseagreen", ms: 100, l:"36%", t:"36%", b:"64%", r:"64%"},
  {c:"lightseagreen", ms: 100, l:"38%", t:"38%", b:"62%", r:"62%"},
  {c:"lightseagreen", ms: 100, l:"40%", t:"40%", b:"60%", r:"60%"},
  {c:"lightseagreen", ms: 100, l:"42%", t:"42%", b:"58%", r:"58%"},
  {c:"lightseagreen", ms: 100, l:"44%", t:"44%", b:"56%", r:"56%"},
  {c:"lightseagreen", ms: 100, l:"46%", t:"46%", b:"54%", r:"54%"},
  {c:"lightseagreen", ms: 100, l:"48%", t:"48%", b:"52%", r:"52%"},
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
    let3.style.top = step.b;
    let4.style.left = step.r;
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