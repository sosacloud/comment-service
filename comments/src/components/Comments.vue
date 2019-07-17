<template>
  <div class="comments">
    <div v-bind:key="comment.comment_id" v-for="comment in commentList">
      <comment class="comment" v-bind:comment="comment" v-bind:addComment="addComment"/>
      <br>
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
    commentList: Array,
    addComment: Function
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>