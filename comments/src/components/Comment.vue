<template>
  <div class="comment" v-bind:class="{'is_reply':comment.response_id!==comment.comment_id}">
    <div @mouseover="hover = true" @mouseleave="hover = false">
      {{ comment.user_name}} at {{ comment.song_time}}
      <br>
      {{ comment.comment }} - {{comment.response_id}} - {{comment.comment_id}}
      <input
        type="button"
        v-show="hover"
        v-bind:addComment="addComment"
        v-on:click="commentClick"
        value="< Reply"
      ></div>
    <CommentReply v-bind:parentComment="comment" v-on:submit-reply="addComment" v-show="clicked"/>

  </div>
</template>

<script>
import CommentReply from '../components/CommentReply.vue'

export default {
  name: 'Comment',
  components: {
    CommentReply
  },
  props: {
    comment: Object,
    addComment: Function
  },
  data() {
    return {
      hover: false,
      clicked: false
    };
  },
  methods: {
    commentClick() {
      this.clicked = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.is_reply {
  position: relative;
  left: 15px;
}
</style>