<template>
	<div class="event-page">
		<PicturesDisplay :pictures="myEvent.picturesUrl" />
		<div class="event-page-row">
			<div class="col70">
				<EventDescription :descriptionText="myEvent.descriptionText" />
				<MapIndication />
			</div>
			<div class="col30">
				<DateBooking />
			</div>
		</div>
	</div>
</template>

<script>
import event from '../../events.json';
import NavBar from '../components/Home/NavBar.vue';
import PicturesDisplay from '../components/EventPage/PicturesDisplay.vue';
import EventDescription from '../components/EventPage/EventDescription.vue';
import DateBooking from '../components/EventPage/DateBooking.vue';
import MapIndication from '../components/EventPage/MapIndication.vue';

export default {
	name: 'EventPage',
	props: ['id'],
	components: {
		NavBar,
		PicturesDisplay,
		MapIndication,
		EventDescription,
		DateBooking,
	},
	data() {
		return {
			myEvent: event[0],
		};
	},
};
</script>

<style>
@import '../assets/styles/EventPage/eventpage.css';
</style>
