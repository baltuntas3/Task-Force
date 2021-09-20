import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    users:[],
    counter:0,
    clicked:true
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
    },
    activeSignIn(){
      const signUpButton = document.getElementById('signUp');
      const container = document.getElementById('container');
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });
    },
    activeSignUp(){
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');
      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
    }
  },
  modules: {
  }
})
