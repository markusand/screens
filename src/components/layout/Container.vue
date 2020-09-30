<template>
	<section class="container">
		<h6
			v-if="tag"
			data-animate="reveal-down"
			data-delay="300">
			{{ tag }}
		</h6>
		<h6
			v-if="tag && dualTag"
			data-animate="reveal-down"
			data-delay="300"
			class="reverse">
			{{ tag }}
		</h6>
		<slot />
	</section>
</template>

<script>
export default {
	name: 'Container',
	props: {
		tag: { type: String, default: undefined },
		dualTag: { type: Boolean, default: false },
	},
};
</script>
