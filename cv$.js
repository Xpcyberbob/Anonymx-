import {Cv} from "./classg.js";
// Récupération du bouton "enregistrer" et ajout d'un écouteur d'événement au clic
document.getElementById("enregistrer").addEventListener("click", function() {

  // Récupération des valeurs des champs du formulaire
  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let formation = document.getElementById("formation").value;
  let competences = document.getElementById("competences").value;
  let loisirs = document.getElementById("loisirs").value;
  let langues = document.getElementById("langues").value;
  let telephone=document.getElementById("telephone").value;
  // Création d'un objet profil avec les données récupérées
 
  let cv = new Cv(
    nom,
    prenom,
    formation,
    competences,
    loisirs,
    langues,
    telephone
);
  // Affichage des données récupérées dans la console
  const cvjson=JSON.stringify(cv);
  localStorage.setItem("cv",cvjson);
  console.log(cvjson);
  console.log(cv);
  alert("CV enregistrer avec succès !");
 

});

document.getElementById("afficher").addEventListener("click", function() {
  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let formation = document.getElementById("formation").value;
  let competences = document.getElementById("competences").value;
  let loisirs = document.getElementById("loisirs").value;
  let langues = document.getElementById("langues").value;
  let telephone=document.getElementById("telephone").value;
  // Création d'un objet profil avec les données récupérées
  let cv = new Cv(
    nom,
    prenom,
    formation,
    competences,
    loisirs,
    langues,
    telephone
);

  console.log(cv);
 
});

  
  