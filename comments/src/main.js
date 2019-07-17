import Vue from 'vue'
import commentService from './comment-service.vue'
import ScrollLoader from 'vue-scroll-loader'

Vue.config.productionTip = false
Vue.use(ScrollLoader);

new Vue({
  el: '#comment-service',
  render: h => h(commentService),
})
//.$mount('#app')
