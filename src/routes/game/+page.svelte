<script>
    import { onMount } from "svelte";
    import Flag from "../../components/flag.svelte";
    import Flagname from "../../components/flagname.svelte";
    import Popup from "../../components/popup.svelte";

    let data = [];
    let end = 0;

    onMount(() => {
        const storedData = sessionStorage.getItem('flags');
        if (storedData) {
            data = JSON.parse(storedData);
            game();
        }
    });

    let flagList = [];
    let nameList = [];
    let options = [];
    let correctName;
    let score = 0;
    let n;

    function isCorrect(option) {
        let correct = option == correctName ? 1 : 0;
        if (correct) {
            score++;
            game();
        } else {
            end = 1;
            console.log("Game over! Score:", score);
            console.log(end);
        }
    }

    function game() {
        n = Math.trunc(Math.random() * 195);
        flagList = [];
        nameList = [];
        options = [];
        console.log(n);
        console.log("score = ", score);

        function riempi(lista, chiave) {
            let fill;
            for (let i = 0; i < data.length; i++) {
                if (chiave == 0) {
                    fill = data[i].URL_ID;
                } else {
                    fill = data[i].nation;
                }
                lista[i] = fill;
            }
            return lista;
        }

        flagList = riempi(flagList, 0);
        nameList = riempi(nameList, 1);
        correctName = nameList[n];
        options = [correctName, ...nameList.filter((name, index) => index !== n).sort(() => 0.5 - Math.random()).slice(0, 3)];
        options = options.sort(() => 0.5 - Math.random());
    }
</script>

<div class="score-container">
    <div class="score">Score: {score}</div>
</div>

<div class="container">
    <div class="flag">
        <Flag src={flagList[n]}></Flag>
    </div>
    <button on:click={() => isCorrect(options[0])} class="option top left">
        <Flagname name={options[0]}></Flagname>
    </button>
    <button on:click={() => isCorrect(options[1])} class="option top right">
        <Flagname name={options[1]}></Flagname>
    </button>
    <button on:click={() => isCorrect(options[2])} class="option left">
        <Flagname name={options[2]}></Flagname>
    </button>
    <button on:click={() => isCorrect(options[3])} class="option right">
        <Flagname name={options[3]}></Flagname>
    </button>
</div>

{#if end == 1}
    <div class="popup">
        <Popup {score}></Popup>
    </div>
{/if}

<style>
    .score-container {
        position: fixed;
        top: 10%;
        right: 7.5%;
        text-align: center;
        margin-bottom: 20px;
        padding: 0.5%;
        background: linear-gradient(135deg, #1a1a1a, #330000);
        border-radius: 0.75em;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .score {
        font-size: 1.5em;
        font-weight: bold;
        color: white;
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
        filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.7));
    }

    .option {
        display: flex;
        width: 35%;
        height: 30%;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background: linear-gradient(135deg, #330000, #1a1a1a);
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .option:hover {
        transform: scale(1.05);
        box-shadow: 
            0.6em 1.2em 2em rgba(221, 19, 23, 0.8),
            -0.6em 0.6em 2em rgba(255, 0, 0, 0.6),
            0.6em -0.6em 2em rgba(255, 50, 50, 0.5);
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

    .popup {
        width: 70%;
        height: 50%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
</style>
