import Todo from './../components/pages/Todo.vue';

//lazy routing from here
const Page404 = resolve => {
	require.ensure(['./../components/pages/Page404.vue'], () => {
		resolve(require('./../components/pages/Page404.vue'));
	});
};

//routeModules here
import {userRoutes} from './user';
import {contentRoutes} from './content';
import {publicRoutes} from './public';

export const routes = [
	{path: '', component: Todo, name: 'home', meta: {type: 'private'}},
	...userRoutes,
	...contentRoutes,
	...publicRoutes,
	{path: '*', component: Page404, meta: {type: 'private'}},
];
