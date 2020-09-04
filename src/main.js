import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import {routes} from './routes/routes';

import {store} from './store/store';
import AsyncComputed from 'vue-async-computed';

Vue.use(VueRouter);
Vue.use(AsyncComputed);

const router = new VueRouter({
	routes,
	mode: 'history',
});

router.beforeEach((to, from, next) => {
	//check for meta file
	// ------------------------->
	console.log(localStorage.getItem('user'));
	console.log(to.meta.type);
	//user is not saved so redirecto to login
	if (!localStorage.getItem('user')) {
		if (to.meta.type === 'private') {
			console.log(
				'accessing a private route: redirecting to registration',
			);
			next({name: 'registration'});
		} else {
			console.log('continue to the public route');
			next();
		}
	} else {
		if (to.meta.type === 'public') {
			console.log('stuck here');
			// router.go();
			next({name: 'home'});
		} else {
			console.log('balai bhayen');
			next();
		}
	}
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
