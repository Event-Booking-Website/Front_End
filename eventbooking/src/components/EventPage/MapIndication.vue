<template>
	<div class="map-wrapper">
		<iframe
			width="500"
			height="500"
			style="border:0"
			loading="lazy"
			allowfullscreen
			:src="link"
		></iframe>
	</div>
</template>

<script>
import call from '../../../config/api.js';
export default {
	name: 'MapIndication',
	data() {
		return {
			link: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDeUNT3U0_RIRMU9KwrJeBdY&key=${call.call}`,
		};
	},
	created() {
		console.log(this.call);
	},
};
</script>

<style>
.map-wrapper {
	position: relative;
	width: 500px;
	height: 500px;
	border-radius: 10%;
	overflow: hidden;
}
</style>
