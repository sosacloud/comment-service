<template>
  <div class="hello">
    <div v-for="comment in commentList">
      <div>{{ comment.comment }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    commentList: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>