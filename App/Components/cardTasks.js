export class cardTasks extends HTMLElement{
    constructor()
    {
    super();
    this.render();
    this.estado = "incomplete";
    }
    render(){
        this.innerHTML = /* html */`
        <div class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.nombre}</h5>
                    <p class="card-text">${this.descripcion}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${this.encargado}</li>
                    <li class="list-group-item">${this.fecha}</li>
                    <li class="list-group-item">${this.prioridad}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Completada</a>
                    <a href="#" class="btn btn-primary">Borrar</a>
                </div>
            </div>
        </div>
    `}
}