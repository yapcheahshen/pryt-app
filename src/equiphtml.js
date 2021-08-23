import {getCursorWord} from './utils/cursortext.js'
import ParaMenu from './paramenu.svelte'
const toggleMenu=target=>{
    if (target.childElementCount==0) {
        new ParaMenu({target ,props: 
            {paranum: target.attributes.name.value}
        });
    } else {
        target.removeChild(target.children[0])
    }
}
const renderAname=()=>{
    const anames=document.getElementsByTagName('A');
    for (let i=0;i<anames.length;i++){
        if (anames[i].attributes.bookmark) {
            anames[i].style='color:blue';
        }
    }
}
const default_onclick=evt=>{
    const ele=evt.target;
    if (ele.tagName=='A' && ele.attributes.name) {
        toggleMenu(ele);
    } else {
        console.log(getCursorWord(evt.target));

    }
}

const addRel=(rel,href)=>{
    const lnk=document.createElement('link');
    lnk.rel=rel;
    lnk.href=href;
    document.head.appendChild(lnk);
}

const getRelativePath=()=>{
    const whref=window.location.href;
    const scriptfolder=document.querySelector('script').src.replace(/[^/]+?$/,'');
    let depth=0;
    whref.substr(scriptfolder.length).replace(/\//g,m=>depth++);
    //repeat until reaching the same path of script tag
    return '../'.repeat(depth);
}
export default function(){
    const rootrelpath=getRelativePath();
    // addRel('stylesheet',rootrelpath+'global.css');
    addRel('stylesheet',rootrelpath+'pryt.css');
    addRel('icon',rootrelpath+'favicon.svg');
    const rootnode=document.getElementsByTagName('xml')[0];
    if (typeof rootnode!=='undefined')rootnode.onclick=default_onclick;
    // renderAname();
}