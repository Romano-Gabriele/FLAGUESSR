<script>
    import { get, ref, update, child } from "firebase/database";
    import { db } from "../../lib/firebase";
    import { user } from "../../stores/auth";
    import { room_request } from "../../stores/room";

    let rand_room_id = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

    async function create_room(room_name, room_id) {
        if (!room_name || !room_id) {
            console.error("nome o id non forniti.");
            return;
        }

        let username = $user.displayName;
        let src = $user.photoURL;

        let updates = {
            [`rooms/${room_id}/${username}/score`]: 0,
        };

        await update(ref(db), updates)
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

    async function join_room(room_name, room_id) {
        if (!room_name || !room_id) {
            console.error("nome o id non forniti.");
            return;
        }

        let username = $user.displayName;
        let src = $user.photoURL;

        console.log(await roomExists(room_id));
        if (await roomExists(room_id)) {
            let updates = {
                [`rooms/${room_id}/${username}/score`]: 0,
            };

            await update(ref(db), updates)
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
</script>
