module.exports = {
  title: 'Spencer Woo',

  description: '啊，你在看我的首页',

  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  themeConfig: {
    personalInfo: {
      nickname: 'Spencer Woo',
      description: '啊，你在看我的首页',
      email: 'spencerwoo98@gmail.com',
      location: 'Beijing, China',
      organization: 'Beijing Institute of Technology',

      avatar: 'https://i.loli.net/2018/07/17/5b4db9b098c40.jpg',

      sns: {
        github: {
          account: 'spencerwooo',
          link: 'https://github.com/spencerwooo',
        },
        douban: {
          account: '159342708',
          link: 'https://www.douban.com/people/159342708',
        },
      },
    },

    headerBackground: {
      // url: '/assets/img/bg.jpg',

      useGeo: true,
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'About', link: '/about/', exact: false },
      { text: 'Github', link: 'https://github.com/spencerwooo' },
    ],

    comments: {
      owner: 'spencerwooo',
      repo: 'spencerwooo.github.io',
      clientId: 'f656ebf81043361f059e',
      clientSecret: '21247be6b66180d3c85fbf19c31f17ae92abd714',
    },
  },
}
