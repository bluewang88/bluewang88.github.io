
## 📚Blog
本站主要用于发布博客文章和知识管理的个人网站，托管于阿里云的ECS服务器，域名是：[bluebaozi.cn](http://bluebaozi.cn),取于`蓝包子`的拼音，其实就是我喜欢的颜色和食物拼接而来。

:::tip
本站内容承诺都是我所学所用，绝不会简单地复制黏贴。
若个人总结有所错误，可以在评论区指正 ( •̀ ω •́ )✧
:::


## 🎨Theme

本站主题是 [`Vdoing`](https://github.com/xugaoyi/vuepress-theme-vdoing)，这是一款简洁高效的VuePress 知识管理&博客 主题。这是我在github闲逛中发现的，如果需要了解更多主题设置，请查看大佬[GitHub](https://github.com/xugaoyi/vuepress-theme-vdoing)。

<!-- <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/xugaoyi/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/xugaoyi/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a> -->


## 🐼Me
作为一个网络攻城狮，精通`Cisco`和`Avaya`的各种`语音产品`,大家各种语音问题可以来咨询我。
前后端开发，运维也都有涉猎，励志成为全沾脚手架！

### 技能
* Cisco\Avaya语音老司机，CUCM，Expressway、CMS、ACM、CME、呼叫中心、视频会议，不会你就来问我
* 精通 Linux、windows、macOS 的开关机操作
* 精通 Git 的 pull & push
* 精通 Cisco 的SDA、SDWAN的销售技巧
* 精通 PaloAlto 的 拼写


## 公众号

博文和资源分享有时候会发在公众号上，可以关注一下。

<img src="http://markdown-bluebaozi.oss-cn-shanghai.aliyuncs.com/img/扫码_搜索联合传播样式-标准色版.png"  style="width:370px;" />
<!-- <img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store@master/blog/qrcode.zdqv9mlfc0g.jpg"  style="width:30%;" /> -->



## :email: 联系

- WeChat or QQ: <a :href="qqUrl" class='qq'>846087453</a>
- Email:  <a href="mailto:846087453@qq.com">846087453@qq.com</a>
- GitHub: <https://github.com/bluewang88>



<script>
  export default {
    data(){
      return {
        qqUrl: 'tencent://message/?uin=846087453&Site=&Menu=yes'
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        this.qqUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=846087453&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
  }
</script>