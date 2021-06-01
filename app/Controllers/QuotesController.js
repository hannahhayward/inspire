import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quotesService } from "../Services/QuotesService.js";


export class QuotesController{
  constructor(){
    ProxyState.on('quote', this.draw)
    this.getQuote()
  }
  draw(){
    console.log('drew quote')
    let quote = document.getElementById('quote')
    quote.innerHTML = /*html*/ `
    <div>
      <h2 class="text-center"> "${ProxyState.quote.content}" </h2>
      <div class="quote-info text-right">
      <i> -${ProxyState.quote.author} </i>
      </div>
    </div>
    `
  }
  getQuote(){
    try {
      quotesService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }

}