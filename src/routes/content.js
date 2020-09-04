const Completed = resolve => {
	require.ensure(['./../components/pages/Completed.vue'], () => {
		resolve(require('./../components/pages/Completed.vue'));
	});
};
const Archive = resolve => {
	require.ensure(['./../components/pages/Archive.vue'], () => {
		resolve(require('./../components/pages/Archive.vue'));
	});
};
const SideBar = resolve => {
	require.ensure(['./../components/pages/SideBar.vue'], () => {
		resolve(require('./../components/pages/SideBar.vue'));
	});
};
const SideBarComp = resolve => {
	require.ensure(['./../components/SideBarComp.vue'], () => {
		resolve(require('./../components/SideBarComp.vue'));
	});
};

const sidebarChildren = [
	{path: '', component: SideBarComp, meta: {type: 'private'}},
	{
		path: '/archived',
		component: Archive,
		name: 'archived',
		meta: {type: 'private'},
	},
];

export const contentRoutes = [
	{
		path: '/completed',
		component: Completed,
		name: 'completed',
		meta: {type: 'private'},
	},

	{
		path: '/sidebar',
		component: SideBar,
		children: sidebarChildren,
		meta: {type: 'private'},
	},
];
