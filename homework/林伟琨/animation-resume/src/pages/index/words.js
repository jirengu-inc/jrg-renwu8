export default {
    finalCode:[
    `/*
 * 大家好，我是小林.
 * 最近，很多公司都在招聘，而我也在找工作。
 * 找工作的第一步当然是写简历。
 * So , let's start!
 */

/*首先，先给所有元素加上过度*/
 * {
     -webkit-transition: all .3s;
     transition: all .3s;
   }

/*其次，白色不够好看，来添加一些背景色吧*/
  body{
        background-color:#3f5263;
        color:#f8f8f2;
  }

/*编辑器离边框太近了*/
  .styleEditor {
    padding: 1em;
    background-color:#303030;
    border: 1px solid #f8f8f2;
    margin: .5em;
    overflow: auto;
    width: 45vw; height: 90vh;
  }
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0; 
  -webkit-transition: none; 
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 6px; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh; 
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */
`,`
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`,
`
/* 再对 HTML 加点样式 */  
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
  
}
.resumeEditor blockquote p {
  line-height: 1.8em;
  word-wrap:normal;
}   
`
    ],
    finalWords:`
林伟琨-前端工程师
----

- 年龄22
- 学历：本科

技能
----

* 前端开发
* Node.js 开发

我的作品
----

1. [音乐FM]()
2. [XXX]()
3. [xxx]()

链接
----

* [GitHub]()
* [我的文章]()

> 如果你喜欢这个效果，想知道它的实现原理。
> 可以来到我的[简书博客](http://www.jianshu.com/u/5404fe848e31)这里有制作动态简历的详细过程。
> **最后，如果有HR觉得我还行的话，请给我一个面试的机会，谢谢!**
`
}
