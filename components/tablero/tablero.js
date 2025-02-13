import { todas_las_cartas } from "./data.js";

let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false; 
let puntaje = 0; // Variable para el puntaje

function item(contenido) {
    let div = document.createElement('div');
    div.className = "div-item flipped"; 

    let front = document.createElement('div');
    front.className = "front";
    front.innerText = contenido;

    let back = document.createElement('div');
    back.className = "back";
    back.innerText = "?";

    div.appendChild(front);
    div.appendChild(back);

    div.addEventListener('click', () => {
        if (bloqueo || !div.classList.contains('flipped')) return; 
        voltearCarta(div);
    });

    return div;
}

function voltearCarta(carta) {
    carta.classList.remove('flipped'); 

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
        // Las cartas son iguales, aumentar el puntaje
        puntaje++;
        console.log(`Puntaje: ${puntaje}`); // Mostrar el puntaje en la consola
        primeraCarta = null;
        segundaCarta = null;
        bloqueo = false;
    } else {
        // Las cartas no son iguales, disminuir el puntaje
        puntaje--;
        console.log(`Puntaje: ${puntaje}`); // Mostrar el puntaje en la consola

        setTimeout(() => {
            primeraCarta.classList.add('flipped');
            segundaCarta.classList.add('flipped');
            primeraCarta = null;
            segundaCarta = null;
            bloqueo = false;
        }, 1000); 
    }
}

function cargarCartas() {
    let div = document.createElement('div');
    div.className = "div-tablero";
    todas_las_cartas.forEach((letra) => {
        div.appendChild(item(letra));
    });
    return div;
}

export { cargarCartas };