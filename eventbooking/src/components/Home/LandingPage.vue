<template>
	<section class="banner" id="banner">
		<div class="home-landing-message">
			<h2>Fatma Rentre Chez Toi</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates in,
				qui quo totam, quae beatae harum perferendis distinctio omnis nemo
				consequuntur animi illo magnam. Delectus maiores provident voluptas
				numquam nesciunt.
			</p>
			<a href="#" class="landing-button">Tomates Cerises</a>
		</div>
	</section>
	<section class="about" id="about">
		<div class="row">
			<div class="col50">
				<h2 class="aboutUs-title"><span>A</span>bout Us</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
					in, qui quo totam, quae beatae harum perferendis distinctio omnis nemo
					consequuntur animi illo magnam. Delectus maiores provident voluptas
					numquam nesciunt. <br /><br />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
					quidem, vero labore aut dolorem nesciunt eius quo animi? Nam veritatis
					praesentium labore, cumque illum iure fugiat nulla aliquid numquam
					quo?<br />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
					consequatur iusto, culpa reiciendis adipisci, obcaecati beatae ad
					saepe dignissimos perferendis quod. Voluptate cupiditate quaerat,
					cumque blanditiis impedit quasi alias nisi.
				</p>
			</div>
			<div class="col50">
				<div class="about-imgBx">
					<img src="../../../public/img/Events/About-us.jpg" alt="" />
				</div>
			</div>
		</div>
	</section>
	<section class="events" id="events">
		<div class="event-title">
			<h2 class="event-title-text">Our <span>E</span>vents</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates in,
				qui quo totam, quae beatae harum perferendis distinctio omnis nemo
				consequuntur animi illo magnam.
			</p>
		</div>
		<div class="event-content">
			<div v-for="{ title, boxPictureLink, id } in events" :key="id">
				<EventBox :title="title" :pictureUrl="boxPictureLink" />
			</div>
			<a href="#" class="landing-button" id="view-all">View all</a>
		</div>
	</section>
	<section class="experts" id="experts">
		<div class="event-title">
			<h2 class="event-title-text">Our <span>E</span>xperts</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates in,
				qui quo totam.
			</p>
		</div>
		<div class="event-content">
			<div v-for="{ expertName, expertPicture, id } in events" :key="id">
				<ExpertBox
					v-if="expertName"
					:title="expertName"
					:pictureUrl="expertPicture"
				/>
			</div>
			<a href="#" class="landing-button" id="view-all">View all</a>
		</div>
	</section>
	<section class="testimonials" id="testimonials">
		<div class="event-title white">
			<h2 class="event-title-text">They <span>S</span>aid about us</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates in,
				qui quo totam.
			</p>
		</div>
		<div class="testimonials-content">
			<div
				v-for="{ surname, name, testimonial, pictureUrl, id } in testimonials"
				:key="id"
			>
				<TestimonialBox
					:surname="surname"
					:name="name"
					:testimonial="testimonial"
					:pictureUrl="pictureUrl"
				/>
			</div>
		</div>
	</section>
	<section class="contact" id="contact">
		<div class="event-title ">
			<h2 class="event-title-text"><span>C</span>ontact us</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates in,
				qui quo totam.
			</p>
		</div>
		<div class="testimonials-content">
			<Contact />
		</div>
	</section>
</template>

<script>
import EventBox from './EventBox.vue';
import ExpertBox from './ExpertBox.vue';
import Contact from './Contact.vue';
import TestimonialBox from './TestimonialBox.vue';
import eventList from '../../../events.json';
import testimonials from '../../../testimonials.json';
export default {
	name: 'LandingPage',
	components: { EventBox, ExpertBox, TestimonialBox, Contact },
	data() {
		return {
			events: eventList,
			testimonials: testimonials,
		};
	},
};
</script>

<style>
@import '../../assets/styles/landingpage.css';
</style>
