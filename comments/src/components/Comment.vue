<template>
  <div class="comment" v-bind:class="{'is_reply':comment.response_id}">
    <div @mouseover="hover = true" @mouseleave="hover = false">
      {{ comment.comment }}
      <input type="button" v-show="hover" value="< Reply"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Comment',

  props: {
    comment: Object
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {
    // mouseOverReply() {
    //   this.reply = !this.reply
    //   console.log('MOUSEOVERREPLY', this.reply);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>