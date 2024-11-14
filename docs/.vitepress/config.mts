import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AstralPixel",
  description: "AstralPixel Wiki",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '关于本服', link: 'guide/about' },
          { text: '玩家守则', link: 'guide/rule' },
          { text: '常用指令', link: 'guide/command' },
          { text: '关于领地', link: 'guide/domain_about' },
          { text: '关于公会', link: 'guide/playerguild' },
          { text: '白名单', link: 'guide/whitelist' },
          { text: '服务器赞助相关', link: 'guide/donate' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bluefish-08/astralpixel-wiki' }
    ]
  }
})
