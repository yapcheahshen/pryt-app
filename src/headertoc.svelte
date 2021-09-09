<script>
import { onMount } from "svelte";
    import {scrolled} from './store.js'
    // import {isElementInViewport} from 'kaigua';
    let headers=[];
    onMount(()=>{
        headers=Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6,h7,h8,h9,h'));
    });
    const headerInViewPort=header=>{
        const rect = header.getBoundingClientRect();
        return rect.top+window.scrollY > window.scrollY;
    }
    const scrollToNode=evt=>{
        headers[parseInt(evt.target.dataset.idx,10)].scrollIntoView();
    }
    const getLevel=el=>{
        const level=el.attributes.level?'h'+el.attributes.level.value:'';
        return level || el.tagName.toLowerCase();
    }

</script>
{#key $scrolled}
<div>
    {#each headers as header,idx (header) }
      <div class:lowerpart={headerInViewPort(header)} on:click={scrollToNode} 
      data-idx={idx} class={'header '+getLevel(header)}>{header.innerText}</div>
    {/each}
</div>
{/key}
<style>
  
</style>