<template>
	<datepicker v-model="picked" />
</template>

<script setup>
import Datepicker from 'vue3-datepicker';
import { ref } from 'vue';
const picked = ref(new Date());
</script>
<style></style>
