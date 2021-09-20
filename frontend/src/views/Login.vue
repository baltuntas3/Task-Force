<template lang="pug">
main
    LoginPage
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import LoginPage from '@/components/login-page.vue'
import {mapActions, mapState} from "vuex"

export default {
  name: 'Login',
  components: {
    LoginPage
  },
  computed:{
    ...mapState(["users","clicked"])
  },
  methods:{
    ...mapActions(["activeSignIn","activeSignUp"])
  }
  

}
</script>
