let header = document.querySelector('#intro');

let anim = [
    { t: " ", ms: 200, l: "0%" },
    { t: "_", ms: 200, l: "10%" },
    { t: " ", ms: 200, l: "20%" },
    { t: "_", ms: 200, l: "30%" },
    { t: "G_", ms: 200, l: "40%" },
    { t: "Ge_", ms: 200, l: "50%" },
    { t: "Gek_", ms: 200, l: "60%" },
    { t: "Geko_", ms: 200, l: "70%" },
    { t: "Gekoi_", ms: 200, l: "80%" },
    { t: "Gekois_", ms: 200, l: "90%" },
    { t: "Gekoism_", ms: 200, l: "100%" },
    { t: "Gekoisme_", ms: 200, l: "100%" },
    { t: "Gekoismee_", ms: 200, l: "100%" },
    { t: "Gekoismee", ms: 200, l: "100%" },
    { t: "Gekoismee", ms: 200, l: "100%" },
];


let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    header.style.left = step.l;
    i++;

    if (i < anim.length){
        setTimeout(update, step.ms / stepDenominator);
    }else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();