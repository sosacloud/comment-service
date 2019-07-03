<template>
  <div class="hello">
    <h1>{{ comment }}</h1>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    comment: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>