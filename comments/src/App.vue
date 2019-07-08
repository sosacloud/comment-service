<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <CommentCount countMessage="# comments" />
    <Comments v-bind:commentList="comments" />
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
      [
    {
        "comment_id": 1,
        "user_id": 1,
        "song_id": 1,
        "time_stamp": "2019-06-29T15:35:04.000Z",
        "response_id": 0,
        "comment": "What did I just listen to? lel my sandwich ",
        "user_name": "Nolan.Sauer90",
        "profile_pic": "https://s3.amazonaws.com/uifaces/faces/twitter/aleclarsoniv/128.jpg"
    },
    {
        "comment_id": 2,
        "user_id": 2,
        "song_id": 1,
        "time_stamp": "2019-06-29T15:35:04.000Z",
        "response_id": 0,
        "comment": "Im glad the jam :) :) :) ",
        "user_name": "Sienna83",
        "profile_pic": "https://s3.amazonaws.com/uifaces/faces/twitter/guillemboti/128.jpg"
    },
    {
        "comment_id": 3,
        "user_id": 3,
        "song_id": 1,
        "time_stamp": "2019-06-29T15:35:04.000Z",
        "response_id": 0,
        "comment": "Im glad lel your music :) :) :) ",
        "user_name": "Darryl.Glover82",
        "profile_pic": "https://s3.amazonaws.com/uifaces/faces/twitter/noufalibrahim/128.jpg"
    },
    {
        "comment_id": 4,
        "user_id": 4,
        "song_id": 1,
        "time_stamp": "2019-06-29T15:35:04.000Z",
        "response_id": 0,
        "comment": "This makes me happy lel the jam ",
        "user_name": "Priscilla.Wuckert46",
        "profile_pic": "https://s3.amazonaws.com/uifaces/faces/twitter/SULiik/128.jpg"
    },
    {
        "comment_id": 5,
        "user_id": 5,
        "song_id": 1,
        "time_stamp": "2019-06-29T15:35:04.000Z",
        "response_id": 0,
        "comment": "Im glad dab the sandwich ",
        "user_name": "Bonnie_Kuhlman",
        "profile_pic": "https://s3.amazonaws.com/uifaces/faces/twitter/thatonetommy/128.jpg"
    },
    {
        "comment_id": 6,
        "user_id": 6,
        "song_id": 1,
        "time_stamp": "2019-06-29T15:35:04.000Z",
        "response_id": 0,
        "comment": "dab a music D: ",
        "user_name": "Chloe62",
        "profile_pic": "https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg"
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
