<template>
	<NavBar />
	<router-view />
</template>
<script>
import NavBar from './components/Home/NavBar.vue';
export default {
	components: { NavBar },
};
</script>
<style>
@import './assets/styles/main.css';
</style>
