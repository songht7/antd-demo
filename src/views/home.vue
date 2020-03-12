<template>
  <div id="Home">
    <img alt="Vue logo" src="@/assets/logo.png">
	<a-icon type="play-circle" />
	<a-button @click="onClick">Hello world!!!</a-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods:{
	onClick(){
		console.log(this.$route.params)
		this.$router.push('/hello')
	}
  }
}
</script>

<style>
</style>
