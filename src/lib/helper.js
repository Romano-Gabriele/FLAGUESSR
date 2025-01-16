import { getDatabase, ref, child, get } from "firebase/database";
import { db } from "../lib/firebase";

export async function getFlagData() {
    let dbLen = 195;
    let flags = [];
    const dbRef = ref(db);
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

    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('flags', JSON.stringify(flags));
    }
    } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
    }
};