var soundPlayer1 = new Audio();
var soundPlayer2 = new Audio();
var soundPlayer3 = new Audio();
var soundPlayer4 = new Audio();
var soundPlayer5 = new Audio();
var soundPlayer6 = new Audio();
var soundPlayer7 = new Audio();
var soundPlayer = new Audio();
var randomTemp = 1;
var increase = 0;

function playLowerNote() {
    if(increase%7==0){
        soundPlayer=soundPlayer1;
    } else if(increase%7==1){
        soundPlayer=soundPlayer2;
    } else if(increase%7==2){
        soundPlayer=soundPlayer3;
    } else if(increase%7==3){
        soundPlayer=soundPlayer4;
    } else if(increase%7==4){
        soundPlayer=soundPlayer5;
    } else if(increase%7==5){
        soundPlayer=soundPlayer6;
    } else if(increase%7==6){
        soundPlayer=soundPlayer7;
    }
    soundPlayer.src = "kirby.mp3";
    soundPlayer.mozPreservesPitch = false;
    randomTemp = Math.random()*3;
    soundPlayer.playbackRate = randomTemp;
    soundPlayer.play();
    increase++;
}

setInterval(playLowerNote, 100);