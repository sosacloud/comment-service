<template>
  <div class="comments">
    <div class="comment-div" v-bind:key="comment.comment_id" v-for="comment in commentList">
      <comment v-bind:comment="comment" v-bind:addComment="addComment"/>
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
div.comment-div {
  width: 400px;
}
</style>