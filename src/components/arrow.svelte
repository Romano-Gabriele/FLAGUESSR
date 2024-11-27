<script>
    export let direction;
    export let direzione;
</script>

<!-- <div class={direction}></div>-->

<button class="learn-more {direction} {direzione}">
    <span class="circle {direction}" aria-hidden="true">
        <span class="icon arrow {direction}"></span>
    </span>
</button>

<style>
button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    transition: transform 0.45s cubic-bezier(0.65, 0, 0.076, 1); /* Animazione di movimento del bottone */
}

button.learn-more {
    width: 7rem;
    height: auto;
}

.circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
    transition: width 0.45s cubic-bezier(0.65, 0, 0.076, 1); /* Animazione del cerchio */
}

.icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centra l'icona */
    background: #fff;
    width: 1.125rem; /* Impostiamo una larghezza fissa per l'icona */
    height: 0.125rem; /* Impostiamo un'altezza fissa per l'icona */
}

.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
    transform: translate(-50%, -50%); /* Centra la freccia */
}

.circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg); /* Freccia verso destra di default */
}

.left {
    display: flex;
    justify-content: flex-end;
}

button:hover {
    transform: translateX(1rem); /* Sposta il bottone in avanti (per 'dir-right') */
}

button:hover .circle {
    width: 100%; /* Espande il cerchio */
}

.dir-right:hover .arrow, .dir-right:hover .icon {
    transform: translateX(1.5rem); /* Sposta la freccia a destra */
}

.dir-left:hover .arrow, .dir-left:hover .icon {
    transform: translateX(-2.5rem); /* Sposta la freccia verso sinistra fino a fine bottone */
}

.dir-right .circle .icon.arrow::before {
    transform: rotate(45deg); /* Freccia verso destra */
}

.dir-left .circle .icon.arrow::before {
    transform: rotate(-135deg); /* Freccia verso sinistra */
}

.dir-right:hover {
    transform: translateX(1rem); /* Muove il bottone verso destra */
}

.dir-left:hover {
    transform: translateX(-1rem); /* Muove il bottone verso sinistra */
}
</style>

