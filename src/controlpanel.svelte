<script>
import { scale ,fly,fade} from 'svelte/transition';
import HeaderTOC from './headertoc.svelte'

let menuon=false;
const toggleExpand=()=>{
    menuon=!menuon;
}
</script>
<div><span class='btnmenu' on:click={toggleExpand}>☰</span>

    {#if menuon}
    <div class="menu" in:fly={{x:150}} out:fly={{x:150}}>
        <HeaderTOC></HeaderTOC>
    </div>
    {/if}
</div>

<style>
    .btnmenu {cursor:pointer;position:fixed;top:0px;right:0px}
    .btnmenu:hover{color:brown}
    .menu {position:fixed;
    border-radius: 0.5em;opacity: 80%;z-index: 10;margin-top:1.5em;right:0px}
</style>