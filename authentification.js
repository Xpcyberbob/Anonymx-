 import {Session} from "./classg.js";
 import {Administrateur} from "./classg.js";
 document.getElementById("conx").addEventListener("click", function() {

  // Récupération des valeurs des champs du formulaire
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let connexion=true;
 
  // Création d'un objet profil avec les données récupérées
  let session = new Session(username,password);

  if (username === "admin" && password === "admin" && connexion===true) {
  this.username = username;
  
  sessionStorage.setItem(username,password);
  console.log(session);
  console.log("session ouverte: ",username," est connecté !");
  alert("authentification reussie");
  window.location.href="tableaudb.html";
  }
  else{
    alert("nom d'utilisateur ou mot de passe incorrect !")
  }
 
 });

