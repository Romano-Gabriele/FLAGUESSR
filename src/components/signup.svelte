<script>
  import { auth } from "../lib/firebase";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { sign_up, visible } from "../stores/auth";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  // import { Eye, EyeOff } from "lucide-svelte";
  import { base } from "$app/paths";

  let email = "";
  let password = "";
  let confirmPassword = "";
  let error = "";
  let passwordVisible = false;

  onMount(() => {
    setTimeout(() => {
      $visible = true;
    }, 250);
  });

  const register = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      error = "Le password non corrispondono.";
      return;
    }
    if (!email.includes("@")) {
      error = "Inserisci un'email valida.";
      return;
    }
    if (password.length < 6) {
      error = "La password deve contenere almeno 6 caratteri.";
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      $sign_up = false;
      goto(`${base}/home`);
    } catch (e) {
      error = e.message;
    }
  };

  function toggleSignUp() {
    $sign_up = false;
  }

  const togglePasswordVisibility = () => {
    passwordVisible = !passwordVisible;
  };
</script>

<main>
  <form class="form {$visible ? 'visible' : ''}" on:submit={register}>
    <h1 class="form-title">Sign Up</h1>
    <p class="form-subtitle">Create your account to get started</p>

    <div class="input-group">
      <div class="flex-column">
        <label for="email">Email</label>
      </div>
      <div class="inputForm">
        <input
          type="email"
          class="input"
          placeholder="Enter your Email"
          bind:value={email}
        />
      </div>
    </div>

    <div class="input-group">
      <div class="flex-column">
        <label for="password">Password</label>
      </div>
      <div class="inputForm">
        <input
          class="input password-hidden"
          type="password"
          placeholder="Enter your Password"
          bind:value={password}
          style="display: {passwordVisible ? 'none' : 'block'}"
        />
        <input
          class="input password-visible"
          type="text"
          placeholder="Enter your Password"
          bind:value={password}
          style="display: {passwordVisible ? 'block' : 'none'}"
        />
        <button
          type="button"
          class="toggle-password"
          on:click={togglePasswordVisibility}
          tabindex="-1"
          aria-label="Toggle password visibility"
        >
          {#if passwordVisible}
            <!-- <Eye /> -->
          {:else}
            <!-- <EyeOff /> -->
          {/if}
        </button>
      </div>
    </div>

    <div class="input-group">
      <div class="flex-column">
        <label for="confirmPassword">Confirm Password</label>
      </div>
      <div class="inputForm">
        <input
          class="input password-hidden"
          type="password"
          placeholder="Re-enter your Password"
          bind:value={confirmPassword}
          style="display: {passwordVisible ? 'none' : 'block'}"
        />
        <input
          class="input password-visible"
          type="text"
          placeholder="Re-enter your Password"
          bind:value={confirmPassword}
          style="display: {passwordVisible ? 'block' : 'none'}"
        />
      </div>
    </div>

    {#if error}
      <p class="error">{error}</p>
    {/if}

    <button type="submit" class="btn">
      <span class="text">Sign Up</span>
    </button>

    <p class="p">
      Already have an account?
      <button class="span" on:click={toggleSignUp}>Sign In</button>
    </p>
  </form>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap");

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 40px;
    width: 450px;
    border-radius: 20px;
    font-family: "Roboto Slab", serif;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
    transition:
      opacity 0.8s ease-in-out,
      transform 0.8s ease-in-out;
    opacity: 0;
    transform: translateY(30px);
  }

  .form.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .flex-column > label {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    font-size: 1.1em;
    margin-bottom: 5px;
  }

  .inputForm {
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    transition: 0.3s ease-in-out;
    background: rgba(255, 255, 255, 0.05);
    position: relative;
  }

  .input {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 1em;
    padding: 0 40px 0 0;
  }

  .input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border-color: #db1317;
    box-shadow: 0 0 10px rgba(219, 19, 23, 0.3);
  }

  .password-hidden,
  .password-visible {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 40px 0 15px;
  }

  .toggle-password {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 55%;
    transform: translateY(-50%);
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  .toggle-password:hover {
    opacity: 0.8;
  }

  .btn {
    width: 100%;
    height: 50px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
    color: white;
    cursor: pointer;
    margin-top: 5%;
    transition: 0.3s ease-in-out;
  }

  .btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #db1317;
    transform: scale(1.02);
  }

  .btn > .text {
    font-weight: bold;
    font-size: large;
  }

  .p {
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9em;
    margin: 5px 0;
  }

  .span {
    color: #db1317;
    border: 0;
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .span:hover {
    color: #ff1f24;
  }

  .error {
    color: #db1317;
    text-align: center;
    margin-top: 10px;
    font-size: 0.9em;
    text-shadow: 0 0 10px rgba(219, 19, 23, 0.3);
  }

  .form-title {
    font-size: 1.8em;
    color: white;
    text-align: center;
    margin-bottom: 10px;
  }

  .form-subtitle {
    font-size: 1em;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin-bottom: 20px;
  }

  .input-group {
    margin-bottom: 15px;
  }
</style>
