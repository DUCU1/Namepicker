var nameArray=[];

function showwinner(){
  function namesdiss(){
    document.getElementById("names").style.animationName = "sliderev";
  }
  function bottondiss(){
    document.getElementById("bot").style.animationName = "poprev";
  } 
  function winnerappear(){
    document.getElementById("win").style.animationName = "slideb";
  }
  function winnernameappear(){
    document.getElementById("won").style.animationName = "slideb";
  }
  namesdiss();
  bottondiss();
  winnerappear();
  winnernameappear();
}

$("#pick").click(() => {
    var names = document.getElementById("names").value;
    var nameArray = names.split(' ');
    var winner = nameArray[Math.floor(Math.random() * nameArray.length)];

    $("#won").text(winner);

    showwinner();
});


