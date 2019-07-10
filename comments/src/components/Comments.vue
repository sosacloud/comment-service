<template>
  <div class="comments">
    <div v-bind:key="comment.comment_id" v-for="comment in commentList">
      <comment v-bind:comment="comment"/>
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'

export default {
  name: 'Comments',
  components: {
    Comment
  },
  props: {
    commentList: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>