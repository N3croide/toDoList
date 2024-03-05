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
                            <a class="nav-link active" aria-current="page" data-verOcultar= '["#regTask",["#completedTasks","#incompeletedTasks","#deletedTasks"]]' data-section = '["rt"]'data-bs-toggle="modal" data-bs-target="#regTask" href="#">Registrar Tarea</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menuSelector" data-verOcultar= '["#completedTasks",["#regTask","#incompeletedTasks","#deletedTasks"]]' data-section = '["ct"]' href="#">Tareas Completas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menuSelector" data-verOcultar= '["#incompeletedTasks",["#regTask","#completedTasks","#deletedTasks"]]' data-section = '["it"]' href="#">Tareas Pendientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menuSelector" data-verOcultar= '["#deletedTasks",["#regTask","#incompeletedTasks","#completedTasks"]]' data-section = '["dt"]' href="#">Tareas Borradas</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
        this.querySelectorAll(".menuSelector").forEach((val,id) => {
            val.addEventListener("click", (e) => {
                let mainContainer = document.querySelector('#containerTarjetas');
                mainContainer.innerHTML = "";
                let data = JSON.parse(e.target.dataset.section);
                switch (data[0]) {
                    case 'ct':
                        mainContainer.innerHTML = `<div class="conatiner row" id="completedTasks"></div>`            
                        break;
                
                    case 'it':
                        mainContainer.innerHTML = `<div class="conatiner row" id="incompeletedTasks"></div>`            
                        break;
                
                    case 'dt':
                        mainContainer.innerHTML = `<div class="conatiner row" id="deletedTasks"></div>`            
                        break;
                }

            });
        });   
    }
}

customElements.define("nav-menu",navMenu);