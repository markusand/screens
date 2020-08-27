<template>
	<main id="page-safety-general">
		<!-- Intro -->
		<block-image src="https://images.unsplash.com/photo-1550406365-1bb90b09f789?ixid=2yJhcHBfaWQiOjEyMDd9&auto=format&q=80&w=700" height="700" shadow>
			<p data-animate="fade-up" data-delay="150">{{ $t('safety.general.intro') }}</p>
			<p data-animate="fade-up" data-delay="300">{{ $t('safety.general.guide') }}</p>
		</block-image>

		<!-- Mountain basic principles -->
		<container
			:tag="$t('safety.general.basic_principles')"
			dual-tag
			class="hero"
			data-animate="fade-up">
			<ul class="list list--grid list--bignum">
				<li v-for="(principle, i) in principles" :key="principle">
					<h4 data-animate="fade-up" :data-delay="i * 150">
						{{ $t(`safety.general.principles.${principle}`) }}
					</h4>
					<p data-animate="fade-up" :data-delay="i * 150 + 150">
						{{ $t(`safety.general.principles.${principle}_desc`) }}
					</p>
				</li>
			</ul>
		</container>
	</main>
</template>

<script>
import TransitionsViews from '@/utils/mixin.transitions-views';
import { Container, BlockImage } from '@/components/layout';

import { principles } from '@/config/safety';

export default {
	name: 'SafetyGeneral',
	components: { Container, BlockImage },
	mixins: [TransitionsViews],
	data() {
		return { principles };
	},
};
</script>
