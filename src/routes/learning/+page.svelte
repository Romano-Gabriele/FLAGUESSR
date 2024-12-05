<script>
    import Arrow from "../../components/arrow.svelte";
    import Flag from "../../components/flag.svelte";
    import Flagname from "../../components/flagname.svelte";
    import Taskbar from "../../components/taskbar.svelte";
    import { data } from "../../lib/helper";

    $: {
        flagUrl = data[ind].URL_ID;
        name = data[ind].nation;
    }
    
    let flagUrl, name;
    let dbLen = 195;
    let ind = 0;
    let current = 2;

    function incrementa() {
        ind++;
        if(ind >= dbLen)
            ind = 0;
    };

    function decrementa() {
        ind--;
        if(ind < 0)
            ind = dbLen - 1;
    };
</script>

<div class="container">
    <div class="left">
        <Arrow direction="dir-left" direzione="left" handler={decrementa} />
    </div>
    <div class="flag">
        <Flag src={flagUrl} />
    </div>
    <div class="right">
        <Arrow direction="dir-right" handler={incrementa} />
    </div>
    <div class="flag-name">
        <Flagname {name} />
    </div>
</div>

<Taskbar bind:selection={current} />

<style>
    .container {
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: 0.25fr 1fr 0.25fr;
        padding-top: 10%;
    }

    .left {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        grid-column: 1 / 2;
    }

    .flag {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        grid-column: 2 / 3;
    }

    .right {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        grid-column: 3 / 4;
    }

    .flag-name {
        width: 30%;
        height: 40%;
        display: flex;
        justify-content: center;
        font-size: 20px;
        grid-row: 2 / 3;
        grid-column: 1 / 4;
        padding-top: 2%;
    }
</style>