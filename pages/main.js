//#region Decline Variables

let egg = document.getElementById('egg');
let displayer = document.getElementById('displayer');
let displayTools = document.getElementById('displayTools');
let realClicksDisplay = document.getElementById('realClicksDisplay');
let saveProgress = document.getElementById('saveProgress');

let eggClicks = 1000000;
let realClicks = 0;
let today = new Date().getHours();

// Tools

let hand = true;
let rollingPin = false;
let hammer = false;
let baseballBat = false;
let knife = false;

checkStatus(eggClicks);
displayer.innerHTML = eggClicks;

//#endregion

//#region Decline Functions

function setLocalStorage() {
    localStorage.setItem('eggClicks', eggClicks);
    localStorage.setItem('realClicks', realClicks);

}

function getLocalStorage() {
    if (localStorage.getItem('eggClicks') == null || localStorage.getItem('realClicks') == null) {
        setLocalStorage();
    }else{
        eggClicks = localStorage.getItem('eggClicks');
        realClicks = localStorage.getItem('realClicks');
        realClicksDisplay.innerText = "Clicks reales: " + realClicks;
        checkStatus(eggClicks);
    }
}

function checkStatus(clicks) {
    if (clicks <= 950000 && rollingPin == false) {
        if (hand == true) {
            alert("¡Felicidades! Desbloqueaste el palo de amasar (2 de daño)")
            hand = false;
            rollingPin = true;
            hammer = false;
            baseballBat = false;
            knife = false;
            displayTools.innerHTML = `
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Mano: ✔</p>
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Palo de amasar: ✔</p>
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Martillo: ✘</p>
            `
        }
    }else if (clicks <= 850000 && hammer == false) {
        if (rollingPin == true) {
            alert("¡Felicidades! Desbloqueaste el martillo (4 de daño)")
            hand = false;
            rollingPin = false;
            hammer = true;
            baseballBat = false;
            knife = false;
            displayTools.innerHTML = `
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Mano: ✔</p>
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Palo de amasar: ✔</p>
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Martillo: ✔</p>
            `
        }
    }else if (clicks <= 500000 && baseballBat == false) {
        if (hammer == true) {
            alert("¡Felicidades! Desbloqueaste el palo de béisbol (8 de daño)")
            hand = false;
            rollingPin = false;
            hammer = false;
            baseballBat = true;
            knife = false;
            displayTools.innerHTML = `
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Mano: ✔</p>
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Palo de amasar: ✔</p>
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Martillo: ✔</p>
            `
        }
    }else if (clicks <= 200000 && knife == false) {
        if (baseballBat == true) {
            alert("¡Felicidades! Desbloqueaste el cuchillo (10 de daño)")
            hand = false;
            rollingPin = false;
            hammer = false;
            baseballBat = true;
            knife = true;
            displayTools.innerHTML = `
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Mano: ✔</p>
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Palo de amasar: ✔</p>
                <p style="font-size: 55px;margin-left: 80px;color:#fff;">Martillo: ✔</p>
            `
        }
    }
}

//#endregion

//#region Change Background

let timer = setInterval(() => {
    if (today >= 0 && today < 12) {
        document.body.style.backgroundImage = "url('bg-morning.jpg')";
        //title.innerText = "Bienvenido, ¡buenos días!";
    }else if (today >= 12 && today < 18) {
        document.body.style.backgroundImage = "url('bg-day.png')";
    }else if (today >= 18 && today < 24) {
        document.body.style.backgroundImage = "url('bg-midnight.png')";
    }
}, 1);

//#endregion

//#region Manage of the egg

saveProgress.addEventListener('click', () => {
    setLocalStorage();
});

egg.addEventListener('click', () => {
    if (hand == true && rollingPin == false && hammer == false && baseballBat == false) {
        eggClicks--;
        realClicks++;
        displayer.innerText = eggClicks;
        realClicksDisplay.innerText = "Clicks reales: " + realClicks;
        checkStatus(eggClicks);
        if (eggClicks <= 0) {
            window.location.href = "win/you-win.html";
        }
    }else if (hand == false && rollingPin == true && hammer == false && baseballBat == false && knife == false) {
        eggClicks -= 2;
        realClicks++;
        displayer.innerText = eggClicks;
        realClicksDisplay.innerText = "Clicks reales: " + realClicks;
        checkStatus(eggClicks);
        if (eggClicks <= 0) {
            window.location.href = "win/you-win.html";
        }
    }else if (hand == false && rollingPin == false && hammer == true && baseballBat == false && knife == false) {
        eggClicks -= 4;
        realClicks++;
        displayer.innerText = eggClicks;
        realClicksDisplay.innerText = "Clicks reales: " + realClicks;
        checkStatus(eggClicks);
        if (eggClicks <= 0) {
            window.location.href = "win/you-win.html";
        }
    }else if (hand == false && rollingPin == false && hammer == false && baseballBat == true && knife == false) {
        eggClicks -= 8;
        realClicks++;
        displayer.innerText = eggClicks;
        realClicksDisplay.innerText = "Clicks reales: " + realClicks;
        checkStatus(eggClicks);
        if (eggClicks <= 0) {
            window.location.href = "win/you-win.html";
        }
    }else if (hand == false && rollingPin == false && hammer == false && baseballBat == false && knife == true) {
        eggClicks -= 10;
        realClicks++;
        displayer.innerText = eggClicks;
        realClicksDisplay.innerText = "Clicks reales: " + realClicks;
        checkStatus(eggClicks);
        if (eggClicks <= 0) {
            window.location.href = "win/you-win.html";
        }
    }
})

//#endregion

// Start

getLocalStorage();