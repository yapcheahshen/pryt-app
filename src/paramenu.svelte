<script>
    import Card from './card.svelte';
    const getParagraphNode=ele=>{
        while (ele && ele.tagName!=='A') ele=ele.parentElement;
        while (ele && (!(ele.tagName==='P'||ele.tagName==='T'))) ele=ele.nextSibling;
        return ele;
    }
    const addcard=evt=>{
        const p=getParagraphNode(evt.target);
        const target=document.createElement('p');
        target.className='card';
        p.appendChild(target);
        new Card({target})
    }

    export let paranum;
</script>

<span class="menu" paranum={paranum}>
<button on:click={addcard}>add card</button>
<button>Att</button>
<button>Tik</button>
<button>En</button>
<button>Cn</button>
</span>

<style>
    .menu {padding-left:0.5em;
    border-top-right-radius: 0.25em;
    border-bottom-right-radius: 0.25em;
    font-size:85%;
    color:brown;background:silver}
</style>