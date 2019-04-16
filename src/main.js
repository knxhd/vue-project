// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import header1 from '@/components/header/Header'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vtable from '@/components/common/element-ui/vue/table'
import navMenu from '@/components/common/element-ui/vue/NavMenu'
import vbody from '@/components/body/body'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App, header1, vtable, navMenu, vbody},
  template: '<App/>'
})
