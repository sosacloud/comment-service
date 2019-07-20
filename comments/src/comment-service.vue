<template>
  <div id="comment-service">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <CommentSubmit v-on:submit-comment="addComment" v-bind:latestCommentId="latestCommentId"/>
    <CommentCount v-bind:commentCount="commentCount" countMessage="comments" />
    <Comments v-bind:commentList="comments" v-bind:addComment="addComment"/>
    
    <scroll-loader :loader-method="getComments" :loader-enable="loadMore">
      <!-- <img class="loading" src="./assets/giphy.gif" /> -->
      <div>Loading...</div>
    </scroll-loader>
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
      comments: [],
      commentCount: 0,
      latestCommentId: 0,
      page: 0,
      loadMore: true
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
    getComments() {
    $.get( "comments/init", {start: this.page})
    .then(( commentList ) => {
      // console.log('ALL COMMENTS', commentList);
      this.comments = [...this.comments, ...commentList];
      //Stop Scroll Loader
      // console.log("LOAD MORE", this.loadMore);
      commentList.length < 10 && (this.loadMore = false)
    }). done( () => {
      // console.log('LATEST ID', this.comments)
      this.page++;
    })
    }
  },
  created() {
    this.getComments();

    $.get( "comments/count", {songName: 'This Song'}) 
    .done(( commentCount ) => {
      // console.log('COMMENT COUNT', commentCount);
      this.commentCount = commentCount['count(*)'];
      this.latestCommentId = this.commentCount + 1; // Can add another call to get count of all comments in DB for latestCommentId
    });

  }
}
</script>

<style>
#comment-service {
  font: 12px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #949494;
  margin-top: 60px;
  position: relative;
  margin-left: 100px;
}
</style>
