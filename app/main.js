import { QuotesController } from "./Controllers/QuotesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { ClockController } from "./Controllers/ClockController.js"
import { TasksController } from "./Controllers/TasksController.js";
import { ImageController } from "./Controllers/ImageController.js";

class App {
  weatherController = new WeatherController
  quotesController = new QuotesController

  clockController = new ClockController 
  tasksController = new TasksController
  imageController = new ImageController
}

window["app"] = new App();
