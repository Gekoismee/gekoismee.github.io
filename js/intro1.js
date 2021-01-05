let header = document.querySelector('#intro');
let anim = [
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: "G_", ms: 100 },
    { t: "Ge_", ms: 100 },
    { t: "Gek_", ms: 100 },
    { t: "Geko_", ms: 100 },
    { t: "Gekoi_", ms: 100 },
    { t: "Gekois_", ms: 100 },
    { t: "Gekoism_", ms: 100 },
    { t: "Gekoisme_", ms: 100 },
    { t: "Gekoismee_", ms: 100 },
    { t: "Gekoismee", ms: 200 },
    { t: "Gekoismee_", ms: 200 },
    { t: "Gekoismee", ms: 200 },
    { t: "Gekoismee_", ms: 200 },
    { t: "Gekoismee", ms: 200 },
    { t: "Gekoismee", ms: 200 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();