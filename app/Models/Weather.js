export class Weather {
  constructor(data) {
    // debugger
    this.weather = data.main.temp
    this.skies = data.weather.main
    this.icon = data.weather[0].icon
    // this.temperature = 
    // this.wind = data.wind.speed
  }
get buttonTemplate(){
  return /*html*/ `<div class="btn-group btn-group-toggle text-center" data-toggle="buttons">
  <label class="btn btn-primary active">
      <input type="radio" name="options" id="option1" checked
          onclick="app.weatherController.tempF()"> Farenheit
  </label>
  <label class="btn btn-primary">
      <input type="radio" name="options" id="option2" onclick="app.weatherController.tempC()">
      Celsius
  </label>
  <label class="btn btn-primary">
      <input type="radio" name="options" id="option3" onclick="app.weatherController.draw()">
      Kelvin
  </label>
</div>`
}
}