import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import tr from 'vuetify/es5/locale/tr'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { tr },
    current: 'tr'
  },
  theme: {
    themes: {
      light: {
        primary: '#25222A',
        secondary: '#D9B54A',
        accent: '#929A9E',
        error: '#ba1b1d',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: colors.deepPurple.accent1,
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
})
