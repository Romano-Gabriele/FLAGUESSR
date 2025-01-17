<script>
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    export let score;
</script>

<div class="cont">
    <h2>You have lost!</h2>
    <h2>Your score: {score}</h2>
    <div class="buttons">
        <button
            on:click={() => {
                score = 0;
                // Navigazione alla home
                goto(`${base}/home`);
            }}>Home</button>
        <button
            on:click={() => {
                score = 0;
                window.location.reload();
            }}>Retry</button>
    </div>
</div>

<style>
    .cont {
        width: 45%; /* Dimensione più grande per migliorare la visibilità */
        height: 60%; /* Ridotto per un aspetto più equilibrato */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly; /* Allineamento più uniforme */
        align-items: center;
        position: absolute;
        background-color: #1c1c1c; /* Colore di sfondo più scuro */
        border-radius: 12px; /* Angoli più arrotondati per un look più morbido */
        gap: 20px; /* Spaziatura tra gli elementi */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px; /* Padding per evitare che il contenuto si attacchi ai bordi */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Ombra più morbida */
    }

    h2 {
        color: white;
        font-weight: 600;
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 15px; /* Spazio tra il titolo e il punteggio */
        text-shadow: 0 0 5px rgba(255, 0, 0, 0.7); /* Ombra per far risaltare il testo */
    }

    .buttons {
        display: flex;
        width: 100%;
        height: 10%;
        justify-content: space-evenly;
        gap: 15px; /* Distanza tra i bottoni */
    }

    button {
        display: flex;
        width: 35%;
        height: 100%;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background: linear-gradient(135deg, #330000, #1a1a1a);
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        transition:
            transform 0.3s,
            box-shadow 0.3s;
    }

    button:hover {
        transform: scale(1.05);
        box-shadow:
            0.6em 1.2em 3em rgba(221, 19, 23, 0.8),
            -0.6em 0.6em 2.5em rgba(255, 0, 0, 0.5),
            0.6em -0.6em 3em rgba(255, 50, 50, 0.5);
    }

    button:focus {
        outline: none;
        box-shadow: 0 0 10px rgba(221, 19, 23, 0.9); /* Aggiungi l'effetto di focus */
    }
</style>