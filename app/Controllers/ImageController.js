import { ProxyState } from "../AppState.js";
import { imageservice } from "../Services/ImageService.js";

export class ImageController{
constructor(){
  ProxyState.on ('image', this.draw)
  this.getImage()
}
getImage(){
  try {
    imageservice.getImage()
  } catch (error) {
    console.log(error)
  }
}
draw(){
  document.getElementById('bg-image').style.backgroundImage = `url(${ProxyState.image.url})`
  document.getElementById('bg-image').style.backgroundRepeat = "no-repeat"
  document.getElementById('bg-image').style.backgroundSize = "cover"
}
}