import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; // Replace with the actual path to your HomePage component
import AboutPage from '../views/AboutPage.vue'; // Replace with the actual path to your AboutPage component
import ProductsPage from '../views/ProductPage.vue'; // Replace with the actual path to your ProductsPage component
import ContactPage from '../views/ContactPage.vue'; // Replace with the actual path to your ContactPage component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
