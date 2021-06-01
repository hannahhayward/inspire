import { ProxyState } from "../AppState.js"

export class Task {
  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.completed = data.completed
    // this.user = data.user
  }
  get template() {
    return /*html*/ `
  <div> 
  <h6> 
  <input type="checkbox" name="${this.id}" id="${this.id}" onclick = "app.tasksController.taskStatus('${this.id}')" >
      ${this.description} </h6>
     <button class="btn" onclick="app.tasksController.editTask('${this.id}')"> edit </button>
     <button class="btn" onclick="app.tasksController.deleteTask('${this.id}')"> delete </button>
     </div>`
  }
  // get greetingTemplate(hours) {
  //   if (hours >= 3 && hours < 12) {
  //     template.innerHTML = /*html*/ `
  //       <div class="text-center">
  //         <h1> Good Morning ${this.user} </h1>
  //         </div>`
  //   }
  //   if (hours >= 12 && hours < 17) {
  //     template.innerHTML = /*html*/ `
  //       <div class="text-center">
  //         <h1> Good Afternoon ${this.user} </h1>
  //         </div>`
  //   }
  //   if (hours >= 17 && hours < 24) {
  //     template.innerHTML = /*html*/ `
  //       <div class="text-center">
  //         <h1> Good Evening ${this.user} </h1>
  //         </div>`
  //   }
  // }
}
