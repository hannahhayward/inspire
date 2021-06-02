import { ProxyState } from "../AppState.js"
import { TasksController } from "../Controllers/TasksController.js"
import { CompleteTask } from "../Models/CompleteTask.js"
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
    debugger
    // ProxyState.completeTasks >= 0
    // let taskCount = ProxyState.completeTasks
    let task = ProxyState.tasks.find(t => id == t.id)
    let taskComplete = new CompleteTask(task)
    // console.log(task, 'complete')
    task.completed = !task.completed
    if (task.completed == true) {
      ProxyState.completeTasks.push(task)
      ProxyState.completeTasks = [taskComplete, ...ProxyState.completeTasks]
      // this.CompleteTask(task)
    }
    // if(task.completed == false && ProxyState.completeTasks == 0){
    //   ProxyState.completeTasks = 0
    // }
    if(task.completed == false){
      // let taskindex = ProxyState.completeTasks.findIndex(c => id == c.id)
      // ProxyState.completeTasks.splice(taskindex,1)
      ProxyState.completeTasks.filter(c => id != c.id)
    }
    // task.completed? ProxyState.completeTasks += 1 : task.completed == false ? ProxyState.completeTasks -= 1: ''
    // ProxyState.completeTasks = ProxyState.completeTasks
    let res = await axios.put(url + id, task)
    ProxyState.tasks = ProxyState.tasks
    // ProxyState.tasks.forEach(t => {t.completed == true; taskCount += 1})
    ProxyState.completeTasks = ProxyState.completeTasks
    // console.log(res, 'status change?')
    // TasksController.updateCount(id)
  }
}

export const tasksService = new TasksService