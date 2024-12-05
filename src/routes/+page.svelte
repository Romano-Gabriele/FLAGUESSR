<script>
    import { initializeApp } from "firebase/app";
    import { firebaseConfig } from "../lib/firebase";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
    import { getDatabase } from 'firebase/database';
    import { getFlagData } from "../lib/helper";

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const database = getDatabase(app);

    getFlagData();

    let loaded = () => {
        window.location.href = '/home';
    };
</script>

<div class="container">
  <div class="loader">
    <div class="intern" on:animationend={loaded}></div>
    <div class="external-shadow">
      <div class="central"></div>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: not-allowed;
    scale: 0.7;
  }

  .central {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 10em;
    height: 10em;
    border-radius: 50%;
    box-shadow:
      0.5em 1em 1em blueviolet,
      -0.5em 0.5em 1em blue,
      0.5em -0.5em 1em purple,
      -0.5em -0.5em 1em cyan;
  }

  .external-shadow {
    width: 10em;
    height: 10em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow:
      0.5em 0.5em 3em blueviolet,
      -0.5em 0.5em 3em blue,
      0.5em -0.5em 3em purple,
      -0.5em -0.5em 3em cyan;
    z-index: 999;
    animation: rotate 3s linear infinite;
    background-color: #212121;
  }

  .intern {
    position: absolute;
    color: white;
    font-size: x-large;
    font-weight: bold;
    z-index: 9999;
  }

  .intern::before {
    content: "100%";
    animation: percent 10s ease-in-out;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes percent {
    0% { content: "0%"; }
    1% { content: "1%"; }
    2% { content: "2%"; }
    3% { content: "3%"; }
    4% { content: "4%"; }
    5% { content: "5%"; }
    6% { content: "6%"; }
    7% { content: "7%"; }
    8% { content: "8%"; }
    9% { content: "9%"; }
    10% { content: "10%"; }
    11% { content: "11%"; }
    12% { content: "12%"; }
    13% { content: "13%"; }
    14% { content: "14%"; }
    15% { content: "15%"; }
    16% { content: "16%"; }
    17% { content: "17%"; }
    18% { content: "18%"; }
    19% { content: "19%"; }
    20% { content: "20%"; }
    21% { content: "21%"; }
    22% { content: "22%"; }
    23% { content: "23%"; }
    24% { content: "24%"; }
    25% { content: "25%"; }
    26% { content: "26%"; }
    27% { content: "27%"; }
    28% { content: "28%"; }
    29% { content: "29%"; }
    30% { content: "30%"; }
    31% { content: "31%"; }
    32% { content: "32%"; }
    33% { content: "33%"; }
    34% { content: "34%"; }
    35% { content: "35%"; }
    36% { content: "36%"; }
    37% { content: "37%"; }
    38% { content: "38%"; }
    39% { content: "39%"; }
    40% { content: "40%"; }
    41% { content: "41%"; }
    42% { content: "42%"; }
    43% { content: "43%"; }
    44% { content: "44%"; }
    45% { content: "45%"; }
    46% { content: "46%"; }
    47% { content: "47%"; }
    48% { content: "48%"; }
    49% { content: "49%"; }
    50% { content: "50%"; }
    51% { content: "51%"; }
    52% { content: "52%"; }
    53% { content: "53%"; }
    54% { content: "54%"; }
    55% { content: "55%"; }
    56% { content: "56%"; }
    57% { content: "57%"; }
    58% { content: "58%"; }
    59% { content: "59%"; }
    60% { content: "60%"; }
    61% { content: "61%"; }
    62% { content: "62%"; }
    63% { content: "63%"; }
    64% { content: "64%"; }
    65% { content: "65%"; }
    66% { content: "66%"; }
    67% { content: "67%"; }
    68% { content: "68%"; }
    69% { content: "69%"; }
    70% { content: "70%"; }
    71% { content: "71%"; }
    72% { content: "72%"; }
    73% { content: "73%"; }
    74% { content: "74%"; }
    75% { content: "75%"; }
    76% { content: "76%"; }
    77% { content: "77%"; }
    78% { content: "78%"; }
    79% { content: "79%"; }
    80% { content: "80%"; }
    81% { content: "81%"; }
    82% { content: "82%"; }
    83% { content: "83%"; }
    84% { content: "84%"; }
    85% { content: "85%"; }
    86% { content: "86%"; }
    87% { content: "87%"; }
    88% { content: "88%"; }
    89% { content: "89%"; }
    90% { content: "90%"; }
    91% { content: "91%"; }
    92% { content: "92%"; }
    93% { content: "93%"; }
    94% { content: "94%"; }
    95% { content: "95%"; }
    96% { content: "96%"; }
    97% { content: "97%"; }
    98% { content: "98%"; }
    99% { content: "99%"; }
    100% { content: "100%"; }
  }
</style>