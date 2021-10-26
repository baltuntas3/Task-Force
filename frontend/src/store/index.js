import { createStore } from 'vuex'
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3000"

export default createStore({
  state: {
    
  },
  mutations: {
   
  },
  actions: {
    async fetchAllPosts(){
      const request = await axios.get("/posts/getAllJson")
      return request.data
    },
    loginTheSystem(userName,password){
      
    },
    async fetchPost({ state }, postId){
      const request = await axios.get(`/posts/getjson/${postId}`)
      return request.data
    }

  }
})
