import Card from './card.svelte';
import { getCursorWord } from 'kaigua';
const getParagraphNode=ele=>{
    //while (ele && ele.tagName!=='A') ele=ele.parentElement;
    while (ele && (!(ele.tagName==='P'||ele.tagName==='T'))) ele=ele.parentElement;
    return ele;
}
import {scrolled} from './store.js';

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
        let fnid=(ele.attributes.g?ele.attributes.g.value+'.':'')+ele.attributes.n.value;
        const fm=document.querySelector('p[fn="'+fnid+'"]');
        fm.classList.add('highlight');
        fm.scrollIntoView();
    } else if (ele.tagName=='P' && ele.attributes.fn) {
        const highlighted=document.querySelectorAll('fn.highlight');
        Array.from(highlighted).forEach(hl=>hl.classList.remove('highlight'));
        let n=ele.attributes.fn.value;
        const at=n.indexOf(".");
        let g='';
        if (at>0) {
            g=n.substr(0,at);
            n=n.substr(at+1);
        }
        const fn=Array.from(document.querySelectorAll('fn[n="'+n+'"]')).filter(el=>el.attributes.g&&el.attributes.g.value==g)[0];

        fn.classList.add('highlight');
        if (getSelection().anchorOffset==0) fn.scrollIntoView();
    } else if (ele.tagName=='A' && ele.attributes.name) {
        toggleMenu(ele);
    } else if (ele.tagName!=='BUTTON') {
        console.log(getCursorWord(evt.target));
    }
    
}
