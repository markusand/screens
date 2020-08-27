<template>
	<container :tag="tag" class="block-video">
		<h2
			class="block-video__title"
			data-animate="reveal-down"
			data-delay-in="300">
			{{ title }}
		</h2>
		<div class="block-video__video">
			<div
				v-if="shadow"
				class="shadow shadow--bl"
				data-animate="reveal-right"
				data-delay-in="600" />
			<video-embed
				v-bind="$attrs"
				:src="src"
				:subs="$i18n.locale"
				data-animate="reveal-right" />
		</div>
		<p data-animate="fade-up" data-delay="300">
			<slot />
		</p>
	</container>
</template>

<script>
import Container from '@/components/layout/Container.vue';
import VideoEmbed from '@/components/VideoEmbed.vue';

export default {
	name: 'BlockVideo',
	components: { Container, VideoEmbed },
	inheritAttrs: false,
	props: {
		src: { type: String, required: true },
		title: { type: String, default: null },
		tag: { type: String, default: null },
		shadow: { type: Boolean, default: false },
	},
};
</script>
