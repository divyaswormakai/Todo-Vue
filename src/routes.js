import Todo from './routes/Todo.vue';
import Completed from './routes/Completed.vue';
import Archive from './routes/Archive.vue';
import Page404 from './routes/Page404.vue';

export const routes = [
	{path: '', component: Todo},
	{path: '/completed', component: Completed},
	{path: '/archive', component: Archive},
	{path: '*', component: Page404},
];
