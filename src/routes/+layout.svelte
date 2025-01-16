<script>
    import { visible } from "../stores/style";
    import { user } from "../stores/auth";

    let loaded = false;

    $: {
      if ($user != undefined){
            loaded = true;
            console.log('CASE 1:', $user);
      } else {
            loaded = false;
            console.log('CASE 2:', $user);
      }
    };
</script>

<header class="{$visible ? 'slide-down' : ''}">
    <img src="logos/flaguessr-icon.png" alt="flaguessr_icon">
    <img src="logos/flaguessr_logo.png" alt="flaguessr_Logo">
</header>

{#if loaded}
    <main>
        <slot />
    </main>
{/if}

<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(.container) {
        height: 95vh;
        background: linear-gradient(135deg, #2c2c2c, #4f4f4f); /* gradiente scala di grigi */
    }

    :global(body) {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(135deg, #2c2c2c, #4f4f4f);
    }

    /* Barretta di scorrimento trasparente */
    :global(*::-webkit-scrollbar) {
        width: 12px;
        background: transparent; /* Rende il track di base invisibile */
    }

    :global(*::-webkit-scrollbar-track) {
        width: 0;
        height: 0;
    }

    :global(*::-webkit-scrollbar-thumb) {
        border-radius: 10px;
        border: 3px solid rgba(0, 0, 0, 0.2); /* Aggiunge spazio trasparente attorno al thumb */
    }

    :global(*::-webkit-scrollbar-thumb) {
        border-radius: 10px;
        border: 3px solid rgba(0, 0, 0, 0.2);
    }

    .slide-down {
        transform: translateY(100px); /* Posizione visibile */
    }

    header {
        height: 6.5vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        color: white;
        position: fixed;
        top: -100px; /* Posizione iniziale fuori dalla vista */
        transition: transform 0.75s ease-in-out;
        gap: 0.5%;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }

    header > * {
        height: 5vh;
    }

    main {
        height: 95vh;
        width: 100%;
        overflow: hidden;
        padding-top: 5vh; /* Per evitare sovrapposizione con l'header */
    }
</style>