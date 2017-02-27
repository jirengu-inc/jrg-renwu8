const $ = (str) => document.querySelector(str);
document.domain = 'cl.com';//降域
$('.main input').addEventListener('input', () => {
    window.frames[0].document.querySelector('input').value = $('.main input').value;
});