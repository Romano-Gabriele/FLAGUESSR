import { getDatabase, ref, child, get } from "firebase/database";
import { data } from "../stores/data";

let dbLen = 195;

export async function getFlagData() {
    let flags = [];
    const dbRef = ref(getDatabase());
    try {
        for(let i = 0; i < dbLen; i++) {
            const snapshot = await get(child(dbRef, `${i}/`));
            if(snapshot.exists()) {
              console.log(1);
              flags.push(snapshot.val());
            }
            else {
                console.error("Nessun dato trovato per questa bandiera");
            }
        }
    } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
    }

    data.set(flags);
};

/*export async function storeData() {
    data = await getFlagData();
  }*/

/*// Funzione per registrare un nuovo utente
    async function registerUser(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Utente registrato:', userCredential.user);
        } catch (error) {
            console.error(error.message);
        }
    };*/