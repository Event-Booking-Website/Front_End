import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import EventPage from '../views/EventPage.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/event/:id',
		name: 'EventPage',
		props: true,
		component: EventPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 };
	},
});

export default router;
