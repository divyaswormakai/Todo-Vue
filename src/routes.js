import Todo from 'routes/Todo.vue';

//lazy routing from here
const SideBar = resolve => {
	require.ensure(['./routes/SideBar.vue'], () => {
		resolve(require('./routes/SideBar.vue'));
	});
};
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
const SideBarComp = resolve => {
	require.ensure(['./components/SideBarComp.vue'], () => {
		resolve(require('./components/SideBarComp.vue'));
	});
};

const sidebarChildren = [
	{path: '', component: SideBarComp},
	{
		path: 'archived',
		component: Archive,
		name: 'archived',
	},
];

export const routes = [
	{path: '', component: Todo, name: 'home'},
	{path: '/completed', component: Completed, name: 'completed'},
	{
		path: '/sidebar',
		component: SideBar,
		children: sidebarChildren,
	},

	{path: '*', component: Page404},
];
