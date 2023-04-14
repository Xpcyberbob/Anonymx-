import {CareerProfile} from "./classg.js";
// Récupération du bouton "enregistrer" et ajout d'un écouteur d'événement au clic
document.getElementById("ok").addEventListener("click", function() {

  // Récupération des valeurs des champs du formulaire
  let jobTitle = document.getElementById("jobTitle").value;
  let department = document.getElementById("department").value;
  let location = document.getElementById("location").value;
  let responsibilities = document.getElementById("responsibilities").value;
  let qualifications = document.getElementById("qualifications").value;
  let experience = document.getElementById("experience").value;

  // Création d'un objet profil avec les données récupérées
  let profil = {
    jobTitle: jobTitle,
    department: department,
    location: location,
    responsibilities: responsibilities,
    qualifications: qualifications,
    experience: experience
  };

  // Affichage des données récupérées dans la console
  console.log(profil);
  alert("PC enregistrer avec succès !");

});


  
  