<template>
  <div class="comment" v-bind:class="{'is_reply':comment.response_id!==comment.comment_id}">
    <div @mouseover="hover = true" @mouseleave="hover = false">
      <img class="profile" :src="comment.profile_pic" /> 
      <div class="comment-contents">
        <div class="user-name" @mouseover="hoverOverlay = true" @mouseleave="hoverOverlay = false">{{comment.user_name}}</div> <a class="at">at</a> {{ this.song_time }}
        <br>
        <div class="comment-text">{{ comment.comment }}</div>
      </div>
      <div class="meta">
      <div class="time-stamp" :datetime="comment.time_stamp">
        <timeago :datetime="comment.time_stamp" :auto-update="60"></timeago>
        </div>
      <input
        type="button"
        class="reply-button"
        v-show="hover"
        v-bind:addComment="addComment"
        v-on:click="commentClick"
        value="Reply"
      >
      </div>
      <br>
      <br>
      <!-- Need to link reply icon image to CSS -->
    </div>
    <CommentReply v-bind:userPic="userPic" v-bind:parentComment="comment" v-on:submit-reply="addComment" v-show="clicked"/>
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
    addComment: Function,
    userPic: String
  },
  data() {
    return {
      hover: false,
      clicked: false,
      hoverOverlay: false,
    };
  },
  methods: {
    commentClick() {
      this.clicked = true;
    },
    songTimeMethod(num) {
      let songTime = String(parseInt(num / 60)) + ':' + String(num % 60).padStart(2,0);
      console.log('INSIDE', String(parseInt(num / 60)) + ':' + String(num % 60).padStart(2,0))
      return songTime;
    }
  },
  created() {
    this.song_time = this.songTimeMethod(this.comment.song_time);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.is_reply {
  position: relative;
  margin-left: 15px;
  /* width: 200px; */
  /* margin: 15px; */
}
div.meta {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
div.comment-text {
  color:black;
  word-wrap: break-word;
  width: 350px;
}
input.reply-button {
  position: absolute;
  /* left: 360px; */
  margin-top: 20px;
  /* background-size: 16px 16px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9I…cgMyAxMC44MDUgM3oiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==); */
}
/* input.reply-button div.is_reply {
  position: absolute;
  left: 335px;
  margin-top: 20px;
  background-size: 16px 16px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9I…cgMyAxMC44MDUgM3oiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
} */
img.profile {
  position: absolute;
  float: left;
  left: 15px;
  width: 40px;
  height: 40px;
  opacity: 1;
  border-radius: 50%;
  float: left;
  cursor:pointer;
}
div.comment-contents {
  float: left;
  position: absolute;
  left: 60px;
  /* color: #333; */
  /* margin-right: 10px; */
  /* flex-direction: column; */
  /* width: 400px; */
}
div.time-stamp {
  position: relative;
  text-align: right;
  cursor: pointer;
}

div.user-name {
  display:inline;
  cursor: pointer;
}
a.at {
  color:#BBBBBB;
  font-size:11px;
}
</style>