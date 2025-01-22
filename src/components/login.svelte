<script>
  import { auth, googleProvider } from "../lib/firebase";
  import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
  import { sign_up, visible } from "../stores/auth";
  import { goto } from "$app/navigation";
  import { user } from "../stores/auth";
  import { updateUser } from "../lib/helper";
  import { getUserData, updateData } from "../lib/dbFuncs";
  import { onMount } from "svelte";
  import { checkUser } from "../lib/helper";
  import { base } from "$app/paths";

  let email = "";
  let password = "";
  let error = "";

  onMount(() => {
    setTimeout(() => {
      $visible = true;
    }, 250);
  });

  function toggleSignUp() {
    $sign_up = true;
  }

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      goto(`${base}/home`);
    } catch (err) {
      error = err.message;
    }
  };

  const signInWith = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      await checkUser($user.uid, $user.email, "GoogleAuth");
      goto(`${base}/home`);
    } catch (e) {
      error = e.message;
    }
  };
</script>

<main>
  <form class="form {$visible ? 'visible' : ''}" on:submit={login}>
    <h1 class="title">Welcome Back</h1>
    <p class="subtitle">Sign in to continue</p>

    <div class="input-group">
      <label for="email">Email</label>
      <input type="email" class="input" placeholder="Enter your Email" bind:value={email} />
    </div>

    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" class="input" placeholder="Enter your Password" bind:value={password} />
    </div>

    <button type="submit" class="btn submit-btn">
      <span class="text">Sign in</span>
    </button>

    <div class="separator">
      <span class="line"></span>
      <span class="or">Or</span>
      <span class="line"></span>
    </div>

    <button type="button" class="btn google" on:click={async () => await signInWith(googleProvider)}>
      <svg version="1.1" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path style="fill:#FBBB00;" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
        <path style="fill:#518EF8;" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
        <path style="fill:#28B446;" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
        <path style="fill:#F14336;" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z"></path>
      </svg>
      <span class="text">Google</span>
    </button>

    <p class="signup">Don't have an account? <button class="link" on:click={toggleSignUp}>Sign Up</button></p>

    {#if error}
      <p class="error">{error}</p>
    {/if}
  </form>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 40px;
    width: 400px;
    border-radius: 20px;
    font-family: "Roboto Slab", serif;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
    opacity: 0;
    transform: translateY(30px);
  }

  .form.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .title {
    text-align: center;
    font-size: 1.8em;
    color: #fff;
  }

  .subtitle {
    text-align: center;
    font-size: 1em;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 20px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  label {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    font-size: 1.1em;
  }

  .input {
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    height: 50px;
    padding-left: 15px;
    background: rgba(255, 255, 255, 0.05);
    color: white;
    font-size: 1em;
    transition: 0.3s ease-in-out;
  }

  .input:focus {
    outline: none;
    border-color: #DB1317;
    box-shadow: 0 0 10px rgba(219, 19, 23, 0.3);
  }

  .separator {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.7);
  }

  .separator .line {
    flex: 1;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .or {
    font-size: 0.9em;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 50px;
    border-radius: 15px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #DB1317;
    transform: scale(1.02);
  }

  .google svg {
    flex-shrink: 0;
  }

  .signup {
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9em;
  }

  .link {
    color: #DB1317;
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .link:hover {
    color: #ff1f24;
  }

  .error {
    color: red;
    text-align: center;
  }
</style>
