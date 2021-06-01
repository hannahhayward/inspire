import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import {imageApi} from "../Services/SandboxService.js"
class ImageService{
  async getImage(){
    // debugger
    let res = await axios.get('https://bcw-sandbox.herokuapp.com/api/images')
    // console.log(res, 'image in service')
    ProxyState.image = new Image(res.data)
    // console.log(ProxyState.image.url, 'proxystate image url')
     
  }
}
export const imageservice = new ImageService()