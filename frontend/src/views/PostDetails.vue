<script>
import {mapActions} from "vuex"
export default {
  name: 'PostDetails',
  components: { },
  data(){
      return{
          post:{}
      }
  },
  methods:{
    ...mapActions(["fetchPost"])
  },
 async mounted(){
      this.post=await this.fetchPost(this.$route.params.postId)
  }
}
</script>


<template lang="pug">
h1 post Details
| {{ post }}
</template>


<style scoped>

</style>