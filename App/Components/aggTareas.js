import { postTarea } from "../../Apis/tareasApi.js"

export class tareasAgg extends HTMLElement{
  constructor(){
      super();
      this.render();
      this.saveData();
  }
  render(){
      this.innerHTML = /* html */`
      <!-- Modal -->
      <div class="modal fade" id="regTask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Registrar Tarea</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form class="row g-3" id ="formTask">
                  <div class="col-md-5">
                    <label for="nombreTask" class="form-label"><b>Nombre de la Tarea</b></label>
                    <input type="text" class="form-control" id="nombreTask" required name="tarea">
                  </div>
                  <div class="col-md-6">
                    <label for="encargado" class="form-label"><b>Encargado</b></label>
                    <input type="text" class="form-control" id="encargado" required name="encargado">
                  </div>
                  <div class="col-5">
                    <label for="desc" class="form-label"><b>Descripcion</b></label>
                    <textarea class="form-control" id="desc" name ="descripcion"></textarea>
                  </div>
                  <div class="col-md-3">
                    <label for="fechaInicio" class="form-label"><b>Fecha Inicio</b></label>
                    <input type="date" class="form-control" id="fechaInicio" required name="fechaIn">
                  </div>
                  <div class="col-md-3">
                    <label for="fechaFinal" class="form-label"><b>Fecha Final</b></label>
                    <input type="date" class="form-control" id="fechaFinal" required name="fechaFin">
                  </div>
                  <div style="display: none;">
                    <label for="estado" class="form-label"></label>
                    <input type="text" class="form-control" id="estado" value='incompleto' name="estado">
                  </div>
                  <div class="col-md-3">
                    <label for="inputState" class="form-label"><b>Prioridad</b></label>
                    <select id="inputState" class="form-select" name="prioridad">
                      <option selected>Prioritario</option>
                      <option>Normal</option>
                      <option>No urgente</option>
                    </select>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                    <button type="submit" class="btn btn-success" id ="submitForm">Guardar</button>
                  </div>
                </form>
              </div>
          </div>
          </div>
      </div>
      `;
  }
    saveData=()=>{
      const form = document.querySelector("#formTask");
      form.addEventListener('submit', (e)=>{
        const data = Object.fromEntries(new FormData(form).entries());
        postTarea(data);
        alert("Datos guardados con exito");
        document.querySelector("#submitForm").toggleAttribute('data-bs-dismiss = modal')
        document.querySelector("#submitForm").click();
        document.querySelector("#submitForm").toggleAttribute('data-bs-dismiss = modal')
        e.stopPropagation();
        e.preventDefault();
      })
    }
}
customElements.define("reg-task",tareasAgg);