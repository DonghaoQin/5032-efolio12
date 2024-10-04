import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import FirebaseSigninView from '../views/FirebaseSigninView.vue';
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue';
import FirebaseLogoutView from '../views/FirebaseLogoutView.vue';
import { getAuth } from "firebase/auth";
import AddBookView from '../views/AddBookView.vue';
import BookListView from '../views/BookListView.vue'; 
import GetBookCountView from '../views/GetBookCountView.vue';
import WeatherView from '../views/WeatherView.vue';
import CountBookAPI from '../views/CountBookAPI.vue';
// Firebase auth check
const isLoggedIn = () => {
  const auth = getAuth();
  return auth.currentUser !== null;
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
    path: '/firelogin',
    name: 'FireLogin',
    component: FirebaseSigninView 
  },
  {
    path: '/fireregister',
    name: 'FireRegister',
    component: FirebaseRegisterView 
  },
  {
    path: '/firelogout',
    name: 'FireLogout',
    component: FirebaseLogoutView 
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView 
  },
  {
    path: '/booklist',
    name: 'BookList',
    component: BookListView
  },
  {
    path: '/GetbookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
