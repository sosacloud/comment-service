<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <CommentSubmit v-on:submit-comment="addComment" />
    <CommentCount countMessage="# comments" />
    <Comments v-bind:commentList="comments" />
  </div>
</template>

<script>
import $ from 'jquery';
import CommentCount from './components/CommentCount.vue'
import Comments from './components/Comments.vue'
import CommentSubmit from './components/CommentSubmit.vue'
import CommentResponse from './components/CommentResponse.vue'

export default {
  // name: 'app',
  components: {
    CommentCount,
    Comments,
    CommentSubmit,
    CommentResponse
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
    }
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #949494;
  margin-top: 60px;
}
</style>
