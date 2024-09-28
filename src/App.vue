<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app>
    <header style="background-color: #2658cb">
      <div class="wrapper">
        <NavBar />
      </div>
    </header>
    <v-main>
      <img width="100%" src="/src/assets/header.jpg" />
      <RouterView />
    </v-main>
    <hr />
    <v-footer style="align-self: center"
      >© BULGARIAN CANADIAN SOCIETY 2011. All Rights Reserved.
    </v-footer>
  </v-app>
</template>

<style scoped>
.v-main {
  padding-top: 0;
  background-color: #dce6fc;
}
/* 
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
