<template>
  <div class="submit">
    <form @submit="submitComment">
      <input type="text" v-model="comment" name="comment" placeholder="Write a comment" >
    </form>
  </div>
</template>

<script>
var moment = require('moment');
var faker = require('faker');

export default {
  name: 'CommentSubmit',
  data() {
    return {comment: ''}
  },
  props: {
    latestCommentId: Number
  },
  methods: {
    submitComment() {
      const newComment= {
        comment_id: 1, //need to pass a prop with current comment ID num
        // user_id: 1,
        song_id: 1, //will be this.songID or something
        time_stamp: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        response_id: 0,
        comment: this.comment,
        user_name: faker.internet.userName(),
        profile_pic: faker.image.avatar(),
        response_id: this.latestCommentId
      }
      // console.log("LASTEST COMM ID IN SUBMIT", this.atestCommentId);
      this.$emit('submit-comment', newComment);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>