import { getDatabase, ref, child, get } from "firebase/database";
import { db } from "../lib/firebase";
import { getUserData } from "./dbFuncs";
import { updateData } from "./dbFuncs";
import { user } from "../stores/auth";

export async function getFlagData() {
    let dbLen = 195;
    let flags = [];
    const dbRef = ref(db);
    try {
        for(let i = 0; i < dbLen; i++) {
            const snapshot = await get(child(dbRef, `flags/${i}/`));
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

export async function updateUser(uid) {
    let userData = await getUserData(uid);
    user.update((current) => ({ ...current, ...userData }));
}

// controlla se l'utente esiste, se non esiste lo crea
export async function checkUser(uid, email, password) {
    let exists = await getUserData(uid);
      if(!exists) {
        await updateData(uid, "email", email);
        await updateData(uid, "password", password);
        await updateData(uid, "played", 0);
        await updateData(uid, "last", 0);
        await updateData(uid, "best", 0);
      }
      await updateUser(uid);
}