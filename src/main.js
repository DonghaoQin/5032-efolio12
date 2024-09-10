// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Create Vue app
const vueApp = createApp(App) // Renamed 'app' to 'vueApp'
vueApp.use(PrimeVue, { theme: { preset: Aura } })
vueApp.use(router)

vueApp.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtWCsa1vsJbM3ss8UUaWYtVGZfYyZVET8",
  authDomain: "week-7-donghao-qin.firebaseapp.com",
  projectId: "week-7-donghao-qin",
  storageBucket: "week-7-donghao-qin.appspot.com",
  messagingSenderId: "1028365532886",
  appId: "1:1028365532886:web:01629a44005de72cd11377"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); // Renamed 'app' to 'firebaseApp'
