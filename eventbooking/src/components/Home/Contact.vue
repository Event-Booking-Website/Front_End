<template>
	<div class="contactForm">
		<h3>Send Message</h3>
		<div class="inputBox">
			<input type="text" placeholder="Name" />
		</div>
		<div class="inputBox">
			<input type="text" placeholder="Email" />
		</div>
		<div class="inputBox">
			<textarea name="" id="" cols="30" rows="10"></textarea>
		</div>
		<div class="inputBox">
			<input type="submit" value="Send" />
		</div>
	</div>
</template>

<script>
export default { name: 'Contact' };
</script>

<style>
@import '../../assets/styles/contact.css';
</style>
