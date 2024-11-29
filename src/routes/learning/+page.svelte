<script>
    import { onMount } from "svelte";
    import Arrow from "../../components/arrow.svelte";
    import Flag from "../../components/flag.svelte";
    import Flagname from "../../components/flagname.svelte";
    import Taskbar from "../../components/taskbar.svelte";
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getDatabase, ref, child, get } from "firebase/database";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBCnzOJzpM0eg0gMHiTsyKHTg4qP61ClSA",
      authDomain: "test-bf5e4.firebaseapp.com",
      databaseURL: "https://test-bf5e4-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "test-bf5e4",
      storageBucket: "test-bf5e4.firebasestorage.app",
      messagingSenderId: "131268407638",
      appId: "1:131268407638:web:9a35aa84e8b546148fe6f7",
      measurementId: "G-36J40GW5P2"
    };
    
    let flagUrl, name;
    let ind = 0;
    let current = 2;

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    onMount(() => getFlagData());


    async function getFlagData() {
        const dbRef = ref(getDatabase());
        try {
            const snapshot = await get(child(dbRef, `${ind}/`));
            if(snapshot.exists()) {
                const data = snapshot.val();
                flagUrl = data.URL_ID;
                name = data.nation;
            }
            else {
                console.log(ind);
                console.error("Nessun dato trovato per questa bandiera");
            }
        } catch (error) {
            console.error("Errore nel recupero dei dati:", error);
        }
    };

    function incrementa() {
        ind++;
        getFlagData();
    };

    function decrementa() {
        ind--;
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