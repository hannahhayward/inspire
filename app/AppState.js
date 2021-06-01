import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Weather } from "./Models/Weather.js"
import { Quote } from "./Models/Quote.js"
import { Task } from "./Models/Task.js"
import { Image } from "./Models/Image.js"
class AppState extends EventEmitter {
  /**@type {Image} */
  image = null
  /**@type {Weather} */
  weather = null
  /**@type  {Quote} */
  quote = null
  /**@type {Task[]} */
  tasks = []
  completeTasks = 0
  clock = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
