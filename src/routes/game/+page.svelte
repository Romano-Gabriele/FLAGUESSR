<script>
    import { onMount } from "svelte";
    import Flag from "../../components/flag.svelte";
    import Flagname from "../../components/flagname.svelte";

    let data;

    onMount(() => {
        data = JSON.parse(localStorage.getItem('flags'));
    })

    let flagList;
    let nameList;
    let options;
    let correctName;
    let score = 0;
    let n;

    game();

    function isCorrect(option) {
        let correct = option == correctName ? 1 : 0;
        if(correct) {
            score++;
            game(score);
        }
        else
            alert("game ends");
    }

    function game(score) {
        n = Math.trunc(Math.random() * 195);
        flagList = [];
        nameList = [];
        options = [];
        console.log(n);
        console.log("score = ", score);

        function riempi(lista, chiave) {
            let fill;
            for(let i = 0; i < data.length; i++) {
                if(chiave == 0)
                    fill = data[i].URL_ID;
                else
                    fill = data[i].nation;

                lista[i] = fill;
            }
            return lista;
        }

        flagList = riempi(flagList, 0);
        nameList = riempi(nameList, 1);

        correctName = nameList[n];
        options.push(correctName);

        function riempiOptions() {
            for(let i = 0; i < 3; i++) {
                let n = nameList[Math.trunc(Math.random() * 195)];
                options.push(n);
            }
        }

        riempiOptions();

        function shuffle(array) {
            let currentIndex = array.length;

            while (currentIndex != 0) {
                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
                }
            }

        shuffle(options);
    }
</script>

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