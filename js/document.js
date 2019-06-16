const docs = [
  {
    href: 'https://devdocs.io/',
    src: 'images/devdocs.png',
    title: 'DevDocs'
  },
  {
    href: 'https://www.w3schools.com/',
    src: 'images/w3school.png',
    title: 'W3school'
  },
  {
    href: 'https://cn.vuejs.org/index.html',
    src: 'images/vue.png',
    title: 'Vue.js'
  },
  {
    href: 'https://zh-hans.reactjs.org/',
    src: 'images/react.png',
    title: 'React.js'
  },
  {
    href: 'https://facebook.github.io/react-native/',
    src: 'images/react.png',
    title: 'React Native'
  },

  {
    href: 'https://getbootstrap.com/',
    src: 'images/bootstrap.png',
    title: 'Bootstrap'
  },
  {
    href: 'https://element.eleme.cn/#/zh-CN/component/installation',
    src: 'images/element.png',
    title: 'Element'
  },
  {
    href: 'https://mint-ui.github.io/#!/zh-cn',
    src: 'images/minui.png',
    title: 'Mint UI'
  },
  {
    href: 'https://www.iconfont.cn/',
    src: 'images/iconfont.png',
    title: 'Iconfont'
  },
  {
    href: 'https://www.webpackjs.com/concepts/',
    src: 'images/webpack.png',
    title: 'Webpack'
  },
  {
    href: 'https://nodejs.org/en/docs/',
    src: 'images/node.png',
    title: 'Node.js'
  },
  {
    href: 'https://expressjs.com/',
    src: 'images/express.png',
    title: 'Express'
  },
  {
    href: 'https://koajs.com/',
    src: 'images/koa.png',
    title: 'Koa'
  }
];

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    docs,
    searchResult: ''
  },
  methods: {
    changeDoc() {
      this.docs = docs.filter(doc =>
        doc.title
          .toLocaleLowerCase()
          .includes(this.searchResult.toLocaleLowerCase())
      );
    }
  }
});
