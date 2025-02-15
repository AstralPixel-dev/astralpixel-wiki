// https://vitepress.dev/guide/custom-theme
// import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'
import {
  InjectionKey as NolebaseEnhancedReadabilitiesInjectionKey,
  NolebaseEnhancedReadabilitiesMenu,
  Options as NolebaseEnhancedReadabilitiesOptions,
  NolebaseEnhancedReadabilitiesScreenMenu,
  SpotlightStyle as NolebaseEnhancedReadabilitiesSpotlightStyle
} from '@nolebase/vitepress-plugin-enhanced-readabilities'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import { InjectionKey as NolebaseGitChangelogInjectionKey, NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import {
  NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import { NolebasePagePropertiesPlugin } from '@nolebase/vitepress-plugin-page-properties'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h, type Plugin } from 'vue'
import Toast, * as VueToastification from "vue-toastification"
import "vue-toastification/dist/index.css"
import DisplayCard from './components/DisplayCard.vue'
import MinecraftCommand from "./components/MinecraftCommand.vue"
import Layout from "./Layout.vue"
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'layout-top': () => [
        h(NolebaseHighlightTargetedHeading),
      ],
    })
  },
  enhanceApp({ app }) {
    app.use(NolebasePagePropertiesPlugin<{
      progress: number
    }>() as Plugin, {
      properties: {
        'zh-CN': [
          {
            key: 'wordCount',
            type: 'dynamic',
            title: '文字字数',
            options: {
              type: 'wordsCount',
            },
          },
          {
            key: 'readingTime',
            type: 'dynamic',
            title: '阅读时间',
            options: {
              type: 'readingTime',
              dateFnsLocaleName: 'zhCN',
            },
          },
          {
            key: 'updatedAt',
            type: 'datetime',
            title: '更新时间',
            formatAsFrom: true,
            dateFnsLocaleName: 'zhCN',
          },
        ],
      },
    })
    app.provide(NolebaseEnhancedReadabilitiesInjectionKey, {
      layoutSwitch: {
        defaultMode: 1
      },
      spotlight: {
        defaultToggle: true,
        defaultStyle: NolebaseEnhancedReadabilitiesSpotlightStyle.Aside,
      },
    } as NolebaseEnhancedReadabilitiesOptions)

    app.use(NolebaseGitChangelogPlugin)
    app.provide(NolebaseGitChangelogInjectionKey, {
      hideChangelogNoChangesText: true,
      commitsRelativeTime: true,
      displayAuthorsInsideCommitLine: true,
      hideContributorsHeader: true,
      hideChangelogHeader: true
    })

    app.component('MinecraftCommand', MinecraftCommand)
    app.component('DisplayCard', DisplayCard)

    app.use(Toast, {
      timeout: 2000,
      position: (VueToastification.POSITION || { 'TOP_RIGHT': 'top-right' }).TOP_RIGHT,
    } as VueToastification.PluginOptions)
  }
} satisfies Theme
