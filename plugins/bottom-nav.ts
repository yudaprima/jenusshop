import BottomNavigation from 'bottom-navigation-vue'
import 'bottom-navigation-vue/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('BottomNavigation', BottomNavigation)
  })