const Profile = resolve => {
  require.ensure(['@/components/pages/Profile.vue'], () => {
    resolve(require('@/components/pages/Profile.vue'));
  });
};

export const userRoutes = [
  {
    path: '/:username/profile',
    component: Profile,
    name: 'Profile',
    meta: { type: 'private' }
  }
];
