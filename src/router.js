import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('./views/About.vue'),
		},
		{
			path: '/safety',
			name: 'safety',
			component: () => import('./views/Safety.vue'),
			children: [
				{
					path: '',
					name: 'general',
					component: () => import('./views/safety/SafetyGeneral.vue'),
				},
				{
					path: 'rescue',
					name: 'rescue',
					component: () => import('./views/safety/SafetyRescue.vue'),
				},
			],
		},
		{
			path: '*',
			name: 'NotFound',
			component: () => import('./views/NotFound.vue'),
		},
	],
});
