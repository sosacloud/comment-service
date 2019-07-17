<template>
  <div class="comment" v-bind:class="{'is_reply':comment.response_id!==comment.comment_id}">
    <div @mouseover="hover = true" @mouseleave="hover = false">
      <img class="profile" :src="comment.profile_pic" /> 
      <div class="comment-contents">{{ comment.user_name}} at {{ comment.song_time}}
        <br>
        {{ comment.comment }}
      </div>
      <div class="time-stamp" :datetime="comment.time_stamp"># days ago</div>
      <input
        type="button"
        class="reply-button"
        v-show="hover"
        v-bind:addComment="addComment"
        v-on:click="commentClick"
        value="< Reply"
      >
      <!-- <br> -->
      <!-- Need to link reply icon image to CSS -->
    </div>
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
  /* position: relative; */
  margin-left: 15px;
  width: 385px;
}
input.reply-button:before {
    background-size: 16px 16px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9I…cgMyAxMC44MDUgM3oiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
}
img.profile {
  position: absolute;
  left: 15px;
  width: 40px;
  height: 40px;
  opacity: 1;
  border-radius: 50%;
  float: left;
}
div.comment-contents {
  float: left;
  position: relative;
  left: 60px;
  color: #333;
  margin-right: 10px;
  width: 400px;
}
div.time-stamp {
  position: relative;
  color: #999;
  margin-left: 10px;
  font-size: 11px;
}
</style>