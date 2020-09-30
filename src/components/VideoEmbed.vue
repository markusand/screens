<template>
	<div class="player" :style="`padding-bottom:${aspectRatio}%`">
		<iframe :src="url" allow="autoplay" class="video-embed" />
	</div>
</template>

<script>
const setParameters = {
	// https://developers.google.com/youtube/player_parameters?hl=es-419
	youtube: ({ subs, start, end, quality }, id) => ({
		rel: 0, // Hide related videos
		fs: 0, // Disable fullscreen
		controls: 0, // Hide controls
		showinfo: 0, // Hide video info
		iv_load_policy: 3, // Disable video annotations
		modestbranding: 1, // Hide YouTube logo
		autoplay: 1, // Autoplay video on load
		mute: 1, // Mute video, needed for autoplay to work
		loop: 1, // Loop video (prevents displaying related videos)
		playlist: id, // Needed for loop function
		cc_load_policy: 1, // Force subtitles
		hl: subs,
		start,
		end,
		vq: quality, // tiny | small | medium | large | hd720 | hd1080
	}),

	// https://vimeo.zendesk.com/hc/es/articles/360001494447-Cómo-usar-los-parámetros-del-reproductor
	vimeo: ({ quality }) => ({
		autoplay: 1,
		loop: 1,
		autopause: 1,
		title: 0,
		portrait: 0,
		byline: 0,
		muted: 1,
		quality, // 360p | 540p | 720p | 1080p | 2k | 4k
	}),

	// https://developer.dailymotion.com/player/#player-parameters
	dailymotion: ({ subtitles }) => ({
		autoplay:	true,
		controls: false,
		mute: true,
		'ui-logo': false,
		'ui-start-screen-info': false,
		'subtitles-default': subtitles,
	}),
};

export default {
	name: 'EmbedVideo',
	props: {
		// EMBED[!] url of the video
		src: { type: String, required: true },
		// ISO 639-2 code for subtitles language
		subs: { type: String, default: 'ca' },
		// Video aspect ratio. Default 16:9
		aspectRatio: { type: Number, default: 56.25 },
		// Seconds from the start to init reproduction (0 from the beginning)
		start: { type: Number, default: 0 },
		// Seconds from the start to stop reproduction (undefined till the end)
		end: { type: Number, default: undefined },
		quality: { type: String, default: 'medium' },
	},
	data() {
		return { videoHeight: 1000 };
	},
	computed: {
		url() {
			const [, provider, id] = this.src.match(/\.(.*)\.com(?:\/embed)?(?:\/video)?\/(.+)/);
			const params = setParameters[provider](this, id);
			return `${this.src}?${Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&')}`;
		},
	},
};
</script>

<style lang="scss" scoped>
.player {
	position: relative;
	overflow: hidden;
	padding: 0;
}

.video-embed {
	pointer-events: none;
	position: absolute;
	height: 100%;
	width: 100%;
}
</style>
