
function equalizerRun(){
    song.play();
    lizerPartsRun1.style.animationPlayState="running";
    lizerPartsRun2.style.animationPlayState="running";
    lizerPartsRun3.style.animationPlayState="running";
    lizerPartsRun4.style.animationPlayState="running";
    lizerPartsRun5.style.animationPlayState="running";
    lizerPartsRun6.style.animationPlayState="running";
    lizerPartsRun7.style.animationPlayState="running";
    play.style.display="none";
    pause.style.display="block";
}
 function equalizerStop(){
    song.pause();
    lizerPartsRun1.style.animationPlayState="paused";
    lizerPartsRun2.style.animationPlayState="paused";
    lizerPartsRun3.style.animationPlayState="paused";
    lizerPartsRun4.style.animationPlayState="paused";
    lizerPartsRun5.style.animationPlayState="paused";
    lizerPartsRun6.style.animationPlayState="paused";
    lizerPartsRun7.style.animationPlayState="paused";
    play.style.display="block";
    pause.style.display="none";
}
function volumeControl(){
    let sng = document.getElementById("song");
    var vlm = document.getElementById("volume").value;
    v = vlm / 100;
    sng.volume = v;
    var vlmP = document.getElementById("volPoint");
    vlmP.innerHTML= vlm + "%";
    var bass = document.getElementById("bass").value;
    var bassP = document.getElementById("bassPoint");
    bassP.innerHTML= bass + "%";
}