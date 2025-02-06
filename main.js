import { cargarCartas } from "./components/tablero/tablero.js"

cargarCartas();
let DOM=document.querySelector("#root")

let contenedor=document.createElement("div")
contenedor.className="contenedor"

let header=document.createElement("header")
header.className="header"

let prpgreso=document.createElement("nav")
prpgreso.className="progreso"

let tablero=document.createElement("div")
tablero.className="tablero"
tablero.appendChild(cargarCartas());

let footer=document.createElement("footer")
footer.className="footer"


contenedor.appendChild(header)
contenedor.appendChild(prpgreso)
contenedor.appendChild(tablero)
contenedor.appendChild(footer)
DOM.appendChild(contenedor)