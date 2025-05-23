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
          { text: '无法连接服务器', link: '/guide/connect' },
          { text: '赞助服务器', link: '/guide/donate' },
          {
            text:'服务器特色内容', collapsed: false,
            items: [
              {text:'特色菜肴', link:'/guide/datapacks/food'},
              {text: '特色附魔', link: '/guide/datapacks/enchants' },
            ] 
          },
          {
            text: '常用指令', collapsed: false,
            items: [
              { text: '传送类', link: '/guide/command/teleport' },
              { text: '查询类', link: '/guide/command/search' },
              { text: '动作类', link: '/guide/command/action' },
              { text: '箱子保护类', link: '/guide/command/chestprotect' },
              { text: '其他', link: '/guide/command/other' }
            ]
          }
        ]
      }
    ],

    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AstralPixel-dev/astralpixel-wiki' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
