<template>
  <div class="count">
    <div>{{commentCount}} {{ countMessage }}</div>
  </div>
</template>

<script>
export default {
  name: 'CommentCount',
  props: {
    countMessage: String,
    commentCount: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div.count {
  font-weight: 100;
  color: #999;
  border-bottom: 1px solid #f2f2f2;
  font: 12px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
}
</style>
