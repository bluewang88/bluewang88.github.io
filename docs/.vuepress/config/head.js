// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/bluebaozi-favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: 'voice,个人技术博客,cisco,思科,avaya,亚美亚,uccx,cucm,callcenter,呼叫中心,python,js,Django,collaboration,vue,python,cummunication,callmanager,Node,git,github,markdown',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content:'code-neRQj6JIlv' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  [
    'script', {
      'data-ad-client': 'ca-pub-7517431412685010',
      async: '' ,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    }
  ], // 网站关联Google AdSense 与 html格式广告支持
  ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
  // 搜索框添加快捷键
  ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}]


]
