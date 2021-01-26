import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import Store from "./components/Store.vue";
import Blog from "./components/Blog.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import UnderConstruction from "./components/UnderConstruction.vue";

const history = createWebHistory();

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Muvon: Life is Not Daijobu",
    },
  },
  {
    path: "/menu",
    component: Menu,
    meta: {
      title: "Menu | Muvon",
    },
  },
  {
    path: "/store",
    component: Store,
    meta: {
      title: "Store | Muvon",
    },
  },
  {
    path: "/blog",
    component: Blog,
    meta: {
      title: "Blog | Muvon",
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "About | Muvon",
    },
  },
  {
    path: "/contact",
    component: Contact,
    meta: {
      title: "Contact | Muvon",
    },
  },
];

const router = createRouter({ history, routes });

export default router;
