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
    // ProxyState.completeTasks >= 0
    // let taskCount = ProxyState.completeTasks
    let task = ProxyState.tasks.find(t => id == t.id)
    console.log(task, 'complete')
    task.completed = !task.completed
    if (task.completed == true) {
      ProxyState.completeTasks += 1
    }
    if(task.completed == false && ProxyState.completeTasks == 0){
      ProxyState.completeTasks = 0
    }
    if(task.completed == false && ProxyState.completeTasks >0){
      ProxyState.completeTasks -= 1
    }
    // task.completed? ProxyState.completeTasks += 1 : task.completed == false ? ProxyState.completeTasks -= 1: ''
    // ProxyState.completeTasks = ProxyState.completeTasks
    debugger
    let res = await axios.put(url + id, task)
    ProxyState.tasks = ProxyState.tasks
    // ProxyState.tasks.forEach(t => {t.completed == true; taskCount += 1})
    ProxyState.completeTasks = ProxyState.completeTasks
    console.log(res, 'status change?')
  }
}

export const tasksService = new TasksService