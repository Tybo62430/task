/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import "./styles/app.css";

// start the Stimulus application
import "./bootstrap";

import Vue from "vue";
import VueRouter from "vue-router";
import App from './components/App.vue'
import ClientList from './components/Client/ClientList.vue'
import TacheList from './components/Tache/TacheList.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/client",
      component: ClientList,
    },
    {
      path: "/tache",
      component: TacheList,
    },
  ],
});



new Vue({ router, render: (h) => h(App) }).$mount("#app");
