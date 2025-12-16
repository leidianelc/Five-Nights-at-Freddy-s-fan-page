const startScreen = document.getElementById("startScreen");
const btnStart = document.getElementById("btnStart");
const somAmbiente = document.getElementById("somAmbiente");
const somSusto = document.getElementById("somSusto");
const btnSom = document.getElementById("btnSom");

let somLigado = true;

btnStart.onclick = () => {
    somAmbiente.volume = 0.5;
    somAmbiente.play().catch(() => {});
    startScreen.style.display = "none";
};

btnSom.onclick = () => {
    if (somLigado) {
        somAmbiente.pause();
        btnSom.textContent = "🔇 SOM";
    } else {
        somAmbiente.play();
        btnSom.textContent = "🔊 SOM";
    }
    somLigado = !somLigado;
};

function ativarJumpscare(id) {
    const jump = document.getElementById(id);
    if (!jump) return;

    jump.classList.add("show");
    somSusto.currentTime = 0;
    somSusto.play();

    setTimeout(() => {
        jump.classList.remove("show");
    }, 800);
}
