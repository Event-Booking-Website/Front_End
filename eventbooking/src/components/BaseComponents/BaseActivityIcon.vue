<template>
	<div class="detail-container">
		<div class="icon"><BaseIcon :iconName="iconName" /></div>
		<div class="text">{{ text }}</div>
	</div>
</template>

<script>
export default { name: 'BaseActivityIcon', props: ['iconName', 'text'] };
</script>

<style>
.detail-container {
	margin: 15px;
	position: relative;
	width: 42% !important;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.detail-container .text {
	padding-left: 20px;
	text-align: justify;
	word-break: break-word;
}
</style>
