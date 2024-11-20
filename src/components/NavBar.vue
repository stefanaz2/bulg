<script>
// export default {
//   data: () => ({
//     drawer: false,
//     group: null
//   }),
//   watch: {
//     group() {
//       this.drawer = false
//     }
//   }
// }
export default {
  data() {
    return {
      tab: null,
      items: [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/about' },
        { title: 'Churches', link: '/churches' },
        { title: 'Events', link: '/events' },
        { title: 'Theatres', link: '/theatres' },
        { title: 'Dance', link: '/dances' }
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<template>
  <v-app-bar :elevation="2" rounded style="padding-left: 2rem">
    <!-- <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img
        alt="bulgarian website logo"
        class="logo"
        src="/images/bg_can_logo.png"
        width="100"
        height="100%"
      />
    </template> -->
    <img
      alt="bulgarian website logo"
      class="logo"
      src="/images/bg_can_logo.png"
      width="100"
      height="100%"
    />

    <v-app-bar-title style="font-weight: bolder; font-size: 26px" tag="h1"
      >Bulgarian Canadian Society</v-app-bar-title
    >

    <template v-slot:extension>
      <v-tabs v-model="tab" align-tabs="title">
        <v-tab
          v-for="item in items"
          :key="item.title"
          :text="item.title"
          :value="item.title"
          :to="item.link"
        ></v-tab>
      </v-tabs>
    </template>
  </v-app-bar>

  <!-- <v-navigation-drawer v-model="drawer" :temporary="true">
    <v-list-item title="B.C.S." subtitle="Navigation"></v-list-item>
    <v-divider></v-divider>
    <nav>
      <v-list-item link to="/" title="Home"></v-list-item>
      <v-list-item link to="/about" title="About"></v-list-item>
    </nav>
  </v-navigation-drawer> -->
</template>
