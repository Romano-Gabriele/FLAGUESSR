<script>
    import { sign_up } from "../../stores/auth";
    import Signup from "../../components/signup.svelte";
    import Login from "../../components/login.svelte";
</script>

{#if $sign_up}
    <Signup />
{:else}
    <Login />
{/if}

