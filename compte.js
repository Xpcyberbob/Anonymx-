import {Compte} from "./classg.js";
const formulaire = document.querySelector('form');
const boutonCreerCompte = document.querySelector('#creerCompte');



boutonCreerCompte.addEventListener('click', (event) => {
event.preventDefault();



  const email = formulaire.elements.email.value;
  const motDePasse = formulaire.elements.motDePasse.value;
  if (email=="" && motDePasse==""){
    alert("champ vide !");
  }
  else {
  const compte = new Compte(email, motDePasse);
  sessionStorage.setItem(email,motDePasse);
  compte.creer();
  console.log(compte);
  alert("creation du compte reussie !");
  }
  
});
