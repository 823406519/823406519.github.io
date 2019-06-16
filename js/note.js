const notes = [
  {
    href: 'https://github.com/823406519/frontend-api',
    src: 'images/api.png',
    title: 'FrontEnd Api'
  },

  {
    href: 'https://github.com/823406519/JavaScirpt',
    src: 'images/javascript.png',
    title: 'JavaScript'
  },
  {
    href: 'https://github.com/823406519/C',
    src: 'images/c.png',
    title: 'C'
  },
  {
    href: 'https://github.com/823406519/CSS',
    src: 'images/css.png',
    title: 'CSS'
  },
  {
    href: 'https://github.com/823406519/Sass',
    src: 'images/sass.png',
    title: 'Sass'
  },

  {
    href: 'https://github.com/823406519/Bootstrap',
    src: 'images/bootstrap.png',
    title: 'Bootstrap'
  },

  {
    href: 'https://github.com/823406519/Vue',
    src: 'images/vue.png',
    title: 'Vue'
  },
  {
    href: 'https://github.com/823406519/React',
    src: 'images/react.png',
    title: 'React'
  },
  {
    href: 'https://github.com/823406519/jQuery',
    src: 'images/jquery.png',
    title: 'jQuery'
  },
  {
    href: 'https://github.com/823406519/Node.js',
    src: 'images/node.png',
    title: 'Node.js'
  },
  {
    href: 'https://github.com/823406519/Sql',
    src: 'images/sql.png',
    title: 'Sql'
  },
  {
    href: 'https://github.com/823406519/Regular-Expression',
    src: 'images/regex.png',
    title: 'Regex'
  },
  {
    href: 'https://github.com/823406519/Markdown',
    src: 'images/markdown.png',
    title: 'Markdown'
  }
];

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    notes,
    searchResult: ''
  },
  methods: {
    changeNote() {
      this.notes = notes.filter(note =>
        note.title
          .toLocaleLowerCase()
          .includes(this.searchResult.toLocaleLowerCase())
      );
    }
  }
});
