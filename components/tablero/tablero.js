import { todas_las_cartas } from "./data.js";
import { item } from "./carta.js";

function cargarCartas() {
    let div = document.createElement('div');
    div.className = "div-tablero";
    todas_las_cartas.forEach((letra) => {
        div.appendChild(item(letra));
    });
    return div;
}

export { cargarCartas };
