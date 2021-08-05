<script>
export default {
  name: "UsersCard",
  props:["user"]
}
</script>

<template lang="pug">
article.card
  img(:src="'https://picsum.photos/300/200?random='+user._id",alt="")
  p {{user.name}}
</template>

<style scoped>
.card{
    color:darkgray;
    text-align: left;
    padding: 20px;
    border: 1px solid #ddd;
    margin: 20px;
    border-radius: 3px;
    display: inline-block;
}
</style>