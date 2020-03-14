import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/home.vue"
import Hello from "./views/hello.vue"
Vue.use(Router)

const router = new Router({
	// mode: 'history',
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/hello',
			name: 'Hello',
			component: Hello
		}
	]
})
export default router
