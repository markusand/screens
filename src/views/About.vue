<template>
	<main id="page-about">
		<!-- Project vision -->
		<block-video
			:src="introVideo"
			title="Casa de la Muntanya"
			:tag="$t('about.vision')"
			shadow>
			{{ $t('about.our_vision') }}
		</block-video>

		<!-- CdM floorplan -->
		<container :tag="$t('about.floorplan')" dual-tag class="fill">
			<image-markers :markers="markers" class="floorplan-markers">
				<img svg-inline src="@/assets/vectors/floorplan.svg">
				<div
					slot="marker"
					slot-scope="{ marker, i }"
					data-animate="fade-down"
					:data-delay-in="1000 + 150 * i"
					:data-tooltip="$t(`about.zones.${marker.id}`)">
					<i :class="marker.icon" />
				</div>
			</image-markers>
		</container>
	</main>
</template>

<script>
import TransitionsViews from '@/utils/mixin.transitions-views';
import { Container, BlockVideo } from '@/components/layout';
import ImageMarkers from '@/components/ImageMarkers.vue';

import { introVideo, markers } from '@/config/about';

export default {
	name: 'About',
	components: { Container, BlockVideo, ImageMarkers },
	mixins: [TransitionsViews],
	data() {
		return {
			introVideo,
			markers,
		};
	},
};
</script>
