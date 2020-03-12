import Vue from 'vue'
import Router from 'vue-router'
import App from "../App.vue"
import Home from "../views/home.vue"
import Hello from "../views/hello.vue"
Vue.use(Router)

const routes = [{
		path: '/',
		component: App
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/hello',
		component: Hello
	}
]
const router = new Router({
	routes
})
export default router
