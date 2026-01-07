document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", () => {
        window.location.href = "game.php";
    });
})