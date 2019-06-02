import Vue from 'vue'
import App from './App'
import PubFuc from'./publicjs/common'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$pubFuc = PubFuc
const app = new Vue({
    ...App
})
app.$mount()
