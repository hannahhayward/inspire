
 export const weatherApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/weather"
})
 export const quotesApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/quotes"
})
export const imageApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/images"
})
const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/"
})

// class SandboxService{
//   constructor(){}
//  async setUser(formData){
//   let user = formData

// }
// }
// export const sandboxService = new SandboxService()
