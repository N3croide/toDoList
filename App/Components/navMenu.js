export class navMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Tasks</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" data-bs-toggle="modal" data-bs-target="#regTask" href="#">Registrar Tarea</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menuSelector" data-verOcultar= '["#completedTasks",["#incompeletedTasks","#deletedTasks"]]' href="#">Tareas Completas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menuSelector" data-verOcultar= '["#incompeletedTasks",["#completedTasks","#deletedTasks"]]' href="#">Tareas Pendientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menuSelector" data-verOcultar= '["#deletedTasks",["#incompeletedTasks","#completedTasks"]]' href="#">Tareas Borradas</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
        this.querySelectorAll(".menuSelector").forEach((val,id) => {
            val.addEventListener("click", (e) => {
                let ver = JSON.parse(e.currentTarget.getAttribute('data-verOcultar'));
                document.querySelector(ver[0]).style.display = "flex";
                ver[1].forEach((element)=>{
                    document.querySelector(element).style.display = "none";
                })
            });
        });   
    }
}

customElements.define("nav-menu",navMenu);