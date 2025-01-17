<script>
    import { sign_up } from "../../stores/auth";
    import Signup from "../../components/signup.svelte";
    import Login from "../../components/login.svelte";
</script>

<div class="bg">
    {#if $sign_up}
        <Signup />
    {:else}
        <Login />
    {/if}
</div>

<style>
    .bg {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1a1a1a, #330000);     
    }
</style>
