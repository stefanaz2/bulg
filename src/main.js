import './assets/main.css'

import { createApp } from 'vue'

import { createI18n } from 'vue-i18n'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives
})

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'bg',
    messages: {
      en: {
        message: {
          paragraph1: `The Bulgarian Canadian Society is a non-political, cultural, charitable
            organization, created in the early fifties, endeavoring to promote better ties and
            understanding between Canadian of Bulgarian descent and their respective native and
            adopted countries and people.`
        }
      },
      bg: {
        message: {
          paragraph1: `Българско канадско дружество е неполитическо, културно, благотворително дружество
            организация, създадена в началото на петдесетте години, която се стреми да насърчава по-добри връзки и
            разбирателство между канадци от български произход и техните съответни местни и
            осиновени държави и хора.`
        }
      }
    }
})

const app = createApp(App)

app.use(router )

app.use(vuetify)

app.use(i18n)

app.mount('#app')
