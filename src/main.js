import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

import 'reset-css';
import 'remixicon/fonts/remixicon.css';
import './styles/index.scss';

Vue.config.productionTip = false;

new Vue({
	router,
	i18n,
	render: h => h(App),
}).$mount('#app');
