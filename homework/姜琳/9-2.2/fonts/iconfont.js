;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-tingzhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M510.407736 960.414823c-60.290131 0-118.797663-11.81714-173.898609-35.122939-53.199643-22.50148-100.970646-54.706973-141.983735-95.720062-41.013089-41.013089-73.218582-88.784092-95.720062-141.983735-23.305799-55.101969-35.122939-113.608477-35.122939-173.898609 0-60.290131 11.81714-118.797663 35.122939-173.898609 22.50148-53.200666 54.706973-100.970646 95.720062-141.983735 41.013089-41.014112 88.784092-73.218582 141.983735-95.721085 55.101969-23.305799 113.608477-35.122939 173.898609-35.122939s118.797663 11.81714 173.898609 35.122939c53.199643 22.502503 100.970646 54.706973 141.983735 95.721085 41.013089 41.013089 73.218582 88.784092 95.720062 141.983735 23.305799 55.100946 35.122939 113.608477 35.122939 173.898609 0 60.290131-11.81714 118.797663-35.122939 173.898609-22.50148 53.199643-54.706973 100.970646-95.720062 141.983735s-88.784092 73.218582-141.983735 95.720062C629.205399 948.597683 570.697867 960.414823 510.407736 960.414823zM510.407736 130.408095c-102.377692 0-198.627826 39.868009-271.0206 112.260783-72.39175 72.392774-112.260783 168.642908-112.260783 271.0206s39.868009 198.627826 112.260783 271.0206c72.392774 72.392774 168.642908 112.260783 271.0206 112.260783s198.62885-39.868009 271.0206-112.260783c72.392774-72.392774 112.260783-168.642908 112.260783-271.0206s-39.868009-198.627826-112.260783-271.0206C709.036585 170.276105 612.786451 130.408095 510.407736 130.408095z"  ></path>'+
      ''+
      '<path d="M348.904435 353.853144l323.007625 0 0 319.671647-323.007625 0 0-319.671647Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-qianjin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M212.992 526.336 212.992 526.336 212.992 526.336 215.04 526.336 212.992 526.336Z"  ></path>'+
      ''+
      '<path d="M819.2 202.752 819.2 202.752c-79.872-79.872-188.416-129.024-309.248-129.024C391.168 75.776 282.624 122.88 204.8 200.704L202.752 202.752c-79.872 79.872-126.976 188.416-126.976 307.2 0 120.832 49.152 229.376 126.976 307.2 77.824 79.872 186.368 126.976 307.2 126.976 120.832 0 229.376-49.152 307.2-126.976 79.872-77.824 126.976-188.416 126.976-307.2C946.176 391.168 897.024 282.624 819.2 202.752zM770.048 770.048c-65.536 65.536-157.696 108.544-260.096 108.544-202.752 0-368.64-165.888-368.64-368.64 0-102.4 40.96-194.56 108.544-260.096l2.048-2.048c65.536-65.536 157.696-106.496 258.048-106.496 102.4 0 194.56 40.96 260.096 108.544 65.536 65.536 108.544 157.696 108.544 260.096S837.632 704.512 770.048 770.048z"  ></path>'+
      ''+
      '<path d="M540.672 301.056 540.672 301.056c-8.192-8.192-20.48-8.192-28.672 0-4.096 4.096-6.144 8.192-6.144 14.336l0 96.256L296.96 411.648c-10.24 0-20.48 10.24-20.48 20.48l0 157.696c0 10.24 8.192 20.48 20.48 20.48l210.944 0 0 96.256c0 12.288 10.24 20.48 20.48 20.48 6.144 0 10.24-2.048 14.336-6.144l0 0 194.56-194.56c8.192-8.192 8.192-20.48 0-28.672L540.672 301.056 540.672 301.056z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-kaishi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.760141 41.152898c-258.681014 0-468.416813 209.7348-468.416813 468.417213 0 258.682014 209.735799 468.417213 468.416813 468.417213 258.682014 0 468.416214-209.7352 468.416214-468.417213C981.176354 250.887698 771.441954 41.152898 512.760141 41.152898zM512.760141 919.967862c-226.634342 0-410.385758-183.811776-410.385758-410.39775 0-226.559792 183.751417-410.39775 410.385758-410.39775 226.584776 0 410.399749 183.837958 410.399749 410.39775C923.15969 736.156086 739.319933 919.967862 512.760141 919.967862zM395.199647 685.607358l293.14105-181.57789-293.14105-169.886817L395.199647 685.607358z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
