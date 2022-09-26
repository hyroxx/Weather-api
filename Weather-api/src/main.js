import Vue from 'vue'
import App from './App.vue'
import vueResource from "vue-resource"
import {store} from "./store"

Vue.use(vueResource)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
