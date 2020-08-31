import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import {routes} from './routes';

import {store} from './store/store';
import VModal from 'vue-js-modal';

Vue.use(VueRouter);
Vue.use(VModal, {componentName: 'UserModal'});

const router = new VueRouter({
	routes,
	mode: 'history',
});

Vue.directive('list-type', {
	bind(el, binding, node) {
		if (binding.modifiers['todo']) {
			el.style.background = 'rgba(122, 113, 113, 0.5)';
		}
		if (binding.modifiers['complete']) {
			el.style.background = 'rgba(35, 194, 23, 0.658)';
		}
		if (binding.modifiers['archive']) {
			console.log('ASDF');
			el.style.background = 'rgba(228, 54, 54, 0.5)';
			el.style.textDecoration = 'line-through';
		}
	},
});

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store,
});
