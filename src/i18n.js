import Vue from 'vue';
import Vuei18n from 'vue-i18n';
import axios from 'axios';

Vue.use(Vuei18n);

const languages = ['ca', 'en'];

const i18n = new Vuei18n({
	locale: 'ca',
	fallbackLocale: 'ca',
	silentTranslationWarn: process.env.NODE_ENV === 'production',
	messages: {},
});

languages.forEach(code => {
	const url = `${process.env.VUE_APP_LOCALES_URL}${code}.json`;
	axios.get(url).then(({ data }) => {
		i18n.setLocaleMessage(code, data);
	});
});

export default i18n;
