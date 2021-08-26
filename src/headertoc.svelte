<script>
import { onMount } from "svelte";

    let headers=[];
    onMount(()=>{
        headers=Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6,h7,h8,h9'));
    });
    const scrollToNode=evt=>{
        headers[parseInt(evt.target.dataset.idx,10)].scrollIntoView();
    }
</script>
<div>
    {#each headers as header,idx (header) }
      <div on:click={scrollToNode} 
      data-idx={idx} class={'header '+header.tagName}>{header.innerText}</div>
    {/each}
</div>

<style>
  
</style>