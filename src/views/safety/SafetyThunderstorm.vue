<template>
	<main id="page-safety-thunderstorm">
		<!-- Intro -->
		<block-video
			:title="$t('safety.thunderstorm.thunderstorm')"
			:src="video"
			quality="360p"
			shadow>
			<p>{{ $t('safety.thunderstorm.description') }}</p>
		</block-video>

		<!-- Safety tips -->
		<section>
			<h3 data-animate="reveal-down">{{ $t('safety.thunderstorm.avoid_lightning') }}</h3>
			<p data-animate="fade-up" delay="150">
				{{ $t('safety.thunderstorm.prevention') }}
			</p>
			<div class="cols fill">
				<div class="col col--7">
					<container :tag="$t('safety.thunderstorm.in_case_of')">
						<ul class="list-icons">
							<li
								v-for="(tip, i) in dos"
								:key="tip"
								data-animate="fade-up"
								:data-delay="i * 150">
								<i class="ri-check-line icon icon--success" />
								{{ $t(`safety.thunderstorm.safety_tips.${tip}`) }}
							</li>
							<li
								v-for="(tip, i) in donts"
								:key="tip"
								data-animate="fade-up"
								:data-delay="dos.length * 150 + i * 150">
								<i class="ri-close-line icon icon--alert" />
								{{ $t(`safety.thunderstorm.safety_tips.${tip}`) }}
							</li>
						</ul>
					</container>
				</div>

				<!-- Safety position -->
				<div class="col col--auto">
					<container :tag="$t('safety.thunderstorm.safety_position')">
						<image-markers :markers="markers" class="safety-position">
							<img
								svg-inline
								src="@/assets/vectors/silhouettes/crouching.svg"
								data-animate="fade">
							<div
								slot="marker"
								slot-scope="{ marker, i }"
								data-animate="fade-down"
								:data-delay-in="1000 + 150 * i"
								:data-tooltip="$t(`safety.thunderstorm.safety_tips.${marker.id}`)">
								<i class="ri-add-line" />
							</div>
						</image-markers>
					</container>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import TransitionsViews from '@/utils/mixin.transitions-views';
import { Container, BlockVideo } from '@/components/layout';
import ImageMarkers from '@/components/ImageMarkers.vue';

import { thunderstorm } from '@/config/safety';

export default {
	name: 'SafetyThunderstorm',
	components: { Container, BlockVideo, ImageMarkers },
	mixins: [TransitionsViews],
	data() {
		return { ...thunderstorm };
	},
};
</script>
