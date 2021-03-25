<template>
	<div class="booking-container">
		<h2>Choisir une date</h2>
		<div class="date-container">
			<DatePicker />
		</div>
		<div class="guests-selection">
			<h3>Voyageurs</h3>
			<div class="list-selection">
				<div class="guest">
					<div class="guest-type"><h4>Adultes</h4></div>
					<div class="guests-number">
						<div class="change"><BaseIcon iconName="minus-circle" /></div>
						<span>{{ adults }}</span>
						<div class="change"><BaseIcon iconName="plus-circle" /></div>
					</div>
				</div>
				<div class="guest">
					<div class="guest-type">
						<h4>Enfants</h4>
						<span>De 2 à 12 ans</span>
					</div>
					<div class="guests-number">
						<div class="change"><BaseIcon iconName="minus-circle" /></div>
						{{ kids }}
						<div class="change"><BaseIcon iconName="plus-circle" /></div>
					</div>
				</div>
				<div class="guest">
					<div class="guest-type">
						<h4>Bébés</h4>
						<span>Moins de 2 ans</span>
					</div>
					<div class="guests-number">
						<div class="change"><BaseIcon iconName="minus-circle" /></div>
						{{ kids }}
						<div class="change"><BaseIcon iconName="plus-circle" /></div>
					</div>
				</div>
			</div>
		</div>
		<div class="booking-button">reserver</div>
	</div>
</template>

<script>
import DatePicker from './DatePicker';
export default {
	name: 'DateBooking.vue',
	components: { DatePicker },
	data() {
		return {
			adults: 0,
			kids: 0,
			babies: 0,
		};
	},
};
</script>

<style>
@import '../../assets/styles/EventPage/datebooking.css';
</style>
