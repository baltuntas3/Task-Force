<template lang="pug">
main
  section
    h1 Users
     ol
      li(v-for="user in users")
       | {{ user.messages }}
       
  section
</template>

<style scoped>
section{
  padding: 40px 0;
}
.increment-button{
  color: darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid darkcyan;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}
.increment-button:hover{
  background-color: darkcyan;
  color:white;
}
</style>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {

  },
  data () {
    return{
      users:[],
      isLoading: false
    }
  },
  async mounted(){
    this.users=await this.fetchAllUsers()
  },
  methods:{
    ...mapActions(["fetchAllUsers"])
  },
  
}
</script>
