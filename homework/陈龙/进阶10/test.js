const $ = (str) => document.querySelector(str);
const $$ = (str) => document.querySelectorAll(str);

const fnClose = () => {
    // $('.wrapper').style.display='none';//method 1
    $('.wrapper').classList.add('hidden');//method 2
};
$('#btn').addEventListener('click', (e) => {
    e.stopPropagation();
    // $('.wrapper').style.display='block';//method 1
    $('.wrapper').classList.remove('hidden');//method 2
});
$('.wrapper>.pannel>footer>.btn-cancel').addEventListener('click', fnClose);
$('.wrapper>.pannel>header>.close').addEventListener('click', fnClose);
$('.wrapper>.pannel').addEventListener('click', (e) => {
    e.stopPropagation();
});
window.addEventListener('click', fnClose);