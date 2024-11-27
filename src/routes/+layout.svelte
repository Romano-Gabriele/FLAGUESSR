<header>
    <h1>FLAGUESSR</h1>
</header>

<main>
    <slot />
</main>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(.container) {
        height: 100%;
        background: linear-gradient(135deg, #2c2c2c, #4f4f4f); /* gradiente scala di grigi */
    }

    :global(body) {
        width: 100vw;
        height: 100vh;
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

    header {
        height: 5vh;
        width: 100%;
    }

    main {
        height: 95vh;
        width: 100%;
        overflow: hidden;
    }
</style>