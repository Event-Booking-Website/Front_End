<template>
	<header>
		<a href="#" class="logo">Nanis<span>.</span></a>
		<ul class="navigation">
			<li><a href="#banner">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#events">Events</a></li>
			<li><a href="#experts">Experts</a></li>
			<li><a href="#testimonials">Testimonials</a></li>
			<li><a href="#contact">Contact</a></li>
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
	},
};
</script>

<style>
@import '../../assets/styles/navbar.css';
</style>
