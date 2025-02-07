import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AstralPixel",
  description: "AstralPixel Wiki",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/about' }
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '关于本服', link: '/guide/about' },
          { text: '玩家守则', link: '/guide/rule' },
          { text: '常见问题', link: '/guide/faq' },
          {
            text: '常用指令', collapsed: false,
            items: [
              { text: '传送类', link: '/guide/command/teleport' },
              { text: '查询类', link: '/guide/command/search' },
              { text: '动作类', link: '/guide/command/action' },
              { text: '经济类', link: '/guide/command/economy' },
              { text: '箱子商店', link: '/guide/command/chest_shop' },
              { text: '全球商店', link: '/guide/command/global_shop' },
              { text: '签到', link: '/guide/command/signin' },
              { text: '其他', link: '/guide/command/other' }
            ]
          },
          {
            text: '更多附魔', collapsed: false,
            items: [
              { text: '附魔效果', link: '/guide/enchantment/effects' },
              { text: '获取途径', link: '/guide/enchantment/get' },
              { text: '常见问题', link: '/guide/enchantment/faq' },
            ]
          }
        ]
      }
    ],

    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bluefish-08/astralpixel-wiki' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
