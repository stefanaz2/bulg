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
    <v-main style="min-height: 100vh">
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
}

header {
  margin-bottom: 4rem;
}
</style>
