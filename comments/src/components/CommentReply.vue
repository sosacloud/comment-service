<template>
  <div class="reply">
    <img class="user_pic" :src="userPic" /> 
    <form @submit="submitComment">
      <input class="reply" type="text" v-model="comment" name="reply" placeholder="Write a reply" >
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
    parentComment: Object,
    userPic: String
  },
  methods: {
    submitComment() {
      const newComment= {
        // user_id: 1,
        song_id: 1, //will be this.songID or something
        time_stamp: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        comment: this.comment,
        user_name: faker.internet.userName(),
        profile_pic: faker.image.avatar(),
        response_id: this.parentComment.response_id //pass prop with
      }
      this.$emit('submit-reply', newComment);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.reply {
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
  position: relative;
  padding: 10px 10px 10px 0;
  display: block;
  transition: opacity 300ms,height 300ms,margin 300ms;
  padding: 5px;
  background: #f2f2f2;
  border: 1px solid #e5e5e5;
  width: 355px;
}
input.reply {
  width: 315px;
  background: #fff;
  padding: 0 9px;
  font-size: 12px;
  outline: none;
  cursor: pointer;
  border: 1px solid #e5e5e5;
  height: 20px;
}
img.user_pic {
    margin-right: 0;
    position: relative;
    float: left;
    width: 20px;
    height: 20px;
}
</style>