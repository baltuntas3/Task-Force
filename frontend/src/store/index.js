import { createStore } from 'vuex'
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials=true
export default createStore({
  state: {
    user:""
  },
  mutations: {
    SET_USER(state,getUser){
      state.user=getUser
    }
   
  },
  actions: {
    async fetchAllPosts(){
      const request = await axios.get("/posts/getAllJson")
      return request.data
    },
    async fetchPost({ state }, postId){
      const request = await axios.get(`/posts/getjson/${postId}`)
      return request.data
    },
    async login({ state }, user){
      try{
      const request = await axios.post(`/users/login`,user)
      return request.data
    }
    catch(e){
      return e
    }
      
    },
    async getUser({commit,state}){
      const user= await axios.get('/users/getUser')
      commit('SET_USER',user)
    }
  }
})
