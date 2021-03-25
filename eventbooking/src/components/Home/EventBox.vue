<template>
	<div class="event-box">
		<div class="event-box-img">
			<img
				:src="this.pictureUrl[index]"
				@mouseover="changePictureTimeOut"
				@mouseleave="resetPicture"
			/>
		</div>
		<div class="event-box-text">
			<h3>{{ title }}</h3>
			<h2>{{ type }} - {{ duration }}</h2>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EventBox',
	props: ['type', 'duration', 'title', 'pictureUrl'],
	data() {
		return {
			index: 0,
			interval: '',
		};
	},
	methods: {
		changePicture() {
			if (this.index < this.pictureUrl.length - 1) {
				this.index += 1;
			} else {
				this.index = 0;
			}
		},
		changePictureTimeOut() {
			this.interval = setInterval(() => this.changePicture(), 1998);
		},
		resetPicture() {
			this.index = 0;
			clearInterval(this.interval);
		},
	},
};
</script>

<style>
@import '../../assets/styles/eventbox.css';
</style>
