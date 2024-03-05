import { getTareas } from "../../Apis/tareasApi.js";
export class tarjetasTasks extends HTMLElement{
    constructor(data){
        super();
        this.render(data);
        this.estado = data.estado;
    }
    render(data){
        this.innerHTML = /* html */`
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${data.tarea}</h5>
                    <p class="card-text">${data.descripcion}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.encargado}</li>
                    <li class="list-group-item">Fecha inicio: ${data.fechaIn} <br>Fecha Final: ${data.fechaFin}</li>
                    <li class="list-group-item">${data.prioridad}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Completada</a>
                    <a href="#" class="btn btn-primary">Borrar</a>
                </div>
            </div>
        </div>
    `}
}

customElements.define("task-card",tarjetasTasks);


const data = await getTareas();
data.forEach(task => {
    let container = document.getElementById('incompeletedTasks');
    if (task["estado"] == 'incompleto'){
        let card = new tarjetasTasks(task);
        container.appendChild(card);
    }
});
