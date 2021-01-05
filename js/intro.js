let header = document.querySelector('#intro');
let letter1 = document.querySelector('#letter1');

let anim = [
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: "G_", ms: 200 },
    { t: "Ge_", ms: 200 },
    { t: "Gek_", ms: 200 },
    { t: "Geko_", ms: 200 },
    { t: "Gekoi_", ms: 200 },
    { t: "Gekois_", ms: 200 },
    { t: "Gekoism_", ms: 200 },
    { t: "Gekoisme_", ms: 200 },
    { t: "Gekoismee_", ms: 200 },
    { t: "Gekoismee", ms: 200 },
    { t: "Gekoismee_", ms: 200 },
    { t: "Gekoismee", ms: 200 },
    { t: "Gekoismee_", ms: 200 },
    { t: "Gekoismee", ms: 200 },
    { t: "Gekoismee", ms: 200 },
];
let let1 = [
    { t: " ", ms: 800},
    { t: "e", ms: 200},
    { t: "", ms: 2800},
];

let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    let lett1 = let1[i];
    header.innerText = step.t;
    letter1.innerText = lett1.t;
    i++;

    if (i < anim.length){
        setTimeout(update, step.ms / stepDenominator);
        setTimeout(update, lett1.ms / stepDenominator);
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