import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router';

export const routes = [
  {
    path: '/',
    component: () => import('#/views/home/index.vue'),
    meta: { ssr: true },
  },
  {
    path: '/about',
    component: () => import('#/views/about/index.vue'),
    meta: { ssr: false },
  },
];

export function createAppRouter(ssr = false) {
  return createRouter({
    history: ssr ? createMemoryHistory() : createWebHistory(),
    routes,
  });
}
