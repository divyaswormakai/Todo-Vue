import Todo from '@/components/pages/Todo.vue';
//  routeModules here
import { userRoutes } from '@/routes/user';
import { contentRoutes } from '@/routes/content';
import { publicRoutes } from '@/routes/public';

//  lazy routing from here
const Page404 = resolve => {
  require.ensure(['@/components/pages/Page404.vue'], () => {
    resolve(require('@/components/pages/Page404.vue'));
  });
};

export const routes = [
  { path: '', component: Todo, name: 'home', meta: { type: 'private' } },
  ...userRoutes,
  ...contentRoutes,
  ...publicRoutes,
  { path: '*', component: Page404, meta: { type: 'private' } }
];
