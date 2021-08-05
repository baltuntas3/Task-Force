import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    users:[],
    counter:0
  },
  mutations: {
    SET_USERS(state,data){
      state.users=data
    },
    SET_COUNTER(state,counter){
      state.counter=counter
    }
  },
  actions: {
    async getUsers({commit}){
      const getResults=await axios.get("http://localhost:3000/users/all/json")
      //console.log(getResults.data)
      commit("SET_USERS",getResults.data)
    },
    increaseCounter({commit}){
      const counter=this.state.counter+1
      commit("SET_COUNTER",counter)
    }
  },
  modules: {
  }
})
