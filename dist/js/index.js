// INPUT
const inputJam = document.getElementById("input-jam");
const inputMenit = document.getElementById("input-menit");
const inputDetik = document.getElementById("input-detik");

// OUTPUT
const jam = document.getElementById("jam");
const menit = document.getElementById("menit");
const detik = document.getElementById("detik");
const containerCounter = document.querySelector(".container-count");
const closeBtn = document.getElementById("close");
const sound = document.getElementById("sound");

// TEXT ALERT
const textAlert = document.getElementById("text");

// MENENTUKAN NILAI MAKSIMAL
inputMenit.addEventListener("input", () => {
    if (inputMenit.value > 60) {
        inputMenit.value = 60;

        textAlert.innerHTML = "Maksimal hanya sampai 60 !"
    }
})

inputDetik.addEventListener("input", () => {
    if (inputDetik.value > 60) {
        inputDetik.value = 60;

        textAlert.innerHTML = "Maksimal hanya sampai 60 !"
    }
})

let startTimer = null;

function timer() {

    if (jam.innerHTML == 0 && menit.innerHTML == 0 && detik.innerHTML == 0) {

        jam.innerHTML = 0;
        menit.innerHTML = 0;
        detik.innerHTML = 0;

        sound.pause();
        sound.currentTime = 0;

        clearInterval(startTimer);

    } else if (detik.innerHTML != 0) {

        detik.innerHTML--;

    } else if (menit.innerHTML != 0 && detik.innerHTML == 0) {

        detik.innerHTML = 59;
        menit.innerHTML--;

    } else if (jam.innerHTML != 0 && menit.innerHTML == 0) {

        menit.innerHTML = 60;
        jam.innerHTML--;

    }

    return;
}

// BUTTON INPUT
const counterBtn = document.getElementById("counter");

counterBtn.addEventListener("click", function () {
    containerCounter.classList.remove("hidden");

    sound.play();

    jam.innerHTML = inputJam.value;
    menit.innerHTML = inputMenit.value;
    detik.innerHTML = inputDetik.value;

    function startInterval() {

        startTimer = setInterval(() => {

            timer();

        }, 1000);
    }

    startInterval();
})

closeBtn.addEventListener("click", function () {
    containerCounter.classList.add("hidden");

    sound.pause();
    sound.currentTime = 0;
})