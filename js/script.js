const startScreen = document.getElementById("startScreen");
const btnStart = document.getElementById("btnStart");
const somAmbiente = document.getElementById("somAmbiente");
const somSusto = document.getElementById("somSusto");
const btnSom = document.getElementById("btnSom");

let somLigado = true;

btnStart.onclick = () => {
    somAmbiente.play();
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

function ativarJumpscare() {
    const j = document.getElementById("jumpscare");
    j.classList.add("show");
    somSusto.currentTime = 0;
    somSusto.play();

    setTimeout(() => j.classList.remove("show"), 800);
}
