const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "二十's blog",
  description: '一个想学各种技术的攻城狮',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    themeConfig: {
      sidebar: 'structuring' //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
   },
    // config: md => {
    // md.set({html: true})
    // md.use(require("markdown-it-katex"))
  },

  head,
  plugins,
  themeConfig,
}
