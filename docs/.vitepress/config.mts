import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AstralPixel",
  description: "AstralPixel Wiki",
  base: '/',
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
          { text: '管理列表', link: '/guide/admins' },
          { text: '玩家守则', link: '/guide/rule' },
          { text: '常见问题', link: '/guide/faq' },
          { text: '无法连接服务器', link: '/guide/connect' },
          { text: 'QQ群机器人指令', link: '/guide/qqbot' },
          { text: '赞助服务器', link: '/guide/donate' },
          { text: '老玩家认证规则', link: '/guide/oldplayers' },
          {
            text:'服务器特色内容', collapsed: false,
            items: [
              {text:'特色菜肴', link:'/guide/datapacks/food'},
              {text: '特色附魔', link: '/guide/datapacks/enchants' },
              {text: '更多成就', link: '/guide/datapacks/advancement' },
              {text: '扩展地形', link: '/guide/datapacks/MoreTerrain' },
              {text: '扩展结构', link: '/guide/datapacks/structures' },
            ] 
          },
          {
            text: '常用指令', collapsed: false,
            items: [
              { text: '传送类', link: '/guide/command/teleport' },
              { text: '查询类', link: '/guide/command/search' },
              { text: '动作类', link: '/guide/command/action' },
              { text: '箱子保护', link: '/guide/command/chestprotect'},
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
      message: '由 AstralPixel 维护，保留所有权利。',
      copyright: 'Copyright © 2022-present AstralPixel'
    }
  }
})
