<template>
  <Navbar />
  <main>
    <router-view :key="$route.fullPath"></router-view>
  </main>
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";

  export default defineComponent({
    name: "App",
    components: {
      Navbar,
      Footer,
    },
    watch: {
      $route(to, from) {
        document.title = to.meta.title || "Muvon";
      },
    },
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
    @apply min-h-screen;
  }
  main {
    @apply mb-auto ;
  }
</style>
