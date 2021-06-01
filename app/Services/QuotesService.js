import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { quotesApi } from "./SandboxService.js"


class QuotesService{
  async getQuote(){
    let res = await quotesApi.get('')
    ProxyState.quote = new Quote(res.data)
    // console.log(ProxyState.quote, 'tis the quote')
  }
}
export const quotesService = new QuotesService()