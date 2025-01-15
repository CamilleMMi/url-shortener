import { createRouter, createWebHistory } from 'vue-router';
import ShortenUrlForm from '../views/ShortenUrlForm.vue';
import RedirectFromSlug from '../views/RedirectFromSlug.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ShortenUrlForm,
  },
  {
    path: '/:slug',
    name: 'Redirect',
    component: RedirectFromSlug,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
