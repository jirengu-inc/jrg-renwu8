var Dialog = (function () {
    function Modal(options) {
        this.initOptions(options)
        this.init()
        this.createThemeHtml()
        this.bindEvent()
    }
    Modal.prototype = {
        defaultOptions: {
            header: {
                display: true,
                title: 'Dialog',
                close: true
            },
            bodyer: {
                display: true,
                type: 'text',
                content: "hi, I's example"
            },
            footer: {
                display: true,
                sureButton: true,
                cancelButton: true
            }
        },
        initOptions: function (options) {
            let workedOptions
            switch (typeof options) {
                case 'undefined':
                    workedOptions = $.extend({}, this.defaultOptions)
                    break
                case 'object':
                    workedOptions = $.extend(true, {}, this.defaultOptions, options)
                    break
                case 'string':
                    workedOptions = $.extend(true, {}, this.defaultOptions, { bodyer: { content: options } })
                    break
            }
            console.log(workedOptions)
            this.workedOptions = workedOptions

        },
        init: function () {
            let { header, bodyer, footer } = this.workedOptions
            this.header = header
            this.bodyer = bodyer
            this.footer = footer
        },
        createThemeHtml: function () {
            let $html = $('<div class="dialogModule"></div>'),
                $header = this.createHeaderHtml(),
                $bodyder = this.createBodyerHtml(),
                $footer = this.createFooterHtml()
            $html.append($header)
            $html.append($bodyder)
            $html.append($footer)
            $('body').append($html)

            this.$doneHtml = $html
        },
        createHeaderHtml: function () {
            let header = this.header
            if (!header.display) return
            let $html = $('<div class="header"></div>'),
                $title = $('<h3 class="title"></h3>')
            $title.text(header.title)
            $html.append($title)
            if (header.close) {
                let $close = $('<span class="close">x</span>')
                $html.append($close)
            }
            return $html
        },
        createBodyerHtml: function () {
            let bodyer = this.bodyer
            if (!bodyer.display) return
            let $html = $('<div class="bodyer"></div>'),
                $content = $('<div class="content"></div>')
            bodyer.type === 'text' ? (
                $content.text(bodyer.content)
            ) : bodyer.type === 'html' ? (
                $content.html(bodyer.content)
            ) : null;
            $html.append($content)
            return $html
        },
        createFooterHtml: function () {
            let footer = this.footer
            if (!footer.display) return
            let $html = $('<div class="footer"></div>')
            if (footer.cancelButton) {
                let $cancelButton = $('<button class="button cancelButton">Cancel</button>')
                $html.append($cancelButton)
            }
            if (footer.sureButton) {
                let $sureButton = $('<button class="button sureButton">OK</button>')
                $html.append($sureButton)
            }
            return $html

        },
        bindEvent: function () {
            let Modal = this,
                $doneHtml = this.$doneHtml
            $doneHtml.find('.close').on('click', function () {
                Modal.close()
            })
            $doneHtml.find('.sureButton').on('click', function () {
                Modal.buttonCallBack('sureButton')
                Modal.close()
            })
            $doneHtml.find('.cancelButton').on('click', function () {
                Modal.buttonCallBack('cancelButton')
                Modal.close()
            })
        },
        close: function () {
            this.$doneHtml.remove()
        },
        buttonCallBack: function (button) {
            let footer = this.footer
            typeof footer[button] === 'function' ? footer[button]() : null
        }
    }

    return {
        open: function (options) {
            new Modal(options)
            $('body').css('display', 'none')
        }
    }
})();

let btn1 = 'hi 我是饥人谷8班学员'
let btn2 = {
    bodyer: {
        type: 'html',
        content: '<a href="https://jirengu.com/">饥人谷</a>'
    }
}
let btn3 = {
    header: {
        title: '欢迎来到饥人谷大院堂',
        close: false
    },
    bodyer: {
        content: 'hi, 我是饥人谷任务8班学员'
    },
    footer: {
        sureButton: true,
        cancelButton: function () {
            alert('NO!')
        }
    }
}
let ulHtml = "<ul><li>饥人谷任务6班</li><li>饥人谷任务7班</li><li>饥人谷任务8班</li><li>饥人谷任务9班</li></ul>"
let btn4 = {
    bodyer: {
        type: 'html',
        content: ulHtml
    },
    footer: {
        sureButton: function(){
            alert('OK!')
        },
        cancelButton: function(){
            alert('NO!')
        }
    }
}
let btn5 = {
    bodyer: {
        content: 'hi, 我是饥人谷任务8班学员'
    },
    footer: {
        display: false,
    }
}
$('.container').on('click', 'button', function () {
    switch ($(this).attr('data-btn')) {
        case 'example':
            Dialog.open()
            break
        case 'btn1':
            Dialog.open(btn1)
            break
        case 'btn2':
            Dialog.open(btn2)
            break
        case 'btn3':
            Dialog.open(btn3)
            break
        case 'btn4':
            Dialog.open(btn4)
            break
        case 'btn5':
            Dialog.open(btn5)
            break
    }
})