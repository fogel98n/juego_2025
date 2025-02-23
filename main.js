import { cargarCartas } from "./components/tablero/tablero.js";
import { contenedorPrincipal } from "./components/header/header.js";

cargarCartas();
let DOM = document.querySelector("#root");

let contenedor = document.createElement("div");
contenedor.className = "contenedor";

let header = contenedorPrincipal;

let progreso = document.createElement("nav");
progreso.className = "progreso";

let tablero = document.createElement("div");
tablero.className = "tablero";
tablero.appendChild(cargarCartas());

let footer = document.createElement("footer");
footer.className = "footer";

contenedor.appendChild(header);
contenedor.appendChild(progreso);
contenedor.appendChild(tablero);
contenedor.appendChild(footer);
DOM.appendChild(contenedor);

let todas_cartas = document.querySelectorAll(".div-item");
console.log(todas_cartas);

todas_cartas.forEach((cada_carta) => {
  cada_carta.addEventListener("click", () => {
    cada_carta.classList.add("marcado");
  });
});

