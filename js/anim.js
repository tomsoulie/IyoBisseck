let leTitre = document.querySelector("h1");
let btAgrandir = document.querySelector("#agrandir");
let btReduire = document.querySelector("#reduire");

let displayGrid = document.querySelector(".displayGrid");
let grid = document.querySelector(".columnTest");
let toogle = 0;
let toogleVid = 0;

let bt = document.querySelector(".bt"); // Bouton bleu
let vid = document.querySelector(".vid");


// afficher et masquer la grille lorqu'on clique sur GRILLE
displayGrid.onclick = function(){

  if (toogle == 0) {
    grid.style.visibility = "visible";
    toogle = toogle+1;
    
  } else {
    grid.style.visibility = "hidden";
    toogle = toogle-1;
  }
}	

// Afficher une video ?? quand on clique sur le bouton bleu
bt.onclick = function(){

  if (toogleVid == 0) {
    // Afficher la video?? ou autre chose
    vid.style.display = "block";
    toogleVid = toogleVid+1;
  } else {
    // Masquer cette dernière
    vid.style.display = "none";
    toogleVid = toogleVid-1;
  }
}	


btAgrandir.onclick = function(){

  leTitre.classList.add('vid');

}	


btReduire.onclick = function(){

   leTitre.classList.remove('vid');
}
