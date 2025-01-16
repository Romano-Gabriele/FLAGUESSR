import { get, ref, update, child } from 'firebase/database';
import { db } from '../lib/firebase';

//'users/53BdModGCwex0cSwcs8dJM997AQ2/role': 'ADMIN', // role structure example

export let updateData = async (uid, field, value) => {
  if (!uid || !field) {
    console.error('UID o campo non forniti.');
    return;
  }

  let updates = 
    {
        [`users/${uid}/${field}`]: value
    };

  await update(ref(db), updates)
    .then(() => {
      console.log('Dati aggiunti o aggiornati con successo');
    })
    .catch((e) => {
      if (e.code === 'PERMISSION_DENIED') {
        console.error('Permessi insufficienti per aggiornare i dati.');
      } else {
        console.error('Errore nel assegnazione del ruolo:', e);
      }
    });
}

export async function getUserData(uid) {
  let userData = [];
  try {
          const snapshot = await get(ref(db, `users/${uid}`));
          if(snapshot.exists()) {
              userData = snapshot.val();
          }
          else {
              console.error("Nessun dato trovato per questo utente");
          }
  } catch (error) {
      console.error("Errore nel recupero dei dati:", error);
  }

  return userData;
};