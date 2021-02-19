<template>
	<div class="testimonial-box">
		<div class="testimonial-box-img">
			<img :src="pictureUrl" />
		</div>
		<div class="testimonial-box-text">
			<p>{{ testimonial }}</p>
			<h3>{{ surname }} {{ name }}</h3>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TestimonialBox',
	props: ['surname', 'name', 'testimonial', 'pictureUrl'],
};
</script>

<style>
@import '../../assets/styles/testimonialBox.css';
</style>
