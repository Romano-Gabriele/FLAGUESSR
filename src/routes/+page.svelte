<script>
    import { goto } from '$app/navigation';
    import { getDatabase, ref, child, get } from "firebase/database";
    import { initializeApp } from "firebase/app";
    import { firebaseConfig } from "../lib/firebase";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const database = getDatabase(app);

    let dbLen = 195;
    let totList = [];

    async function getFlagData() {
        const dbRef = ref(getDatabase());
        try {
            for(let i = 0; i < dbLen; i++) {
                const snapshot = await get(child(dbRef, `${i}/nation`));
                if(snapshot.exists()) {
                    totList.push(snapshot.val());
                }
                else {
                    console.error("Nessun dato trovato per questa bandiera");
                }
            }
        } catch (error) {
            console.error("Errore nel recupero dei dati:", error);
        }

        console.log(totList);
    };

    let loaded = () => {
        goto('/home');
    };
</script>

<div class="loader" on:animationend={loaded}></div>

<style>
    .loader {
      display: block;
      position: relative;
      height: 32px;
      width: 200px;
      background: #fff;
      border: 2px solid #fff;
      color: rgb(223, 60, 60);
      overflow: hidden;
    }

    .loader::before {
      content: '';
      background: rgb(223, 60, 60);
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      animation: loading_302 19s linear forwards;
    }

    .loader:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 18px;
      line-height: 32px;
      color: rgb(0,255,255);
      mix-blend-mode: difference;
      animation: percentage_302 19s linear forwards;
    }

    @keyframes loading_302 {
      0% {
        width: 0
      }

      100% {
        width: 100%
      }
    }

    @keyframes percentage_302 {
      0% {
        content: "0%"
      }

      5% {
        content: "5%"
      }

      10% {
        content: "10%"
      }

      20% {
        content: "20%"
      }

      30% {
        content: "30%"
      }

      40% {
        content: "40%"
      }

      50% {
        content: "50%"
      }

      60% {
        content: "60%"
      }

      70% {
        content: "70%"
      }

      80% {
        content: "80%"
      }

      90% {
        content: "90%"
      }

      95% {
        content: "95%"
      }

      96% {
        content: "96%"
      }

      97% {
        content: "97%"
      }

      98% {
        content: "98%"
      }

      99% {
        content: "99%"
      }

      100% {
        content: "100%"
      }
    }
</style>