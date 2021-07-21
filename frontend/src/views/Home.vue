<template lang="pug">
main
  
  h2 HelloWorld
  div {{counter}}
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex'
import { computed } from '@vue/runtime-core'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapState({
      counter : (state)=> state.counter
    })
  }
}
</script>
