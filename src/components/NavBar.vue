<script>
import { useWindowSize } from '@vueuse/core'

export default {
  setup() {
    const { width } = useWindowSize()

    return { width }
  },
  data() {
    return {
      drawer: false,
      currentItem: 'tab-Home',
      items: [
        { title: 'Events' },
        {
          title: this.$t('message.theatres'),
          subtitles: [
            { title: 'Отражение', link: '' },
            { title: 'Зад океана', link: '' }
          ]
        },
        {
          title: 'Schools',
          subtitles: [
            { title: 'Св.Димитар', link: '' },
            { title: 'Родолюбче', link: '' },
            { title: 'Канеф', link: '' }
          ]
        },
        {
          title: 'Churches',
          subtitles: [
            { title: 'Св.Св. Кирил и Методи', link: '' },
            { title: 'Св.Троица', link: '' },
            { title: 'Св.Георги', link: '' },
            { title: 'Св.Димитар', link: '' },
            { title: 'Св. Иван Рилски', link: '' }
          ]
        },
        {
          title: 'Ensembles',
          subtitles: [
            { title: 'Златна Тракия', link: '' },
            { title: 'На хорото', link: '' },
            { title: 'Димитровче', link: '' },
            { title: 'Щастливци', link: '' },
            { title: 'Хопа тропа е ха ха', link: '' },
            { title: 'Аврора', link: '' }
          ]
        },
        {
          title: 'Groups',
          subtitles: [
            { title: 'От извора', link: '' },
            { title: 'На Елица', link: '' }
          ]
        },
        {
          title: 'Art',
          subtitles: [
            { title: 'A', link: '' },
            { title: 'B', link: '' }
          ]
        },
        {
          title: 'Other',
          subtitles: [
            { title: 'ABEC', link: '' },
            { title: 'Общонационатен комитет Васил Левски', link: '' }
          ]
        }
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {},
  computed: {
    itemTitles() {
      return [
        this.$t('message.events'),
        this.$t('message.theatres'),
        this.$t('message.schools'),
        this.$t('message.churches'),
        this.$t('message.ensembles'),
        this.$t('message.groups'),
        this.$t('message.art'),
        this.$t('message.other')
      ]
    },
    drawerStatus() {
      return this.drawer && this.width < 1100
    }
  }
}
</script>

<template>
  <v-app-bar :elevation="2" rounded>
    <v-app-bar-nav-icon v-if="width < 1100" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

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

    <template v-if="width >= 1100" v-slot:extension>
      <v-tabs v-model="currentItem" align-tabs="title" fixed-tabs>
        <v-menu v-for="(item, index) in items" :key="index" :text="item.title">
          <template v-slot:activator="{ props }">
            <v-btn
              class="align-self-center me-4"
              height="100%"
              rounded="0"
              variant="plain"
              v-bind="props"
              :to="item.title === 'Events' ? '/' : ''"
            >
              {{ itemTitles[index] }}

              <v-icon v-if="item.subtitles" icon="mdi-menu-down" end></v-icon>
            </v-btn>
          </template>

          <v-list class="bg-grey-lighten-3" v-if="item.subtitles">
            <v-list-item
              v-for="(subItem, index) in item.subtitles"
              :key="index"
              :value="index"
              :title="subItem.title"
              :to="subItem.link"
            ></v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </template>
    <v-btn
      variant="outlined"
      @click="$i18n.locale == 'en' ? ($i18n.locale = 'bg') : ($i18n.locale = 'en')"
      style="margin-left: auto; margin-right: 1rem; font-weight: bolder; color: #000000"
    >
      <span v-if="$i18n.locale == 'en' && width >= 800">Bulgarian</span>
      <span v-if="$i18n.locale == 'en' && width < 800">BG</span>
      <span v-if="$i18n.locale == 'bg' && width >= 800">English</span>
      <span v-if="$i18n.locale == 'bg' && width < 800">EN</span>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawerStatus" :temporary="true">
    <v-list-item title="B.C.S." subtitle="Navigation"></v-list-item>
    <v-divider></v-divider>
    <nav>
      <v-list-item v-for="(item, index) in items" :key="index" :value="index">
        {{ itemTitles[index] }}
        <v-divider></v-divider>
        <v-list-item
          link
          v-for="(subItem, index) in item.subtitles"
          :key="index"
          :value="index"
          :title="subItem.title"
          :to="subItem.link"
        ></v-list-item>
      </v-list-item>
    </nav>
  </v-navigation-drawer>
</template>

<style>
.v-tabs--align-tabs-title:not(.v-slide-group--has-affixes) .v-tab:first-child {
  margin-inline-start: 0;
}
.v-toolbar-title__placeholder {
  padding-bottom: 5px;
}
</style>
