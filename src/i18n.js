import Vue from 'vue';
import Vuei18n from 'vue-i18n';

import ca from './locales/ca';

Vue.use(Vuei18n);

const messages = { ca };

export default new Vuei18n({
	locale: 'ca',
	fallbackLocale: 'ca',
	messages,
});
