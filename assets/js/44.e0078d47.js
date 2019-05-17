(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{341:function(e,r,t){"use strict";t.r(r);var a=t(2),s=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://i.loli.net/2018/06/25/5b30d07d03b86.png",alt:""}})]),e._v(" "),t("p",[e._v("What is Vultr?")]),e._v(" "),t("p",[e._v("Vultr 是一家经济实惠、价格低廉、网络稳定的 VPS 提供商。即：你可以在 Vultr 那里买到一台自己用的服务器，地址位于美洲、欧洲、日本或者澳洲等等。你可以利用 Vultr 给你提供的服务器以及配套服务，来运行自己的东西，比如在上面利用 WordPress 搭建自己的网站、在上面运行脚本抓取你要的数据等等。")]),e._v(" "),t("p",[e._v("如果你还是一头雾水，那么这个脚本可能并不适合你。")]),e._v(" "),t("p",[e._v("如果你还没尝试过 JSBox 的魅力，那么请参考这一篇文章："),t("a",{attrs:{href:"https://sspai.com/post/42361",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSBox: 一个创造工具的工具"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("下面是 Vultr Helper，欢迎食用。")]),e._v(" "),t("br"),e._v(" "),t("h1",{attrs:{id:"vultr-helper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vultr-helper","aria-hidden":"true"}},[e._v("#")]),e._v(" ☁️ Vultr Helper")]),e._v(" "),t("p",[e._v("一款运行在 JSBox (iOS) 上的 Vultr 服务器账户查询小工具。")]),e._v(" "),t("p",[e._v("Vultr Helper 利用 "),t("a",{attrs:{href:"https://vultr.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vultr"),t("OutboundLink")],1),e._v(" 提供的 API 查询您的账户余额、账户信息以及本月花销。")]),e._v(" "),t("p",[e._v("同时以小组件的形式完美的展现在 Today 栏目里面。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://xteko.com/redir?name=Vultr-Helper&url=https://raw.githubusercontent.com/spencerwoo98/jsbox-vultr-helper/master/vultr-helper.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vultr-Helper 下载地址"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2018/06/27/5b33475402316.png",alt:""}})]),e._v(" "),t("br"),e._v(" "),t("h2",{attrs:{id:"_1-申请您自己的-api-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-申请您自己的-api-key","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. 申请您自己的 API Key")]),e._v(" "),t("p",[e._v("访问链接 🔗 "),t("a",{attrs:{href:"https://my.vultr.com/settings/#settingsapi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vultr API Key"),t("OutboundLink")],1),e._v(" 来生成您自己的 API Key，此脚本依赖于 API Key 与 Vultr 账户进行沟通。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2018/06/23/5b2e35fd242b2.jpg",alt:""}})]),e._v(" "),t("br"),e._v(" "),t("h2",{attrs:{id:"_2-更改-api-的-ip-使用权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-更改-api-的-ip-使用权限","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. 更改 API 的 IP 使用权限")]),e._v(" "),t("p",[e._v("Vultr 的 API 权限管理很合理。")]),e._v(" "),t("p",[e._v("请在刚刚 API Key 申请页面下面的 Access Control 部分将您自己的 IP 地址添加至白名单（或者允许全部 IPv4 地址访问）。")]),e._v(" "),t("br"),e._v(" "),t("h2",{attrs:{id:"_3-将代码第一行-apikey-更换成您自己的-api-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-将代码第一行-apikey-更换成您自己的-api-key","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. 将代码第一行 "),t("code",[e._v("apiKey")]),e._v(" 更换成您自己的 API Key")]),e._v(" "),t("p",[e._v("这样运行，就可以显示您 Vultr 云账户中包括账户邮箱、账户姓名、余额、本月使用金额等等信息。")]),e._v(" "),t("br"),e._v(" "),t("h2",{attrs:{id:"_4-利用-curl-请求你的-server-的唯一识别码-serversubid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-利用-curl-请求你的-server-的唯一识别码-serversubid","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. 利用 "),t("code",[e._v("curl")]),e._v(" 请求你的 Server 的唯一识别码 "),t("code",[e._v("serverSubId")])]),e._v(" "),t("blockquote",[t("p",[e._v("v1.1.0 新版本功能：根据服务器唯一识别码更新服务器信息。")])]),e._v(" "),t("p",[e._v("在终端中运行代码：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'API-Key: YOUR_OWN_API_KEY'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://api.vultr.com/v1/server/list"')]),e._v("\n\n")])])]),t("p",[e._v("同样也要将上面命令中的 "),t("code",[e._v("API-Key")]),e._v(" 后面换成你自己的 "),t("code",[e._v("API_Key")]),e._v("，得到返回数据的每个级别就是服务器唯一识别码，即 Server "),t("code",[e._v("SUBID")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2018/06/27/5b334eacc86d5.jpg",alt:""}})]),e._v(" "),t("p",[e._v("这样找到服务器唯一识别码之后，将此项数据在代码中更新，这样也就得到了服务器的具体信息显示。")]),e._v(" "),t("p",[e._v("推荐如果将本小组件添加至 Today Widget，那么推荐将视图高度设置为 300.")]),e._v(" "),t("br"),e._v(" "),t("p",[e._v("欢迎来 Star 与 Fork，项目地址位于 --\x3e https://github.com/spencerwoo98/jsbox-vultr-helper")]),e._v(" "),t("br"),e._v(" "),t("h1",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[e._v("#")]),e._v(" License")]),e._v(" "),t("p",[e._v("This project is published via the "),t("a",{attrs:{href:"https://github.com/spencerwoo98/jsbox-vultr-helper/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e._v("MIT License"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("© Spencer Woo")])])},[],!1,null,null,null);r.default=s.exports}}]);