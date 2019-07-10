<template>
  <div class="reply">
    <form @submit="submitComment">
      <input type="text" v-model="comment" name="reply" placeholder="Write a reply" >
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
    parentComment: Object
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
        response_id: props.parentComment.comment_id//pass prop with
      }
      this.$emit('submit-reply', newComment);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>