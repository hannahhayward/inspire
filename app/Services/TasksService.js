import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

let url = 'https://bcw-sandbox.herokuapp.com/api/hannah/todos/'
class TasksService {
  async addTask(formData) {
    let res = await axios.post(url, formData)
    // console.log('harrison', res)
    let newTask = new Task(res.data)
    ProxyState.tasks = [newTask, ...ProxyState.tasks]
  }
  async getTasks() {
    let res = await axios.get(url)
    // console.log(res)
    ProxyState.tasks = res.data.map(t => new Task(t))
  }
  async editTask(formData) {
    let res = await axios.put(url + formData.id, formData)
    let taskIndex = ProxyState.tasks.findIndex(t => t.id == res.data.id)
    ProxyState.tasks.splice(taskIndex, 1, new Task(res.data))
    ProxyState.tasks = ProxyState.tasks
  }
  async deleteTask(id) {
    await axios.delete(url + id)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)

  }
  async taskStatus(id) {
    // debugger
    let task = ProxyState.tasks.find(t => id == t.id)
    // Object.defineProperty(task, 'completed', {
    //   value: 'true'
    // })
    if (task.completed == true) {
      Object.defineProperty(task, 'completed', {
        value: false
      })
    }
    if (task.completed == false) {
      Object.defineProperty(task, 'completed', {
        value: true
      })
    }
    let res = await axios.put(url + id, task)
    ProxyState.completeTasks += 1
    ProxyState.tasks = ProxyState.tasks
    document.getElementById(id).checked =true
    console.log(res, 'status change?')
    // ANCHOR WHY WONT IT SAVE
  }
}

export const tasksService = new TasksService