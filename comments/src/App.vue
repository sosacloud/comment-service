<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <CommentCount countMessage="# comments" />
    <Comments commentList="TEST" />
  </div>
</template>

<script>
import CommentCount from './components/CommentCount.vue'
import Comments from './components/Comments.vue'
import Comment from './components/Comment.vue'
import CommentResponse from './components/CommentResponse.vue'

export default {
  name: 'app',
  components: {
    CommentCount,
    Comments,
    Comment,
    CommentResponse
  },
  data() {
    return {
      comments: [
      {
          "comment_id": 1,
          "user_id": 1,
          "song_id": 1,
          "time_stamp": "2019-06-29T15:35:04.000Z",
          "response_id": 0,
          "comment": "What did I just listen to? lel my sandwich "
      },
      {
          "comment_id": 2,
          "user_id": 2,
          "song_id": 1,
          "time_stamp": "2019-06-29T15:35:04.000Z",
          "response_id": 0,
          "comment": "Im glad the jam :) :) :) "
      },
      {
          "comment_id": 3,
          "user_id": 3,
          "song_id": 1,
          "time_stamp": "2019-06-29T15:35:04.000Z",
          "response_id": 0,
          "comment": "Im glad lel your music :) :) :) "
      },
      {
          "comment_id": 4,
          "user_id": 4,
          "song_id": 1,
          "time_stamp": "2019-06-29T15:35:04.000Z",
          "response_id": 0,
          "comment": "This makes me happy lel the jam "
      }]
    }
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
