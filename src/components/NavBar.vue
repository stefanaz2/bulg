<template>
  <v-app-bar :elevation="2" rounded>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img
        alt="bulgarian website logo"
        class="logo"
        src="@/assets/bg_can_logo.png"
        width="100"
        height="100%"
      />
    </template>

    <v-app-bar-title>Bulgarian Canadian Society</v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" :temporary="true">
    <v-list-item title="B.C.S." subtitle="Navigation"></v-list-item>
    <v-divider></v-divider>
    <nav>
      <v-list-item link to="/" title="Home"></v-list-item>
      <v-list-item link to="/about" title="About"></v-list-item>
    </nav>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
