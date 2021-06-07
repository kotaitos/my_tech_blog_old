import axios from 'axios'
import api from './api'

const client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    "X-API-KEY": process.env.VUE_APP_X_API_KEY,
  }
})

client.api = api(client)
client.install = function (Vue) {
  Object.defineProperty(Vue.prototype, '$request', {
    get () {
      if (localStorage.getItem('token')) {
        client.defaults.headers.common['Authorization'] = `JWT ${localStorage.getItem('token')}`
      }
      return client
    }
  })
}
export default client
