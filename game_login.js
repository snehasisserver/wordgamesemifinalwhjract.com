function addUser(){
    player1_name = document.getElementById("username1").value;
    player2_name = document.getElementById("username2").value;

    localStorage.setItem("player1_username",player1_name);
    localStorage.setItem("player2_username",player2_name);

    window.location="game_page.html";
}