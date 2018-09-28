module.exports = {
  title: 'Dai',
  description: '天凉好个秋',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '关于',
        link: '/about/'
      },
      {
        text: '文章',
        items: [
          { text: 'JAVASCRIPT', link: '/articles/' },
          {
            text: 'HTML+CSS',
            link: '/articles/'
          },
          {
            text: '前端',
            link: '/articles/'
          },
        ]
      },
      {
        text: 'Github',
        link: 'https://github.com/Sobcat'
      }
    ],
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */]
      }
    ],
    // sidebarDepth: 2,
    lastUpdated: 'last Updated'
  },
  base: '/myblog/'
};