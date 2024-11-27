
<header>
    <h1>FLAGUESSR</h1>
</header>

<main>
    <slot />
</main>

<footer>
    <h3>footer</h3>
</footer>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
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
        height: 5%;
        width: 100%;
        border: 1px solid black;
    }

    main {
        height: 91.5%;
        width: 100%;
        border: 1px solid black;
    }
    
    footer {
        height: 3.5%;
        width: 100%;
        border: 1px solid black; 
    }
</style>