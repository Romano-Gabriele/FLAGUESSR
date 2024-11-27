<script>
    import Arrow from "../../components/arrow.svelte";
    import Flag from "../../components/flag.svelte";
    import Taskbar from "../../components/taskbar.svelte";

    let current = 2;
</script>

<div class="container">
    <Arrow direction='dir-left' direzione='left' /> 
    <Flag src="https://www.worldometers.info/img/flags/al-flag.gif" />
    <Arrow direction='dir-right' />
</div>

<Taskbar bind:selection={current} />

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>