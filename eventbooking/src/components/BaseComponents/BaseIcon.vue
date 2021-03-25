<template>
	<div class="icon-wrapper" v-html="svg"></div>
</template>

<script>
import feather from 'feather-icons';

export default {
	name: 'BaseIcon',
	props: {
		iconName: String,
		width: {
			type: [Number, String],
			default: 24,
		},
		height: {
			type: [Number, String],
			default: 24,
		},
	},
	computed: {
		svg() {
			return feather.icons[this.iconName].toSvg({
				class: 'icon',
				width: this.width,
				height: this.height,
			});
		},
	},
};
</script>

<style scoped>
.icon-wrapper {
	height: 24px;
	width: 24px;
}
</style>
