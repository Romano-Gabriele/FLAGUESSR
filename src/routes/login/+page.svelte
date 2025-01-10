<script>
    import { signUp } from "../../stores/data";
    import Signup from "../../components/signup.svelte";
    import Login from "../../components/login.svelte";
</script>

{#if $signUp}
    <Signup />
{:else}
    <Login />
{/if}

