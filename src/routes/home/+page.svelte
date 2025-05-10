<script>
    import Taskbar from "../../components/taskbar.svelte";
    import { visible } from '../../stores/style';
    import { base } from "$app/paths";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { room_request } from "../../stores/room";

    let version = "v1.0.2";

    onMount(() => {
        setTimeout(() => $visible = true, 250);
    });

    let current = 1;
    let home = true;
    let duel = false;
    let campaign = false;
    let room = false;
    let popup_text = '';
    let room_name = '';
    let room_code = '';

    function select() {
        home = false;
    }

    function select_duel() {
        duel = true;
    }

    function select_campaign() {
        campaign = true;
    }

    function select_room(mod) {
        room = true;
        if(mod == "crea") {
            popup_text = 'crea stanza';
            $room_request.action = 'create';
        }
        else {
            popup_text = 'unisciti ad una stanza';
            $room_request.action = 'join';
        }
    }

    function request() {
        $room_request.name = room_name;

        if ($room_request.action == 'join')
            $room_request.code = room_code;

        console.log("azione = ", $room_request.action);
        console.log("code = ", $room_request.code);
        goto(`${base}/room`);
    }
</script>

{#if home == true}
    <div class="container">
        <a class="button {$visible ? 'visible' : ''}" data-text="Awesome" on:click={select}>
            <span class="actual-text">&nbsp;Play&nbsp;&nbsp;Flaguessr&nbsp;</span>
            <span aria-hidden="true" class="hover-text">&nbsp;Play&nbsp;&nbsp;Flaguessr&nbsp;</span>
        </a>
    </div>
{:else}
    {#if duel == false && campaign == false}
        <div class="container r-gap">
            <div>
                <a href="{base}/game" class="button {$visible ? 'visible' : ''}" data-text="Awesome">
                    <span class="actual-text">&nbsp;Classic&nbsp;</span>
                    <span aria-hidden="true" class="hover-text">&nbsp;Classic&nbsp;</span>
                </a>
            </div>
            <div>
                <a class="button {$visible ? 'visible' : ''}" data-text="Awesome" on:click={select_duel}>
                    <span class="actual-text">&nbsp;Duel&nbsp;</span>
                    <span aria-hidden="true" class="hover-text">&nbsp;Duel&nbsp;</span>
                </a>
            </div>
            <div>
                <a class="button {$visible ? 'visible' : ''}" data-text="Awesome" on:click={select_campaign}>
                    <span class="actual-text">&nbsp;Campaign&nbsp;</span>
                    <span aria-hidden="true" class="hover-text">&nbsp;Campaign&nbsp;</span>
                </a>
            </div>
        </div>
    {:else if duel == true}
        <div class="container r-gap">
            <div>
                <a class="button {$visible ? 'visible' : ''}" data-text="Awesome" on:click={() => select_room("crea")}>
                    <span class="actual-text">&nbsp;Crea&nbsp;&nbsp;una&nbsp;&nbsp;stanza&nbsp;</span>
                    <span aria-hidden="true" class="hover-text">&nbsp;Crea&nbsp;&nbsp;una&nbsp;&nbsp;stanza&nbsp;</span>
                </a>
            </div>
            <div>
                <a class="button {$visible ? 'visible' : ''}" data-text="Awesome" on:click={() => select_room("unisciti")}>
                    <span class="actual-text">&nbsp;Unisciti&nbsp;&nbsp;ad&nbsp;&nbsp;una&nbsp;&nbsp;stanza&nbsp;</span>
                    <span aria-hidden="true" class="hover-text">&nbsp;Unisciti&nbsp;&nbsp;ad&nbsp;&nbsp;una&nbsp;&nbsp;stanza&nbsp;</span>
                </a>
            </div>
        </div>
        {#if room == true}
            <div class="popup-overlay">
                <div class="popup-container">
                    <div class="popup-content">
                        <h2>{popup_text}</h2>
                        <input type="text" placeholder="Inserisci nome stanza" class="popup-input" bind:value={room_name} />
                        {#if popup_text == "unisciti ad una stanza"}
                            <input type="text" placeholder="Inserisci codice stanza" class="popup-input" bind:value={room_code} />
                        {/if}
                        <div class="popup-buttons">
                            <button class="popup-button confirm" on:click={request}>Conferma</button>
                            <button class="popup-button cancel" on:click={() => room = false}>Annulla</button>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    {:else}
        <div class="container r-gap">
            <div>
                <a class="button {$visible ? 'visible' : ''}" data-text="Awesome">
                    <span class="actual-text">&nbsp;Mod1&nbsp;</span>
                    <span aria-hidden="true" class="hover-text">&nbsp;Mod1&nbsp;</span>
                </a>
            </div>
            <div>
                <a class="button {$visible ? 'visible' : ''}" data-text="Awesome">
                    <span class="actual-text">&nbsp;Mod2&nbsp;</span>
                    <span aria-hidden="true" class="hover-text">&nbsp;Mod2&nbsp;</span>
                </a>
            </div>
        </div>
    {/if}
{/if}

<Taskbar bind:selection={current} />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap'); /* Roboto Slab */

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    a {
        display: inline-block;
        padding: 15px 30px;
        border-radius: 20px;
        background: rgba(240, 240, 240, 0.1);
        backdrop-filter: blur(10px);
        transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
        opacity: 0; /* Inizialmente invisibile */
        transform: translateY(30px); /* Posizione iniziale */
    }

    a.visible {
        opacity: 1; /* Visibile quando la classe è attiva */
        transform: translate(0); /* Posizione finale */
    }

    a:hover {
        background: #f0f0f0;
        transform: scale(1.15);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }

    .button {
        margin: 0;
        height: auto;
        background: transparent;
        padding: 0;
        border: none;
        cursor: pointer;
    }

    .button {
        --border-right: 6px;
        --text-stroke-color: rgba(255,255,255,0.6);
        /* --animation-color: #13DB17; */
        --animation-color: #DB1317;
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
    
    .button:hover .hover-text {
        width: 100%;
        filter: drop-shadow(0 0 23px var(--animation-color));
    }

    .r-gap {
        row-gap: 5%;
    }

    /* Stili per il popup */
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .popup-container {
        width: 80%;
        max-width: 500px;
        background: rgba(30, 30, 30, 0.95);
        border: 2px solid var(--animation-color);
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 0 30px rgba(219, 19, 23, 0.6);
        animation: fadeIn 0.3s ease-in-out;
    }

    .popup-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .popup-content h2 {
        color: white;
        text-transform: uppercase;
        margin-bottom: 20px;
        text-align: center;
        font-family: "Arial";
        letter-spacing: 2px;
    }

    .popup-input {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        background: rgba(240, 240, 240, 0.1);
        border: 1px solid rgba(219, 19, 23, 0.5);
        border-radius: 5px;
        color: white;
        font-size: 1rem;
    }

    .popup-buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
    }

    .popup-button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .popup-button.confirm {
        background-color: var(--animation-color);
        color: white;
    }

    .popup-button.cancel {
        background-color: rgba(240, 240, 240, 0.2);
        color: white;
    }

    .popup-button:hover {
        transform: scale(1.05);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>