<script>
// @ is an alias to /src
import postPage from '@/components/post-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Posts',
  components: { 
    postPage
  }
  ,data(){
      return{
          posts:[],
          isLoading:true
      }
  },
  methods:{
    ...mapActions(["fetchAllPosts"])
  },
  async mounted(){
      this.posts=await this.fetchAllPosts()
      this.isLoading=false
  }
}
</script>



<template lang="pug">

p(v-if="isLoading===true") Please wait...
.container(v-else)
  postPage(v-for="postCard in posts" :post="postCard")

</template>

<style scoped>

.container {
  margin-top: 3%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 60%;
}
</style>

