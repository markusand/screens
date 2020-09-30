<template>
	<section class="block-image">
		<figure class="block-image__figure">
			<div
				v-if="shadow"
				class="shadow shadow--br"
				data-animate="reveal-down"
				data-delay-in="300" />
			<img
				:src="src"
				:width="width"
				:height="height"
				draggable="false"
				data-animate="reveal-down">
		</figure>
		<aside class="block-image__aside">
			<slot />
		</aside>
	</section>
</template>

<script>
export default {
	name: 'BlockImage',
	inheritAttrs: false,
	props: {
		src: { type: String, required: true },
		width: { type: [String, Number], default: 500 },
		height: { type: [Number, String], default: 700 },
		shadow: { type: Boolean, default: false },
	},
};
</script>
