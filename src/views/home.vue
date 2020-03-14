<template>
	<div id="Home">
		<a-layout>
			<a-layout-header>header</a-layout-header>
			<a-layout-content>
				<img alt="Vue logo" src="@/assets/logo.png">{{BASE_URL}}
				<a-icon type="play-circle" />
				<a-button @click="onClick">Hello world!!!</a-button>
			</a-layout-content>
			<a-layout-footer>Footer</a-layout-footer>
		</a-layout>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				BASE_URL: process.env.BASE_URL
			}
		},
		components: {},
		methods: {
			onClick() {
				console.log(this.$route.params)
				this.$router.push('/hello')
			}
		}
	}
</script>

<style>
</style>
