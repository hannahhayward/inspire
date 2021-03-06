import { ProxyState } from "../AppState.js"

export class Task {
  constructor(data) {
    // debugger
    this.description = data.description
    this.id = data.id
    this.completed = data.completed 
  }
  get template() {
    return /*html*/ `
  <div> 
  <h6> 
  <input class="input.category_select" type="checkbox" name="${this.id}" id="${this.id}" onclick = "app.tasksController.taskStatus('${this.id}')"  ${this.completed == true ? 'checked': ''}>
      ${this.description} </h6>
     <button class="btn" onclick="app.tasksController.editTask('${this.id}')"> edit </button>
     <button class="btn" onclick="app.tasksController.deleteTask('${this.id}')"> delete </button>
     </div>`
  }
}
