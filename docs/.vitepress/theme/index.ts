// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Toast, * as VueToastification from "vue-toastification"
import "vue-toastification/dist/index.css"
import MinecraftCommand from "./components/MinecraftCommand.vue"
import Layout from "./Layout.vue"
import './style.css'
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('MinecraftCommand', MinecraftCommand)

    const options: VueToastification.PluginOptions = {
      timeout: 2000,
      position: (VueToastification.POSITION || { 'TOP_RIGHT': 'top-right' }).TOP_RIGHT,
    }

    app.use(Toast, options)
  }
} satisfies Theme
