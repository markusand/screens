export const principles = ['plan', 'equip', 'adapt', 'notify'];

export const equipment = {
	essential: [
		'clothes',
		'shoes',
		'water',
		'food',
		'raincoat',
		'first_aid_kit',
		'mobile_phone',
		'map_compass',
		'sun_protection',
		'thermal_blanket',
	],
	recommended: [
		'gps',
		'knife',
		'lighter',
		'flashlight',
		'sandals',
	],
};

export const species = [
	{
		name: 'amanita_muscaria',
		image: {
			src: 'https://images.unsplash.com/photo-1585646181862-9605c3a248b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
			copyright: 'Photo by Henryk Piela from Unsplash',
			height: 400,
			width: 350,
		},
	},
	{
		name: 'aconitum',
		image: {
			src: 'http://www.vasteplantenshop.be/files/images/webshop/aconitum-napellus-1557148192_l.jpg',
			copyright: undefined,
			height: 400,
			width: 350,
		},
	},
	{
		name: 'vipera_aspis',
		image: {
			src: 'https://vignette.wikia.nocookie.net/reinoanimalia/images/d/d9/Vipera_aspis_aspis.jpg/revision/latest/scale-to-width-down/1000?cb=20150828090605&path-prefix=es',
			copyright: 'Photo by Felix Reimann from Wikimedia Commons',
			height: 400,
			width: 400,
		},
	},
];


// https://www.youtube.com/embed/zUNEFefftt8
// https://player.vimeo.com/video/134810545
export const thunderstorm = {
	video: 'https://player.vimeo.com/video/134810545',
	dos: ['metal_contact', 'spread_group', 'find_shelter'],
	donts: ['no_run', 'not_safe_places'],
	markers: [
		{ id: 'crouch_down', left: 80, top: 55 },
		{ id: 'protect_ears', left: 17, top: 23 },
		{ id: 'touch_heels', left: 62, top: 78 },
		{ id: 'feet_balls', left: 33, top: 87 },
	],
};

export const hypothermia = {
	animation: {
		DECREASE_TIME: 500,
		INCREASE_TIME: 10,
		WAIT_TIME: 5000,
	},
	symptoms: {
		normal: [36.5, 37],
		chill: [32.1, 36.5],
		sensory_loss: [28.5, 36.5],
		speech_impairment: [28.5, 35],
		memory_loss: [28.5, 34],
		motor_uncoordination: [28.5, 34],
		arrhythmia: [28.1, 29],
		cardiorespiratory_arrest: [28.1, 29],
		death: [28, 28],
	},
	prevention: {
		dos: ['drink', 'rest', 'warm', 'clothes'],
		donts: ['avoid_cotton'],
	},
	treatment: {
		dos: ['call_er', 'isolate', 'dry', 'cover', 'warm_drink'],
		donts: ['no_alcohol', 'no_heat'],
	},
};
