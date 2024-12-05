<script>
    import { onMount } from "svelte";
    import { visible } from '../stores/style';   
    export let selection;

    onMount(() => {
            visible.set(true); // Imposta visibilità su true al montaggio
        });

</script>

<div class="taskbar {$visible ? 'slide-up' : ''}">
    <a href="../profile" class="taskbar-item {selection === 0 ? 'active' : ''}">Profilo</a>
    <a href="../home" class="taskbar-item {selection === 1 ? 'active' : ''}">Home</a>
    <a href="../learning" class="taskbar-item {selection === 2 ? 'active' : ''}">Learning</a>
</div>

<style>
    .taskbar {
        position: fixed;
        bottom: -100px; /* Posizione iniziale fuori dalla vista */
        width: 90%;
        left: 5%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #000000;
        box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
        padding: 10px 0;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        transition: transform 0.75s ease-in; /* Transizione per il movimento */
    }

    .slide-up {
        transform: translateY(-100px); /* Posizionamento finale visibile */
    }

    .taskbar-item {
        font-family: 'Roboto Slab', serif;
        font-size: 1rem;
        color: #f0f0f0;
        text-decoration: none;
        padding: 10px 20px;
        transition: all 0.3s ease-in-out;
    }

    .taskbar-item:hover {
        color: #ff37b2;
        transform: scale(1.1);
    }

    .taskbar-item.active {
        color: #ff37b2;
        font-weight: bold;
        border-bottom: 2px solid #ff37b2;
    }

    a {
        display: inline-block;
        padding: 15px 30px;
        border-radius: 20px;
        background: rgba(240, 240, 240, 0.1);
        backdrop-filter: blur(10px);
        transition: all 0.4s ease-in-out;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
    }

    a:hover {
        background: #f0f0f0;
        transform: scale(1.15);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }
</style>