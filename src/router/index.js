import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import FirebaseSigninView from '../views/FirebaseSigninView.vue'; // Import FirebaseSigninView
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'; // Import FirebaseRegisterView

const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      if (isLoggedIn()) {
        next(); 
      } else {
        next('/login'); 
      }
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView // Ensure component is correctly imported
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



