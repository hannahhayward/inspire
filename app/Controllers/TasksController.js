import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

export class TasksController {
  constructor() {
    ProxyState.on('tasks', this.draw)
    this.draw()
    this.getTasks()
  }
  addTask(event) {
    try {
      event.preventDefault()
      let form = event.target
      let formData = {
        description: form.title.value,
      }
      if (form.taskId.value) {
        formData.id = form.taskId.value
        tasksService.editTask(formData)
      }
      else {
        tasksService.addTask(formData)
      }
      form.reset()
    }
    catch (error) {
      console.log(error)
    }
  }
  editTask(id) {
    let task = ProxyState.tasks.find(t => t.id == id)
    let form = document.getElementById('task-form')
    form.taskId.value = task.id
    form.title.value = task.description
  }
  deleteTask(id) {
    try {
      if (Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#257d4f',
        cancelButtonColor: '#e33939',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })) {
        tasksService.deleteTask(id)
      }
    } catch (error) {
      console.log(error)
    }
  }
  getTasks() {
    try {
      tasksService.getTasks()
    } catch (error) {
      console.log(error)
    }
  }
  taskStatus(id) {
    try {
      tasksService.taskStatus(id)
    } catch (error) {
      console.log(error)
    }
    this.draw()
  }
  draw() {
    let tasksComplete = 0
    ProxyState.tasks.forEach(t => { t.completed == true ? tasksComplete += 1 : ''});
    let template = ''
    ProxyState.tasks.forEach(t => { template += t.template })
    document.getElementById('list-items').innerHTML = template
    let count = document.getElementById('task-count')
    ProxyState.tasks.forEach(t => {
      count.innerHTML =
        `${tasksComplete} task(s) completed /${ProxyState.tasks.length} task(s)`
    })
  }
}
