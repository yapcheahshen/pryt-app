import App from './App.svelte';

let target=document.querySelector("#svelteApp");
const xml=document.querySelector('xml');

if (!target) {
	
	if (xml) {
		target=document.createElement('div');
		target.id='svelteApp';
		xml.insertAdjacentElement('beforebegin',target);
	} else {
		console.error("must have <xml> as root node inside <body>");
	}
}

if (target) {
	setTimeout(()=>{
		const app = new App({
			target,
			props: {
				xml
			}
		});
	})	
}


export default app;