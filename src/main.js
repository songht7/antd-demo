import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './routers'
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
	el: '#app',
	render: h => h(App),
	router
}).$mount()
