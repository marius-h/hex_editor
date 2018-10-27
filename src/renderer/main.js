// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

// Sync store with router
sync(store, router)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.config.productionTip = false

i18n.locale = 'de'

/* eslint-disable no-new */
new Vue({
  components: {App},
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  },
  i18n,
  router,
  store,
  template: '<App/>'
}).$mount('#app')
