let leTitre = document.querySelector("#title");
let btAgrandir = document.querySelector("#agrandir");
let btReduire = document.querySelector("#reduire");


btAgrandir.onclick = function(){

  leTitre.classList.add('vid');

}	


btReduire.onclick = function(){

   leTitre.classList.remove('vid');
}
