<template>
	<div class="description-container">
		<div class="description-slot">
			<h1>{{ descriptionText.title }}</h1>
			<h3>{{ descriptionText.subTitle }}</h3>
			<div class="description-row">
				<BaseActivityIcon iconName="map-pin" :text="descriptionText.place" />
				<BaseActivityIcon iconName="bookmark" :text="descriptionText.type" />
			</div>
		</div>
		<div class="description-slot">
			<h2>A savoir</h2>
			<div class="description-row">
				<BaseActivityIcon iconName="clock" :text="descriptionText.duration" />
				<BaseActivityIcon
					iconName="check-square"
					:text="descriptionText.include"
				/>
				<BaseActivityIcon iconName="globe" :text="descriptionText.languages" />
				<BaseActivityIcon
					iconName="user-plus"
					:text="descriptionText.maxGroup"
				/>
			</div>
		</div>
		<div class="description-slot">
			<h2>Points forts</h2>
			<ul>
				<li v-for="element in descriptionText.highlight">{{ element }}</li>
			</ul>
		</div>
		<div class="description-slot">
			<h2>Au programme</h2>
			<p>{{ descriptionText.program }}</p>
		</div>
		<div class="description-slot">
			<h2>Comment participer ?</h2>
			<div class="description-row">
				<BaseActivityIcon
					v-for="element in descriptionText.booking"
					:iconName="Object.keys(element)[0]"
					:text="Object.values(element)[0]"
				/>
			</div>
		</div>
		<div class="description-slot">
			<h2>Ce qu'il faut savoir</h2>
			<div class="description-row">
				<BaseActivityIcon
					v-for="element in descriptionText.needs"
					iconName="check-circle"
					:text="element"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default { name: 'EventDescription', props: ['descriptionText'] };
</script>

<style>
@import '../../assets/styles/EventPage/eventdescription.css';
</style>
