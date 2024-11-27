<script>
    import Arrow from "../../components/arrow.svelte";
    import Flag from "../../components/flag.svelte";
</script>

<div>
    <Arrow direction='dir-left' direzione='left' /> 
    <Flag src="https://www.worldometers.info/img/flags/al-flag.gif" />
    <Arrow direction='dir-right' />
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>