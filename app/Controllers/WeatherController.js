import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
// import { sandboxService } from "../Services/SandboxService.js";
import { weatherService } from "../Services/WeatherService.js";
export class WeatherController {
  constructor() {
    ProxyState.on('weather', this.draw)
    this.getWeather()
  }
  draw() {
    let temp = ((ProxyState.weather.weather - 273.15) * 9 / 5 + 32).toFixed(2)
    // console.log(temp, 'farenheit')
    document.getElementById('weather').innerHTML = /*html*/ `
      <div class="my-2">
        <h4 class="text-center"> ${temp}°F</h4>
      </div>`
  }
  getWeather() {
    try {
      weatherService.getWeather()
    } catch (error) {
      console.log(error)
    }
  }
  tempF() {
    let temp = ((ProxyState.weather.weather - 273.15) * 9 / 5 + 32).toFixed(2)
    // console.log(temp, 'farenheit')
    document.getElementById('weather').innerHTML = /*html*/ `
      <div class="my-2">
        <h4 class="text-center"> ${temp}°F</h4>
      </div>`
  }
  tempC() {
    let temp = Math.floor(ProxyState.weather.weather - 273.15).toFixed(2)
    // console.log(temp, 'Celsius')
    document.getElementById('weather').innerHTML = /*html*/ `
      <div class="my-2">
        <h4 class="text-center"> ${temp}°C </h4>
      </div>`
    }
    tempK(){
      let temp = (ProxyState.weather.weather).toFixed(2)
      document.getElementById('weather').innerHTML = /*html*/ `
      <div class="my-2">
        <h4 class="text-center"> ${temp}°K </h4>
      </div>`
    }
}