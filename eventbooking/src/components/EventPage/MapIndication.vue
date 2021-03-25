<template>
	<div class="google-map-indication">
		<div>google map</div>
		<div id="map"></div>
	</div>
</template>

<script>
//import $Scriptjs from 'scriptjs';
export default {
	name: 'MapIndication',
	data() {
		return { map: null };
	},
	mounted() {
		// $Scriptjs(
		// 	'https://maps.googleapis.com/maps/api/js?key=THEKEY&callback=initMap&libraries=&v=weekly',
		// 	() => {
		// 		this.initMap();
		// 	}
		// );
	},
	methods: {
		initMap() {
			this.map = new google.maps.Map(document.getElementById('map'), {
				center: { lat: -34.397, lng: 150.644 },
				zoom: 8,
			});
		},
	},
};
</script>

<style>
#map {
	height: 500px;
}
</style>
