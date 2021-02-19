<template>
	<div class="event-box">
		<div class="event-box-img">
			<img :src="pictureUrl" />
		</div>
		<div class="event-box-text">
			<h3>{{ title }}</h3>
		</div>
	</div>
</template>

<script>
export default { name: 'EventBox', props: ['title', 'pictureUrl'] };
</script>

<style>
@import '../../assets/styles/eventbox.css';
</style>
