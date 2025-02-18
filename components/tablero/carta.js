import { voltearCarta } from "./funcionescartas.js";

function item(contenido) {
    let div = document.createElement('div');
    div.className = "div-item"; 

    let front = document.createElement('div');
    front.className = "front"; 
    front.innerText = contenido;

    let back = document.createElement('div');
    back.className = "back";
    back.innerText = "?";

    div.appendChild(back); 
    div.appendChild(front); 

    div.addEventListener('click', () => {
        if (div.classList.contains('flipped')) return; 
        voltearCarta(div); 
    });

    return div;
}

export { item };