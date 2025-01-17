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
        background: radial-gradient(circle, #330000, #1a1a1a);        
    }
</style>
