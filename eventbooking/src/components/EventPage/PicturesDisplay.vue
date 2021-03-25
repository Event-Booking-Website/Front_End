<template>
	<div class="pictures-container">
		<div class="pictures-wrapper">
			<div class="pic-area1"><img :src="pictures[0]" alt="" /></div>
			<div class="pic-area2">
				<div class="pic-area2-1"><img :src="pictures[1]" alt="" /></div>
				<div class="pic-area2-2"><img :src="pictures[2]" alt="" /></div>
				<div class="pic-area2-3"><img :src="pictures[3]" alt="" /></div>
			</div>
			<div class="pic-area3"><img :src="pictures[4]" alt="" /></div>
		</div>
	</div>
</template>

<script>
export default { name: 'PicturesDisplay', props: ['pictures'] };
</script>

<style>
@import '../../assets/styles/EventPage/picturesdisplay.css';
</style>
