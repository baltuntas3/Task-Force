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
          isLoading:false
      }
  },
  methods:{
    ...mapActions(["fetchAllPosts"])
  },
  async mounted(){
      this.posts=await this.fetchAllPosts()
  }
}
</script>



<template lang="pug">
main
  section
   h1 POSTS
    .container
     postPage(v-for="postCard in posts" :post="postCard")

</template>

<style scoped>
.container {
  display: flex;
  width: 1040px;
  justify-content: left;
  flex-wrap: nowrap;
}
</style>

