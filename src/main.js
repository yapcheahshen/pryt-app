import App from './App.svelte';
import {trimDocument} from 'kaigua';
let target=document.querySelector("#svelteApp");
const htll=document.querySelector('htll');


if (!target) {
	if (htll) {
		target=document.createElement('div');
		target.id='svelteApp';
		htll.insertAdjacentElement('beforebegin',target);
	} else {
		console.error("must have <htll> as root node inside <body>");
	}
}

if (target) {
	const hash=window.location.hash.substr(1);
	if (hash) trimDocument(hash);
	const embedded=window.location.search.indexOf('embed')>-1;
	
	setTimeout(()=>{
		const app = new App({target,props:{embedded}});
	})
}


export default app;