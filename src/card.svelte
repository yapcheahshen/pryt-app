<script>
    const close=evt=>{
        let ele=evt.target;
        while (ele && ele.className!=='card') ele=ele.parentElement;

        ele.parentElement.removeChild(ele);
    }
</script>
<div>
    <span class="btnclose" on:click={close}>⨯</span>
    content {Math.random()}
</div>

<style>
    .btnclose {float:right;cursor:pointer}
    .btnclose:hover {color:red}
</style>