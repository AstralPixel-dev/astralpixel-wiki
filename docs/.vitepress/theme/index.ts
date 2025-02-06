// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Toast, { PluginOptions, POSITION } from "vue-toastification"
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

    const options: PluginOptions = {
      timeout: 2000,
      position: POSITION.TOP_RIGHT,
    }

    app.use(Toast, options)
  }
} satisfies Theme
