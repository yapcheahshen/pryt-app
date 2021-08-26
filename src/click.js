import Card from './card.svelte';
import { getCursorWord } from 'kaigua';
const getParagraphNode=ele=>{
    //while (ele && ele.tagName!=='A') ele=ele.parentElement;
    while (ele && (!(ele.tagName==='P'||ele.tagName==='T'))) ele=ele.parentElement;
    return ele;
}


export function addcard(evt){
    const p=getParagraphNode(evt.target);
    const target=document.createElement('p');
    target.className='card';
    p.appendChild(target);
    new Card({target})
}
export const default_onclick=evt=>{
    const ele=evt.target;
    if (ele.tagName=='K'){
        addcard(evt)
    }else if (ele.tagName=='FN') {
        const highlighted=document.querySelectorAll('fm.highlight');
        Array.from(highlighted).forEach(hl=>hl.classList.remove('highlight'));

        const fm=document.querySelector('p[fn="'+ele.attributes.n.value+'"]');
        fm.classList.add('highlight');
        fm.scrollIntoView();
    } else if (ele.tagName=='P' && ele.attributes.fn) {
        const highlighted=document.querySelectorAll('fn.highlight');
        Array.from(highlighted).forEach(hl=>hl.classList.remove('highlight'));
        const fn=document.querySelector('fn[n="'+ele.attributes.fn.value+'"]');
        fn.classList.add('highlight');
        if (getSelection().anchorOffset==0) fn.scrollIntoView();
    } else if (ele.tagName=='A' && ele.attributes.name) {
        toggleMenu(ele);
    } else if (ele.tagName!=='BUTTON') {
        console.log(getCursorWord(evt.target));
    }
}
