const $ = (str) => document.querySelector(str);
const $$ = (str) => document.querySelectorAll(str);

const nodeHeader = $('.tabs');
let tags = $$('.tabs>li>a');
let contents = $$('.content>p');

nodeHeader.addEventListener('click', (e) => {
    let tag = e.target;
    if (tag.tagName.toLowerCase() === 'a') {
        e.preventDefault();

        let index = [].indexOf.call(tags, tag);
        for(let i=0;i<tags.length;i++) {
            tags[i].classList.remove('active');
        }
        tags[index].classList.add('active');

        for(let i=0;i<contents.length;i++){
            contents[i].classList.remove('active');
        }
        contents[index].classList.add('active');
    }
});