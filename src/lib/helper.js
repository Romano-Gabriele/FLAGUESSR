import { getDatabase, ref, child, get } from "firebase/database";

let dbLen = 195;
export let data = [];

export async function getFlagData() {
    const dbRef = ref(getDatabase());
    try {
        for(let i = 0; i < dbLen; i++) {
            const snapshot = await get(child(dbRef, `${i}/`));
            if(snapshot.exists()) {
              console.log(1);
              data.push(snapshot.val());
            }
            else {
                console.error("Nessun dato trovato per questa bandiera");
            }
        }
    } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
    }
};

/*// Funzione per registrare un nuovo utente
    async function registerUser(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Utente registrato:', userCredential.user);
        } catch (error) {
            console.error(error.message);
        }
    };*/