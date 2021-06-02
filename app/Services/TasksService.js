import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

let url = 'https://bcw-sandbox.herokuapp.com/api/hannah/todos/'
class TasksService {
  async addTask(formData) {
    let res = await axios.post(url, formData)
    let newTask = new Task(res.data)
    ProxyState.tasks = [newTask, ...ProxyState.tasks]
  }
  async getTasks() {
    let res = await axios.get(url)
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
    let task = ProxyState.tasks.find(t => id == t.id)
    task.completed = !task.completed
    let res = await axios.put(url + id, task)
    ProxyState.tasks = ProxyState.tasks
  }
}

export const tasksService = new TasksService