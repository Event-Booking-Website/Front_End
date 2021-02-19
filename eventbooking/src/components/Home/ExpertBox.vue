<template>
	<div class="expert-box">
		<div class="expert-box-img">
			<img :src="pictureUrl" />
		</div>
		<div class="expert-box-text">
			<h3>{{ title }}</h3>
		</div>
	</div>
</template>

<script>
export default { name: 'ExpertBox', props: ['title', 'pictureUrl'] };
</script>

<style>
@import '../../assets/styles/expertbox.css';
</style>
