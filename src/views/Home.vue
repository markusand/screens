<template>
	<container id="page-navigation" :tag="$t('navigation.menu')" dual-tag>
		<nav class="nav-main">
			<router-link
				v-for="section in sections"
				:key="section.name"
				:to="section.url"
				:class="`nav-main__section nav-main__section--${section.name}`">
				<div
					v-if="section.shadow"
					:data-animate="section.bgAnimation || 'reveal-down'"
					data-delay-in="900"
					:class="`shadow shadow--${section.shadow}`" />
				<div class="cover"
					:style="`background-image: url('${section.img}')`"
					:data-animate="section.bgAnimation || 'reveal-down'"
					data-delay-in="600" />
				<h3
					:data-animate="section.titleAnimation || 'reveal-down'"
					data-delay-in="900"
					class="title">
					{{ $t(`navigation.${section.name}`) }}
				</h3>
			</router-link>
		</nav>
	</container>
</template>

<script>
import TransitionsViews from '@/utils/mixin.transitions-views';
import { Container } from '@/components/layout';
import sections from '@/config/navigation';

export default {
	name: 'Home',
	components: { Container },
	mixins: [TransitionsViews],
	data() {
		return { sections };
	},
};
</script>
