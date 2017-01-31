const $ = (str) => document.querySelector(str);
$('input').addEventListener('input', () => {
    window.frames[0].postMessage($('input').value, '*');
});
window.addEventListener('message',(e)=>{
    console.log(e);
    $('input').value = e.data;
});