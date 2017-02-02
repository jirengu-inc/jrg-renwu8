//mock数据  本来应该获取自服务器
const getData = () => {
    return [
        {
            url: './img/good.jpg',
            title: '【京东超市】洗颜专科 柔澈美肌 洁面 沐浴 套装',
            price: '¥64.00'
        }, {
            url: './img/computer.jpg',
            title: '戴尔（DELL）Vostro 14-5459R-1848G 14英寸笔记本电脑',
            price: '¥4998.00'
        }, {
            url: './img/phone.jpg',
            title: '中兴（ZTE）天机7MAX（C2017） 华尔金 移动联通电信4G',
            price: '¥2348.00'
        }, {
            url: './img/shoes.jpg',
            title: '耐克（NIKE）跑步鞋 Roshe Run Roshe One GS 女子减震跑步',
            price: '¥378.00'
        },{
            url: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
            title: '珂兰 黄金手 猴哥款',
            price: '￥405.00'
        }
    ]
};

const getRandomNum =(size, length)=>{
    let arr=[],ranNum=0;
    for(let i=0;i<size;i++){
        ranNum=parseInt(Math.random()*length);
        arr.push(ranNum);
    }
    return arr;
}

const getRandomData = ()=>{
    let data = getData(),nums = getRandomNum(3,data.length);
    let arr=[];
    for(let i in nums){
        arr.push(data[(nums[i])]);
    }
    return arr;
};

module.exports = getRandomData;