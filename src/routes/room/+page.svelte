<script>
    import { get, ref, update, child } from "firebase/database";
    import { onDestroy } from 'svelte';
    import { db } from "../../lib/firebase";
    import { user } from "../../stores/auth";
    import { room_request } from "../../stores/room";

    let rand_room_id = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    let ready = false;
    let ready_text = 'Ready';

    let username = $user.displayName;
    let src = $user.photoURL;

    async function create_room(room_name, room_id) {
        if (!room_name || !room_id) {
            console.error("nome o id non forniti.");
            return;
        }

        $room_request.code = room_id;

        let updates = {
            [`rooms/${room_id}/name`] : room_name,
            [`rooms/${room_id}/players/${username}/score`]: 0,
            [`rooms/${room_id}/players/${username}/status`]: false,
        };

        await updateDB(updates);

        // await update(ref(db), updates)
        //     .then(() => {
        //         console.log("Dati aggiunti o aggiornati con successo");
        //     })
        //     .catch((e) => {
        //         if (e.code === "PERMISSION_DENIED") {
        //             console.error(
        //                 "Permessi insufficienti per aggiornare i dati.",
        //             );
        //         } else {
        //             console.error("Errore nel assegnazione del ruolo:", e);
        //         }
        //     });
    }

    async function join_room(room_name, room_id) {
        if (!room_name || !room_id) {
            console.error("nome o id non forniti.");
            return;
        }

        // $room_request.code = room_id;

        console.log(await roomExists(room_id));
        if (await roomExists(room_id)) {
            let updates = {
                [`rooms/${room_id}/players/${username}/score`]: 0,
                [`rooms/${room_id}/players/${username}/status`]: false,
            };

            await updateDB(updates);
        }
    }

    if ($room_request.action == "create")
        create_room($room_request.name, rand_room_id);
    else
        join_room($room_request.name, $room_request.code);

    async function roomExists(room_id) {
        try {
            const snapshot = await get(ref(db, `rooms/${room_id}`));
            if (snapshot.exists()) {
                return true;
            } else {
                console.error("Stanza non trovata");
                return false;
            }
        } catch (error) {
            console.error("Errore nel recupero dei dati:", error);
        }
    }

    async function updateStatus() {
        let updates = {
            [`rooms/${$room_request.code}/players/${username}/status`]: ready,
        };

        await updateDB(updates);
    }

    function updateDB(updates) {
        update(ref(db), updates)
            .then(() => {
                console.log("Dati aggiunti o aggiornati con successo");
            })
            .catch((e) => {
                if (e.code === "PERMISSION_DENIED") {
                    console.error(
                        "Permessi insufficienti per aggiornare i dati.",
                    );
                } else {
                    console.error("Errore nel assegnazione del ruolo:", e);
                }
            });
    }

    async function check_ready() {
        let check = false;
        let statuses = [];
        try {
            const snapshot = await get(ref(db, `rooms/${$room_request.code}/players`));
            if (snapshot.exists()) {
                let players = snapshot.val();
                for(let player in players)
                    statuses.push(players[player].status);
                check = statuses.every((stat) => stat == true);
            } else {
                console.error("Nessun dato trovato per questo utente");
                userData = null;
            }
        } catch (error) {
            console.error("Errore nel recupero dei dati:", error);
        }

        return check;
    }

    // export async function getUserData(uid) {
    //     let userData = [];
    //     try {
    //         const snapshot = await get(ref(db, `users/${uid}`));
    //         if (snapshot.exists()) {
    //             userData = snapshot.val();
    //         } else {
    //             console.error("Nessun dato trovato per questo utente");
    //             userData = null;
    //         }
    //     } catch (error) {
    //         console.error("Errore nel recupero dei dati:", error);
    //     }

    //     return userData;
    // }

    async function change_ready_status() {
        ready = !ready;
        await updateStatus();

        // if(ready)
        //     if(await check_ready());
        //         game();
    }

    $: ready_text = ready ? "Not ready" : "Ready";

    let countdown = 3;
    let showCountdown = false;
    let countdownInterval;

    function startCountdown() {
        countdown = 3;
        showCountdown = true;
        
        countdownInterval = setInterval(() => {
            countdown--;
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                // Start the game here
                alert("Game starting now!");
                // You would typically call a function here to start the game
            }
        }, 1000);
    }

    function stopCountdown() {
        clearInterval(countdownInterval);
        showCountdown = false;
    }
    
    onDestroy(() => {
        if (countdownInterval) clearInterval(countdownInterval);
    });

    function game() {
        startCountdown();
    }
</script>

<div class="container">
    <h2>ROOM CODE: {$room_request.code}</h2>
    <div class="game-controls">
        <button on:click={change_ready_status}>{ready_text}</button>
        {#if showCountdown}
            <div class="countdown">
                <p>La partita inizierà tra: <span class="count">{countdown}</span></p>
            </div>
        {/if}
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .game-controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 4px;
        background-color: #4CAF50;
        color: white;
        border: none;
    }
    
    button:hover {
        background-color: #45a049;
    }
    
    .countdown {
        margin-top: 20px;
        font-size: 18px;
        text-align: center;
    }
    
    .count {
        font-size: 24px;
        font-weight: bold;
        vertical-align: -8%;
        color: #FF5722;
    }
</style>