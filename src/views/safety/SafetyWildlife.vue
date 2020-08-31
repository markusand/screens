<template>
	<main id="page-safety-wildlife">
		<ul class="species fill">
			<li
				v-for="(specie, i) in species"
				:key="specie.name"
				:class="{ 'reverse': i % 2, 'fill': true }">
				<container :tag="$t(`safety.wildlife.${specie.name}.name`)">
					<block-image
						:class="{ 'reverse': i % 2 }"
						:src="specie.image.src"
						:height="specie.image.height"
						:width="specie.image.width">
						<h3 data-animate="reveal-down" data-delay="">
							{{ $t(`safety.wildlife.${specie.name}.name`) }}
						</h3>
						<p data-animate="fade-up" data-delay="150">
							{{ $t(`safety.wildlife.${specie.name}.description`) }}
						</p>
						<p data-animate="fade-up" data-delay="300">
							{{ $t(`safety.wildlife.${specie.name}.habitat`) }}
						</p>
						<p data-animate="fade-up" data-delay="450">
							<strong>{{ $t(`safety.wildlife.${specie.name}.danger`) }}</strong>
						</p>
					</block-image>
				</container>
			</li>
		</ul>
	</main>
</template>

<script>
import TransitionsViews from '@/utils/mixin.transitions-views';
import { Container, BlockImage } from '@/components/layout';
import { species } from '@/config/safety';

export default {
	name: 'SafetyEquipment',
	components: { Container, BlockImage },
	mixins: [TransitionsViews],
	data() {
		return { species };
	},
};
</script>
