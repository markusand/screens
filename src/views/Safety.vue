<template>
	<div id="page-safety" class="fill">
		<nav class="slide-nav">
			<ul>
				<li v-for="page in pages" :key="page.name">
					<router-link :to="`/safety/${page.path}`">
						{{ $t(`safety.pages.${page.name}`) }}
					</router-link>
				</li>
			</ul>
		</nav>
		<router-view v-swipe:600.left.right="swipe" class="fill" />
	</div>
</template>

<script>
import Swipe from '@/utils/directive.swipe';

export default {
	name: 'Safety',
	directives: { Swipe },
	data() {
		return {
			pages: this.$router.options.routes
				.find(({ name }) => name === 'safety')
				.children,
		};
	},
	methods: {
		swipe({ direction }) {
			const { $router, $route, pages } = this;
			const steps = direction === 'left' ? 1 : -1;
			const path = $route.path.replace(/\/$/, '');
			const current = pages.findIndex(page => `/safety/${page.path}`.replace(/\/$/, '') === path);
			const next = Math.max(Math.min(current + steps, pages.length - 1), 0);
			if (current !== next) $router.push(`/safety/${pages[next].path}`);
		},
	},
};
</script>
