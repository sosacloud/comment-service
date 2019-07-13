import Vue from 'vue'
import commentService from './comment-service.vue'

Vue.config.productionTip = false

new Vue({
  el: '#comment-service',
  render: h => h(commentService),
})
//.$mount('#app')
