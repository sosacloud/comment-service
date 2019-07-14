<template>
  <div id="comment-service">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <CommentSubmit v-on:submit-comment="addComment" />
    <CommentCount countMessage="# comments" />
    <Comments v-bind:commentList="comments" v-bind:addComment="addComment"/>
  </div>
</template>

<script>
import $ from 'jquery';
import CommentCount from './components/CommentCount.vue'
import Comments from './components/Comments.vue'
import CommentSubmit from './components/CommentSubmit.vue'
import CommentReply from './components/CommentReply.vue'

export default {
  name: 'comment-service',
  components: {
    CommentCount,
    Comments,
    CommentSubmit,
    CommentReply
  },
  data() {
    return {
      comments: []
    }
  },
  methods: {
    addComment(newComment) {
    $.ajax({
      type: "POST",
      url: 'comments/new',
      data: newComment,
      success: (data) => {
        console.log('DATA FROM POST', data);
      }
    });
      // this.comments = [newComment, ...this.comments];
    },
  },
  created() {
    $.get( "comments/init", ( commentList ) => {
      console.log('ALL COMMENTS', commentList);
      this.comments = commentList;
    });
  }
}
</script>

<style>
#comment-service {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #949494;
  margin-top: 60px;
}
</style>
