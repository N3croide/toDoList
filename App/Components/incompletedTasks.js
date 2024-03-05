import { getTareas } from "../../Apis/tareasApi.js";

const data = getTareas();

let container = document.getElementById('containerTarjetas');
console.log(data)

