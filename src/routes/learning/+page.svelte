<script>
    import { onMount } from "svelte";
    import Arrow from "../../components/arrow.svelte";
    import Flag from "../../components/flag.svelte";
    import Flagname from "../../components/flagname.svelte";
    import Taskbar from "../../components/taskbar.svelte";
    import { getDatabase, ref, child, get } from "firebase/database";
    import { initializeApp } from "firebase/app";
    import { firebaseConfig } from "../../lib/firebase";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const database = getDatabase(app);
    
    let flagUrl, name;
    let dbLen = 195;
    let ind = 0;
    let current = 2;

    onMount(() => getFlagData());

    // Funzione per prendere i dati di una bandiera
    export async function getFlagData() {
        const dbRef = ref(getDatabase());
        try {
            const snapshot = await get(child(dbRef, `${ind}/`));
            if(snapshot.exists()) {
                const data = snapshot.val();
                flagUrl = data.URL_ID;
                name = data.nation;
            }
            else {
                console.error("Nessun dato trovato per questa bandiera");
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

    function incrementa() {
        ind++;
        if(ind >= dbLen)
            ind = 0;
        getFlagData();
    };

    function decrementa() {
        ind--;
        if(ind < 0)
            ind = dbLen - 1;
        getFlagData();
    };
</script>

<div class="container">
    <div class="left">
        <Arrow direction="dir-left" direzione="left" handler={decrementa} />
    </div>
    <div class="flag">
        <Flag src={flagUrl} />
    </div>
    <div class="right">
        <Arrow direction="dir-right" handler={incrementa} />
    </div>
    <div class="flag-name">
        <Flagname {name} />
    </div>
</div>

<Taskbar bind:selection={current} />

<style>
    .container {
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: 0.25fr 1fr 0.25fr;
        padding-top: 10%;
    }

    .left {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        grid-column: 1 / 2;
    }

    .flag {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        grid-column: 2 / 3;
    }

    .right {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        grid-column: 3 / 4;
    }

    .flag-name {
        width: 30%;
        height: 40%;
        display: flex;
        justify-content: center;
        font-size: 20px;
        grid-row: 2 / 3;
        grid-column: 1 / 4;
        padding-top: 2%;
    }
</style>