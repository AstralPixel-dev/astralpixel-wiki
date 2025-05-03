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

// 引入客户端脚本
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vitepress'

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

    const options: VueToastification.PluginOptions = {
      timeout: 2000,
      position: VueToastification.POSITION.TOP_RIGHT,
    }

    app.use(Toast, options)
  },
  setup() {
    // 使用Vue的onMounted钩子在客户端运行时导入脚本
    const route = useRoute()
    const currentPath = ref(route.path)
    
    // 监视路由变化
    watch(() => route.path, (path) => {
      currentPath.value = path
      if (path.includes('/guide/enchants')) {
        // 动态加载脚本
        import('./custom-script.js')
      }
    })
    
    onMounted(() => {
      // 初始加载时检查
      if (currentPath.value.includes('/guide/enchants')) {
        import('./custom-script.js')
      }
    })
  }
} satisfies Theme
