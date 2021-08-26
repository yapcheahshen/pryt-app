<script>
	import { onMount } from "svelte";
	import {equipHTML,getCursorWord} from 'kaigua'
	import CPEmbedded from './controlpanel-embed.svelte';
	import CP from './controlpanel.svelte'
	export let embedded=false;
	import {default_onclick} from './click'
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

	const ControlPanel = embedded?CPEmbedded:CP;
	onMount(()=>{
		equipHTML(default_onclick);
	})
</script>

	<svelte:component this={ControlPanel} />
