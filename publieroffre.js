import {Recruteur} from "./classg.js";
document.getElementById("publier").addEventListener('click',function(){
    let nom=document.getElementById("nom").value;
    let entreprise=document.getElementById("entreprise").value;
    let salaire=document.getElementById("salaire").value;
    let domaine=document.getElementById("domaine").value;
    const recruteur = new Recruteur(nom,entreprise);
    recruteur.publierOffre(nom,salaire);
    console.log(recruteur);
}
);


