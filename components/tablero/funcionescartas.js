let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false; 
let puntaje = 0; 

function voltearCarta(carta) {
    carta.classList.add('flipped'); 

    if (!primeraCarta) {
        primeraCarta = carta; 
    } else {
        segundaCarta = carta; 
        compararCartas(); 
    }
}

function compararCartas() {
    bloqueo = true;

    if (primeraCarta.querySelector('.front').innerText === segundaCarta.querySelector('.front').innerText) {
        puntaje++;
        console.log(`Puntaje: ${puntaje}`); 
        primeraCarta = null;
        segundaCarta = null;
        bloqueo = false;
    } else {
        puntaje--;
        console.log(`Puntaje: ${puntaje}`); 

        setTimeout(() => {
            primeraCarta.classList.remove('flipped'); 
            segundaCarta.classList.remove('flipped');
            primeraCarta = null;
            segundaCarta = null;
            bloqueo = false;
        }, 1000); 
    }
}

export { voltearCarta, compararCartas };