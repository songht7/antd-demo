<template>
	<div id="PageInit">
		<a-button @click="onClick">Go Home Page!!!</a-button>
		<router-link to="/home">Go to Home</router-link>
	</div>
</template>

<script>
	export default {
		name: 'PageInit',
		components: {},
		methods: {
			onClick() {
				console.log(this.$route.params)
				this.$router.push('/home')
			}
		}
	}
</script>

<style>
	#PageInit {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
