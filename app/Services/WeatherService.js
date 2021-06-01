import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { weatherApi } from "../Services/SandboxService.js"
 class WeatherService{

  async getWeather(){
    let res = await weatherApi.get('')
    ProxyState.weather = new Weather(res.data) 
    // console.log(ProxyState.weather, 'tis the forecast')
  }
}
export const weatherService = new WeatherService()