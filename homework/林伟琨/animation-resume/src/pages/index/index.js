import Prism from 'prismjs'
import marked from 'marked'
import words from './words.js'
import './index.scss'
let vm = new Vue({
  el: '#resume',
  data: {
    enableShow: false,
    code: '',
    finalCode: words.finalCode,
    styleCode: '',
    introduction: '',
    finalWords: words.finalWords,
    frequency:60 
  },
  created() {
    this.mainLines();
  },
  computed: {
    viewCode() {
      return Prism.highlight(this.code, Prism.languages.css)
    },
    hideStyleCode() {
      return '<style>' + this.code + '</style>'
    }
  },
  methods: {
    mainLines() {
      this.writeStyle(0).then(() => {
        return this.writeResume()
      }).then(()=>{
        return this.writeStyle(1)
      }).then(()=>{
        this.transformMarkdown()
      }).then(()=>{
        return this.writeStyle(2)
      })
    },
    writeStyle(i) {
      return new Promise((resolve, reject) => {
        let n = 0;
        let len = this.finalCode[i].length;
        
        let timer = setInterval(() => {
          let chars = this.finalCode[i].substring(n, n+1)
          this.code += chars;
          if(chars==='\n'){
            this.$nextTick(() => {
              this.$refs.stylePart.scrollTop = 100000;
            })
          }
          n++;
          if (n > len) {
            clearInterval(timer)
            resolve();
          }
        }, this.frequency)
      })
    },
    writeResume() {
      return new Promise((resolve, reject) => {
        let n = 0;
        let len = this.finalWords.length;
        let timer = setInterval(() => {
          this.introduction = this.finalWords.substring(0, n)
          n++
          if (n > len) {
            clearInterval(timer)
            resolve()
          }
        }, this.frequency)
      })
    },
    transformMarkdown(){
      this.introduction=marked(this.introduction)
    }
  }
})
