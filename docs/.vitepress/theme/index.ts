// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Toast, * as VueToastification from "vue-toastification"
import "vue-toastification/dist/index.css"
import MinecraftCommand from "./components/MinecraftCommand.vue"
import EnchantPageLayout from "./components/EnchantPageLayout.vue"
import Layout from "./Layout.vue"
import './style.css'
import './table-style.css'
import './layout-fix.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册组件
    app.component('MinecraftCommand', MinecraftCommand)
    app.component('EnchantPageLayout', EnchantPageLayout)

    const options = {
      timeout: 2000,
      position: "top-right",
    }

    app.use(Toast, options)
  }
} satisfies Theme
