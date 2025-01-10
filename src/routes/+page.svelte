<script>
  import { getFlagData } from "../lib/helper";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(async () => {
    await getFlagData();
    goto("/login");
  });
</script>

<div class="container">
  <img src="logos/flaguessr_logo.png" alt="Flaguessr Logo" class="logo" />
  <div class="loader">
    <div class="intern"></div>
    <div class="external-shadow">
      <div class="central"></div>
    </div>
  </div>
</div>

<style>
  .container {
    position: relative;
    top: -5vh;
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1a1a1a, #330000);
    color: white;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
  }

  .logo {
    margin-bottom: 1em;
    filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.7));
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    scale: 0.8;
  }

  .central {
    width: 10em;
    height: 10em;
    border-radius: 50%;
    background: radial-gradient(circle, #330000, #1a1a1a);
    box-shadow:
      0.6em 1.2em 2em rgba(221, 19, 23, 0.8),
      -0.6em 0.6em 2em rgba(255, 0, 0, 0.6),
      0.6em -0.6em 2em rgba(255, 50, 50, 0.5);
    position: relative;
  }

  .external-shadow {
    width: 12em;
    height: 12em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    box-shadow:
      0 0 2em rgba(255, 50, 50, 0.5),
      inset 0 0 1em rgba(255, 0, 0, 0.8);
    animation: rotate 2s linear infinite;
  }

  .intern {
    position: absolute;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    z-index: 1000;
  }

  .intern::before {
    content: "Loading...";
    color: white;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
