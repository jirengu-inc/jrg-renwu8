/**
 * Created by fm on 2017/2/19.
 */
app.get('/hello', function(req, res) {
    console.log(req.query);
    var bigData = [
        {"img_url":"http://p1.bpimg.com/567571/cea6a40247b9c1cb.jpg",
            "short_name":"火锅",
            "short_intro":"'重庆十大文化符号'之首"},

        {"img_url":"http://p1.bqimg.com/567571/94c3ba49bc9fc9a3.jpg",
            "short_name":"辣子鸡",
            "short_intro":"此菜成菜色泽棕红油亮，麻辣味浓"},

        {"img_url":"http://i1.piimg.com/567571/5932aff993579a79.jpg",
            "short_name":"麻花",
            "short_intro":"麻花热量适中，低脂肪"
        },

        {"img_url":"http://p1.bpimg.com/567571/a5da4284e3d5a41c.jpg",
            "short_name":"烤鱼",
            "short_intro":"口味奇绝、营养丰富"
        },

        {"img_url":"http://i1.piimg.com/567571/f5851338e02870e6.png",
            "short_name":"毛血旺",
            "short_intro":"这道菜是川菜江湖菜的鼻祖之一"
        },

        {"img_url":"http://i1.piimg.com/567571/35c44f5bfb5cab74.jpg",
            "short_name":"脐橙",
            "short_intro":"脐橙含有丰富的维生素"
        },

        {"img_url":"http://i1.piimg.com/567571/3358f9f17800ffd4.jpg",
            "short_name":"皮蛋",
            "short_intro":"口感鲜滑爽口，色香味均有独到之处"},

        {"img_url":"http://i1.piimg.com/567571/d475cef23e9383ba.jpg",
            "short_name":"泉水鸡",
            "short_intro":"魔法城堡里最伟大的女王"},

        {"img_url":"http://i1.piimg.com/567571/99b481d5462fe39f.jpg",
            "short_name":"酸辣粉",
            "short_intro":"麻、辣、鲜、香、酸且油而不腻"
        },

        {"img_url":"http://i1.piimg.com/567571/76b2afbc2579ec90.jpg",
            "short_name":"合川桃片",
            "short_intro":"粉质细润，绵软，片薄，色洁白，味香甜"
        },

        {"img_url":"http://p1.bqimg.com/567571/4dfbb2ec850d3e50.jpg",
            "short_name":"小面",
            "short_intro":"比火锅还普及、亲民的就是重庆小面"
        },

        {"img_url":"http://p1.bpimg.com/567571/034a697e3d1cd7ef.jpg",
            "short_name":"涪陵榨菜",
            "short_intro":"鲜嫩香脆、鲜香可口"
        }
    ];
    var	mesData = [];
    var curPage = req.query.curPage,
        perPageCount = req.query.perPageCount;

    for(var i =0;i<perPageCount;i++){
        mesData[i] = bigData[parseInt( Math.random()*bigData.length )];
    }
    console.log(mesData);
    res.send({ "status":{"code":"0"},
        "data": mesData
    });
});