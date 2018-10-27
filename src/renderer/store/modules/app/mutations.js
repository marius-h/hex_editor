import { set, toggle } from '@/utils/vuex'

export default {
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),
  setLanguage: set('lang')
}
