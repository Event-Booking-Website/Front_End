<template>
	<header>
		<router-link class="rlink-none" :to="{ name: 'Home' }">
			<a href="#" class="logo">Nanis<span>.</span></a>
		</router-link>
		<div class="menuToggle" @click="toggleMenu()"></div>
		<ul class="navigation">
			<li><a href="#banner" @click="toggleMenu()">Home</a></li>
			<li><a href="#about" @click="toggleMenu()">About</a></li>
			<li><a href="#events" @click="toggleMenu()">Events</a></li>
			<li><a href="#experts" @click="toggleMenu()">Experts</a></li>
			<li><a href="#testimonials" @click="toggleMenu()">Testimonials</a></li>
			<li><a href="#contact" @click="toggleMenu()">Contact</a></li>
		</ul>
	</header>
</template>

<script>
export default {
	name: 'NavBar',
	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll(event) {
			const header = document.querySelector('header');
			header.classList.toggle('sticky', window.scrollY > 0);
		},
		toggleMenu() {
			const menuToggle = document.querySelector('.menuToggle');
			const navigation = document.querySelector('.navigation');
			menuToggle.classList.toggle('active');
			navigation.classList.toggle('active');
		},
	},
};
</script>

<style>
@import '../../assets/styles/navbar.css';
</style>
