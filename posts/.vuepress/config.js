module.exports = {
  title: 'Spencer Woo',

  description: '啊，你在看我的首页',

  head: [
    ['link', {
      rel: 'icon',
      href: '/assets/apple-touch-icon.png'
    }],
    ['link', {
      rel: 'shortcut icon',
      href: '/assets/favicon.ico'
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

  themeConfig: {
    personalInfo: {
      nickname: 'Spencer Woo',
      description: '冰阔落',
      email: 'spencerwoo98@gmail.com',
      location: 'Beijing, China',
      organization: 'Beijing Institute of Technology',

      avatar: 'https://i.loli.net/2018/07/17/5b4db9b098c40.jpg',

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

    headerBackground: {
      // url: '/assets/img/bg.jpg',

      useGeo: true
    },

    lastUpdated: true,
    headerColor: '#C492B1',

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
      clientSecret: '21247be6b66180d3c85fbf19c31f17ae92abd714'
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
