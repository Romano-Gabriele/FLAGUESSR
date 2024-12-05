<script>
    import { visible } from "../stores/style";
</script>

<header class="{$visible ? 'slide-down' : ''}">
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
        height: 5vh;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #000000;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        color: white;
        position: fixed;
        top: -100px; /* Posizione iniziale fuori dalla vista */
        transition: transform 0.75s ease-in-out;
    }

    main {
        height: 95vh;
        width: 100%;
        overflow: hidden;
        padding-top: 5vh; /* Per evitare sovrapposizione con l'header */
    }
</style>