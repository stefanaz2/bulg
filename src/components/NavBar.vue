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
      currentItem: 'tab-Home',
      items: [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/about' },
        { title: 'Churches', link: '/churches' }
      ],
      more: [
        { title: 'Events', link: '/events' },
        { title: 'Theatres', link: '/theatres' },
        { title: 'Dance', link: '/dances' }
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    addItem(item) {
      const removed = this.items.splice(0, 1)
      this.items.push(...this.more.splice(this.more.indexOf(item), 1))
      this.more.push(...removed)
      this.$nextTick(() => {
        this.currentItem = 'tab-' + item
      })
    }
  }
}
</script>

<template>
  <v-app-bar :elevation="2" rounded>
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
      <v-tabs v-model="currentItem" align-tabs="title" fixed-tabs>
        <v-tab
          v-for="item in items"
          :key="item.title"
          :text="item.title"
          :value="item.title"
          :to="item.link"
        ></v-tab>

        <v-menu v-if="more.length">
          <template v-slot:activator="{ props }">
            <v-btn
              class="align-self-center me-4"
              height="100%"
              rounded="0"
              variant="plain"
              v-bind="props"
            >
              more

              <v-icon icon="mdi-menu-down" end></v-icon>
            </v-btn>
          </template>

          <v-list class="bg-grey-lighten-3">
            <v-list-item
              v-for="item in more"
              :key="item.title"
              :title="item.title"
              :to="item.link"
              @click="addItem(item)"
              @keyup.space="addItem(item)"
            ></v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
      <v-btn
        @click="$i18n.locale == 'en' ? ($i18n.locale = 'bg') : ($i18n.locale = 'en')"
        style="margin-left: auto; margin-right: 1rem"
      >
        <span v-if="$i18n.locale == 'en'">Bulgarian</span>
        <span v-if="$i18n.locale == 'bg'">English</span>
      </v-btn>
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

<style>
.v-tabs--align-tabs-title:not(.v-slide-group--has-affixes) .v-tab:first-child {
  margin-inline-start: 0;
}
.v-toolbar-title__placeholder {
  padding-bottom: 5px;
}
</style>
