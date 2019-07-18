import Vue from 'vue'
import commentService from './comment-service.vue'
import ScrollLoader from 'vue-scroll-loader'
import VueTimeago from 'vue-timeago'

Vue.config.productionTip = false
Vue.use(ScrollLoader);
Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
});

new Vue({
  el: '#comment-service',
  render: h => h(commentService),
})
//.$mount('#app')
