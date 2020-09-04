const RegistrationForm = resolve => {
  require.ensure(['@/components/RegistrationForm.vue'], () => {
    resolve(require('@/components/RegistrationForm.vue'));
  });
};

export const publicRoutes = [
  {
    path: '/registration',
    component: RegistrationForm,
    name: 'registration',
    meta: { type: 'public' }
  }
];
