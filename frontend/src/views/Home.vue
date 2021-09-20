<template lang="pug">
main
  section
    usersCard(v-for="user in users",:user="user")
  section
    button.increment-button(@click="increaseCounter") incremtn
    div {{counter}}
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
import UsersCard from '@/components/users-card.vue'
import {mapActions, mapState} from "vuex"

export default {
  name: 'Home',
  components: {
    UsersCard
  },
  computed:{
    ...mapState(["users","counter"])
  },
  methods:{
    ...mapActions(["getUsers","increaseCounter"])
  },
  created(){
    this.getUsers()
  }
}
</script>
