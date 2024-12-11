<script>
    import { onMount } from "svelte";
    import Flag from "../../components/flag.svelte";
    import Flagname from "../../components/flagname.svelte";
    import { data } from "../../stores/data";

    onMount(() => {
        data.set(JSON.parse(sessionStorage.getItem('flags')));
    })

    let flagList = [];
    let nameList = [];
    let n = Math.trunc(Math.random() * 195);
    let options = [];

    console.log(n);

    function riempi(lista, chiave) {
        let fill;
        for(let i = 0; i < $data.length; i++) {
            if(chiave == 0)
                fill = $data[i].URL_ID;
            else
                fill = $data[i].nation;
            
            lista[i] = fill;
        }
        return lista;
    }

    flagList = riempi(flagList, 0);
    nameList = riempi(nameList, 1);

    options.push(nameList[n]);

    function riempiOptions() {
        for(let i = 0; i < 4; i++) {
            let n = nameList[Math.random() * 195];
            options.push(n);
        }
    }
</script>

<div class="container">
    <div class="flag">
        <Flag src={flagList[n]}></Flag>
    </div>
    <button class="option top left">
        <Flagname name={options[0]}></Flagname>
    </button>
    <button class="option top right">
        <Flagname name="test"></Flagname>
    </button>
    <button class="option left">
        <Flagname name="test"></Flagname>
    </button>
    <button class="option right">
        <Flagname name="test"></Flagname>
    </button>
</div>

<style>
    * {
        border: 2px solid yellow;
    }

    .container {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        padding-top: 5%;
    }

    .flag {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        align-self: flex-end;
        grid-column: 1 / 3;
    }

    .option {
        display: flex;
        width: 35%;
        height: 30%;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background: linear-gradient(135deg, #2c2c2c, #4f4f4f);
    }

    .top {
        align-self: flex-end;
        margin-bottom: 10%;
    }

    .left {
        justify-self: center;
        margin-left: 40%;
    }

    .right {
        margin-right: 40%;
    }
</style>