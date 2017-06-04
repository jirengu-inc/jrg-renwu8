calendar = (function () {
    function _Calendar($target) {
        this.init($target)
        this.createThemeHtml()
        this.bindEvent()
    }
    _Calendar.prototype = {
        init: function ($target) {
            this.$target = $target
            let date = $target.attr('date-init')
            if (this.isValidDate(date)) {
                console.log('defaultDate')
                this.date = new Date(date) //获取日期
            } else {
                console.log('notDefaultDate')
                this.date = new Date() //否则默认当前日期
            }
        },
        getMonthDay: function () {
            let firstDay = this.getFirstDay(this.date),
                lastDay = this.getLastDay(this.date),
                oneDay = 1000 * 60 * 60 * 24,
                dateArr = []
            for (let i = firstDay.getDay(); i > 0; i--) {
                let tempdate = new Date(firstDay.getTime() - i * oneDay)
                dateArr.push({ type: 'pre', date: tempdate })
            }
            for (let j = 0; j < lastDay.getDate(); j++) {
                let tempDate = new Date(firstDay.getTime() + j * oneDay)
                dateArr.push({ type: "cur", date: tempDate })
            }
            for (let k = 1; k < 7 - lastDay.getDay(); k++) {
                let tempDate = new Date(lastDay.getTime() + k * oneDay)
                dateArr.push({ type: "next", date: tempDate })
            }
            return this.setPageDate(dateArr)
        },


        getFirstDay: function (date) {
            let year = date.getFullYear(),
                month = date.getMonth()
            return new Date(year, month, 1)
        },
        getLastDay: function (date) {
            let year = date.getFullYear(),
                month = date.getMonth(),
                tempDate
            month++
            if (month > 11) {
                month = 0
                year++
            }
            tempDate = new Date(year, month, 1)
            return new Date(tempDate.getTime() - 1000 * 60 * 60 * 24)

        },
        setHeaderDate: function () {
            let date = this.date
            return date.getFullYear() + '年' + (date.getMonth() + 1) + '月'

        },

        setPageDate: function (dateArr) {

            let _Calendar = this,
                $tbody = $('<tbody></tbody>'),
                $tr, $td
            // $td = $('<td></td>')
            $.each(dateArr, function (index, value) {
                if (index % 7 === 0) {
                    $tr = $('<tr></tr>')
                }

                $td = $('<td></td>')
                $td.addClass(value['type'])
                $td.attr('data-date', _Calendar.getYYMMDD(value['date']))
                $td.text(_Calendar.toFixed(value['date'].getDate()))
                $tr.append($td)
                if (index % 7 === 6) {
                    $tbody.append($tr)
                }
            })
            return $tbody
        },
        getYYMMDD: function (date) {
            let yy = date.getFullYear(),
                mm = date.getMonth() + 1,
                dd = date.getDate()
            return yy + '/' + this.toFixed(mm) + '/' + this.toFixed(dd)
        },
        toFixed: function (n) {
            return (n + '').length === 1 ? ('0' + n + '') : (n + '')
        },



        createThemeHtml: function () {
            let $html = $('<div class="calendarBox" style="display:none"></div>'),
                $header = this.createHeader(),
                $page = this.createPage()
            $html.append($header).append($page)
            // $('body').append($html)
            this.$doneHtml = $html
            this.$doneHtml.insertAfter(this.$target)
                .css({
                    'position': 'absolute',
                    'left': this.$target.offset().left,
                    'top': this.$target.offset().top + this.$target.height(true),
                })
        },
        createHeader: function () {
            let $html = $('<div class="header"></div>'),
                $previousButton = $('<span class="button previousButton"></span'),
                $headerData = $('<span class="headerData"></span>'),
                $NextButton = $('<span class="button NextButton"></span>')
            $headerData.text(this.setHeaderDate())
            $html.append($previousButton)
                .append($headerData)
                .append($NextButton)
            return $html
        },
        createPage: function () {
            let $html = $('<table class="page"></table>'),
                $thead = $('<thead> <tr> <th>日</th> <th>一</th> <th>二</th> <th>三</th> <th>四</th> <th>五</th> <th>六</th> </tr> </thead>'),
                $tbody = this.getMonthDay()
            $html.append($thead).append($tbody)
            return $html
        },
        upHeaderDate: function () {
            let upHearData = this.setHeaderDate()
            this.$doneHtml.find('.headerData').text(upHearData)
        },
        upPageDate: function () {
            let $doneHtml = this.$doneHtml,
                $upPageData = this.getMonthDay()
            $doneHtml.find('tbody').remove()
            $doneHtml.find('.page').append($upPageData)
        },

        bindEvent: function () {
            let _Calendar = this,
                $doneHtml = this.$doneHtml
            $doneHtml.find('.previousButton').on('click', function () {
                let month = _Calendar.date.getMonth()
                month--
                _Calendar.date.setMonth(month)
                _Calendar.upHeaderDate()
                _Calendar.upPageDate()
            })
            $doneHtml.find('.NextButton').on('click', function () {
                let month = _Calendar.date.getMonth()
                month++
                _Calendar.date.setMonth(month)
                _Calendar.upHeaderDate()
                _Calendar.upPageDate()
            })
            $doneHtml.on('click', '.cur', function () {
                _Calendar.$target.val($(this).attr('data-date'))
                _Calendar.$doneHtml.hide()
            })

            this.$target.on('click', function (e) {
                e.stopPropagation() //停止捕获和冒泡阶段
                _Calendar.$doneHtml.show()
            })
            this.$doneHtml.on('click', function (e) {
                e.stopPropagation();
            });
            $(window).on('click', function (e) {
                _Calendar.$doneHtml.hide()
            })

        },
        isValidDate: function (date) {
            return new Date(date).toString() !== 'Invalid Date'
        }
    }

    return {
        open: function ($target) {
            new _Calendar($target)
        }
    }
})();


// calendar.open('2017,01,01')

// $('#defaultDate').on('click', function () {
//     calendar.open($(this))
// })

$('.date-ipt').each(function(){
    calendar.open($(this))
})