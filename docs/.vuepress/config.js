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
        link: '/articles/',
        items: [
          { text: 'JAVASCRIPT', link: '/articles/js' },
          {
            text: 'HTML+CSS',
            link: '/articles/htmlcss'
          },
          {
            text: '前端',
            link: '/articles/frontend'
          },
        ]
      },
      {
        text: 'Github',
        link: 'https://github.com/Sobcat'
      }
    ],
    sidebar: 'auto',
    // sidebarDepth: 2,
    lastUpdated: 'last Updated'
  },
  base: '/myblog/',
  markdown: {
    lineNumbers: true
  }
};