<script>
    import Taskbar from "../../components/taskbar.svelte";
    
    let current = 0;
    let username = "Username";
    let gamesPlayed = 42;
    let wins = 27;
    let totalScore = 1570;
    let src = "https://via.placeholder.com/150"
</script>

<div class="container">
    <div class="profile-container">
        <div class="profile-header">
            <div class="avatar">
                <img {src} alt="User Avatar">
            </div>
            <h1 class="username">{username}</h1>
        </div>
        <div class="profile-stats">
            <div class="stat">
                <h2>Partite Giocate</h2>
                <p>{gamesPlayed}</p>
            </div>
            <div class="stat">
                <h2>Vittorie</h2>
                <p>{wins}</p>
            </div>
            <div class="stat">
                <h2>Punteggio Totale</h2>
                <p>{totalScore}</p>
            </div>
        </div>
        <div class="profile-footer">
            <a href="/homepage" class="btn">cambia account</a>
        </div>
    </div>


    <Taskbar bind:selection={current} />
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .profile-container {
        width: 50%;
        height: 70%;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 20px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        padding: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .profile-header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .avatar img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border-bottom: 5px solid #DD1317;
        border-right: 5px solid #DD1317;
        border-left: 5px solid #DD1317;
        border-top: 0 solid #DD1317;
        box-shadow: 0 0 10px #DD1317;
    }

    .username {
        margin-top: 15px;
        font-size: 2rem;
        color: #DD1317;
    }

    .profile-stats {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .stat {
        background: rgba(240, 240, 240, 0.1);
        border-radius: 15px;
        padding: 15px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .stat h2 {
        font-size: 1.2rem;
        margin-bottom: 10px;
        color: #DD1317;
    }

    .stat p {
        font-size: 1.5rem;
        margin: 0;
    }

    .profile-footer {
        margin-top: 20px;
    }

    .btn {
        display: inline-block;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: bold;
        color: #f0f0f0;
        text-decoration: none;
        border: 2px solid #DD1317;
        border-radius: 50px;
        background: rgba(240, 240, 240, 0.1);
        transition: all 0.3s ease-in-out;
    }

    .btn:hover {
        background: #DD1317;
        color: #2c2c2c;
        box-shadow: 0 6px 10px rgba(255, 55, 55, 0.5);
    }
</style>
