import { ProxyState } from "../AppState.js"


export class ClockController {
  constructor() {
    ProxyState.on('clock', this.draw)
    this.draw()
  }
  draw() {
    let template = document.getElementById('greeting')
    let date = new Date()
    // console.log(date)
    let hours = date.getHours()
    let mins = date.getMinutes()
    let period = 'am' || 'pm'
    if (hours > 12) {
      hours -= 12
      period = 'pm'
      template.innerHTML = /*html*/ `
    <div class="text-center">
      <h1> Good Evening </h1>
      </div>`
    }
    if (hours == 12) {
      period = 'pm'
      template.innerHTML = /*html*/ `
    <div class="text-center">
      <h1> Good Evening </h1>
      </div>`
    }
    if (hours >= 0 && hours <12) {
      // hours <= 12
      period = 'am'
    }
    let time = `${hours}:${mins} ${period}`
    if (mins < 10) {
      time = `${hours}:0${mins} ${period}`
    }
    this.greeting(hours)
    // console.log(time)
    document.getElementById('clock').innerHTML = `<h3>${time}</h3>`
  }
  greeting(hours) {
    let template = document.getElementById('greeting')

    if (hours >= 3 && hours < 12) {
      template.innerHTML = /*html*/ `
      <div class="text-center">
        <h1> Good Morning </h1>
        </div>`
    }
    if (hours >= 12 && hours < 17) {
      template.innerHTML = /*html*/ `
    <div class="text-center">
      <h1> Good Afternoon </h1>
      </div>`
    }
    if (hours >= 17 && hours < 24) {
    }
  }
}
