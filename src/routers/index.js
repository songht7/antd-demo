import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/home.vue"
import Hello from "../views/hello.vue"
Vue.use(Router)

export default new Router({
	router:[
		{
			path:"/",
			component:Home
		},
		{
			path:"/hello",
			component:Hello
		}
	]
}
)