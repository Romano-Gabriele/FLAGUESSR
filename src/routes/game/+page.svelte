<script>
    import Flag from "../../components/flag.svelte";
    import Flagname from "../../components/flagname.svelte";
</script>

<div class="container">
    <div class="flag">
        <Flag></Flag>
    </div>
    <button class="option top left">
        <Flagname name="test"></Flagname>
    </button>
    <div class="option top right">
        <Flagname name="test"></Flagname>
    </div>
    <div class="option left">
        <Flagname name="test"></Flagname>
    </div>
    <div class="option right">
        <Flagname name="test"></Flagname>
    </div>
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