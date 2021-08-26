<script>
    import { onMount } from "svelte";
    const close=evt=>{
        let ele=evt.target;
        while (ele && ele.className!=='card') ele=ele.parentElement;

        ele.parentElement.removeChild(ele);
    }
    const newtab=evt=>{

    }
    const makeEmbed=addr=>{
        return addr.replace('#','?embed#');
    }
    const fileuri=window.location.protocol=='file:'
    let content='abc';
    export let addr='../../cs/dn/14.dn2.htm#20';
    const framename='f'+Math.floor(Math.random()*100000);
    onMount(()=>{
        if (!fileuri) {
            fetch(addr).then(r=>r.text()).then(raw=>{
                const aname=addr.match(/#(.+)/)[1];
                const at=raw.indexOf('<a name="'+aname+'"');
                const at2=raw.indexOf('<a name',at+1);
                if (at==-1)return;
                if (at2==-1) raw.indexOf('</htll>');
                content=raw.substring(at,at2);
            })
        }
    })
</script>
<div>
    <span class="btnclose" on:click={close}>⨯</span>
    <span class="btnnew" title='New Tab' on:click={newtab}>#</span>
    {#if fileuri}
    <iframe title="frame1" id={framename} src={makeEmbed(addr)}></iframe>
    {:else}
    <div class="content">{@html content}</div>
    {/if}
</div>

<style>
/* ☸ */
    .content {font: 1.3rem "ProvidentPali";margin-left:-1em;
    color:brown;border:dashed 1px black;
    width:100%;border:1 silver dotted}
    .btnclose {cursor:pointer;position:absolute;margin-left:-2.5em;margin-top:-1em}
    .btnclose:hover {color:red;transition: color 1s;}
    .btnnew {cursor:pointer;position:absolute;margin-left:-2.5em;margin-top:1.6em}
    .btnnew:hover {color:goldenrod;transition: color 1s;}

    iframe { width:100%;height: 8em;border:0px;margin-left:-1.5em}
</style>