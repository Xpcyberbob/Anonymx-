import {Utilisateur}  from "./classg.js";
document.getElementById("creer").addEventListener("click", function() {

  // Récupération des valeurs des champs du formulaire
  let nomUtilisateur= document.getElementById("nomUtilisateur").value;
  let emailUtilisateur = document.getElementById("emailUtilisateur").value;
  let motDePasse=document.getElementById("motDePasseUtilisateur").value;

  // Création d'un objet profil avec les données récupérées
  let utilisateur= new Utilisateur(
    nomUtilisateur,
    emailUtilisateur,
    motDePasse
  );

  // Affichage des données récupérées dans la console
  console.log(utilisateur);
  localStorage.setItem(nomUtilisateur,emailUtilisateur,motDePasse);
  alert("utilisateur ajouté !")

});

 document.getElementById("deconnecter").addEventListener("click", function (){
  sessionStorage.clear();
  window.location.href="authentification.html";
 });

// Récupération du bouton "enregistrer" et ajout d'un écouteur d'événement au clic
document.getElementById("suprr").addEventListener("click", function() {

  // Récupération des valeurs des champs du formulaire
  let nomUtilisateurSupprime= document.getElementById("nomUtilisateurSupprime").value;
  let nomUtilisateur= document.getElementById("nomUtilisateur").value;
  let motDePasseAdministrateur=document.getElementById("motDePasseAdministrateur").value;
  let utilisateursup= {
    nomUtilisateurSupprime:nomUtilisateurSupprime,
    motDePasseAdministrateur:motDePasseAdministrateur
    };
    
  console.log(utilisateursup);
  if (nomUtilisateur===nomUtilisateurSupprime){
    localStorage.getItem(nomUtilisateur);
    localStorage.clear(nomUtilisateur);
    alert("suppression reussie !");

  }
  else{
    alert("cet utilisateur n'existe pas !")
  }


});

