import Todo from './routes/Todo.vue';

//lazy routing from here
const Completed = resolve => {
	require.ensure(['./routes/Completed.vue'], () => {
		resolve(require('./routes/Completed.vue'));
	});
};
const Archive = resolve => {
	require.ensure(['./routes/Archive.vue'], () => {
		resolve(require('./routes/Archive.vue'));
	});
};
const Page404 = resolve => {
	require.ensure(['./routes/Page404.vue'], () => {
		resolve(require('./routes/Page404.vue'));
	});
};

export const routes = [
	{path: '', component: Todo},

	// path : '/something/completed/
	// path: '/something/archive/
	{path: '/others', component: Completed},

	{path: '/archive', component: Archive},
	{path: '*', component: Page404},
];
// /complete/:id/details
