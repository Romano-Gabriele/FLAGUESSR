<script>
    export let score;
</script>

<div class="container">
    <h2>You have lost!</h2>
    <h2>Your score: {score}</h2>
    <button>Home</button>
    <button>Retry</button>
</div>

<style>
    /** {
        border: 2px solid yellow;
    }*/

    .container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: 1fr 1fr;
        justify-content: center;
    }

    h2 {
        justify-self: center;
        align-self: center;
        color: blue;
        font-weight: 100px;
        grid-column: 1 / 3;
    }

    button {
        color: blue;
    }
</style>