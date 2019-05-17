const path = require('path')

module.exports = {
  title: 'Spencer Woo',

  description: '啊，你在看我的首页',

  head: [
    ['link', {
      rel: 'apple-touch-icon',
      href: '/assets/img/apple-touch-icon.png'
    }],
    ['link', {
      rel: 'shortcut icon',
      href: '/assets/img/favicon.ico'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'
    }]
  ],

  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },

  theme: path.resolve(__dirname, '../../theme'),

  themeConfig: {
    lang: require(path.resolve(__dirname, '../../theme/langs/zh-CN')),

    personalInfo: {
      nickname: 'Spencer Woo',
      description: '冰阔落',
      email: 'spencerwoo98@gmail.com',
      location: 'Beijing, China',
      organization: 'Beijing Institute of Technology',

      avatar: 'https://i.loli.net/2019/05/14/5cda32ed2428f83754.jpg',

      sns: {
        github: {
          account: 'spencerwooo',
          link: 'https://github.com/spencerwooo'
        },
        sspai: {
          account: 'SpencerWoo',
          link: 'https://sspai.com/user/800610/posts'
        },
        weibo: {
          account: '@SpencerWoo',
          link: 'https://weibo.com/u/6265807914'
        },
        zhihu: {
          account: 'Spencer Woo',
          link: 'https://www.zhihu.com/people/spencer-woo-64'
        }
      }
    },

    header: {
      // url: '/assets/img/bg.jpg',
      background: {
        useGeo: true
      },
      showTitle: true
    },

    lastUpdated: true,
    headerColor: '#ac1b2e',

    pagination: {
      perPage: 10
    },

    nav: [{
      text: 'Home',
      link: '/',
      exact: true
    },
    {
      text: 'Posts',
      link: '/posts/',
      exact: false
    },
    {
      text: 'About',
      link: '/about/',
      exact: false
    },
    {
      text: 'Friends',
      link: '/friends/',
      exact: false
    },
    {
      text: 'Github',
      link: 'https://github.com/spencerwooo'
    }
    ],

    footer: {
      author: 'Spencer Woo',
      icp: '<a href="https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe" rel="noopener" target="_blank">圣多美和普林西比民主共和国</a> ICP 备巴拉拉小魔仙号'
    },

    comments: {
      owner: 'spencerwooo',
      repo: 'spencerwooo.github.io',
      clientId: 'f656ebf81043361f059e',
      clientSecret: '21247be6b66180d3c85fbf19c31f17ae92abd714',
      autoCreateIssue: false
    }
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-111664763-1' // UA-00000000-0
      }
    ]
  ]
}
