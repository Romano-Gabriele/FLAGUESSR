<div class="container">
    <a href="./learning" class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;Play&nbsp;&nbsp;Flaguessr&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;Play&nbsp;&nbsp;Flaguessr&nbsp;</span>
    </a>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap'); /* Importa font Roboto Slab */

    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #2c2c2c, #4f4f4f); /* gradiente scala di grigi */
    }

    a {
        display: inline-block;
        padding: 15px 30px; /* dimensioni più grandi */
        border-radius: 20px; /* bordi più arrotondati */
        background: rgba(240, 240, 240, 0.1); /* sfondo semi-trasparente */
        backdrop-filter: blur(10px);
        transition: all 0.4s ease-in-out;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3); /* ombra del bottone */
    }

    a:hover {
        background: #f0f0f0; /* sfondo bianco */
        transform: scale(1.15);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4); /* ombra più accentuata */
    }
    /* === removing default button style ===*/
    .button {
        margin: 0;
        height: auto;
        background: transparent;
        padding: 0;
        border: none;
        cursor: pointer;
    }

    /* button styling */
    .button {
        --border-right: 6px;
        --text-stroke-color: rgba(255,255,255,0.6);
        --animation-color: #ff37b2;
        --fs-size: 3em;
        letter-spacing: 3px;
        text-decoration: none;
        font-size: var(--fs-size);
        font-family: "Arial";
        position: relative;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 1px var(--text-stroke-color);
    }
    /* this is the text, when you hover on button */
    .hover-text {
        position: absolute;
        box-sizing: border-box;
        content: attr(data-text);
        color: var(--animation-color);
        width: 0%;
        inset: 0;
        border-right: var(--border-right) solid var(--animation-color);
        overflow: hidden;
        transition: 0.5s;
        -webkit-text-stroke: 1px var(--animation-color);
    }
    /* hover */
    .button:hover .hover-text {
        width: 100%;
        filter: drop-shadow(0 0 23px var(--animation-color))
    }
</style>
