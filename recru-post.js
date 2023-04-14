import {Recruteur} from "./classg.js";
import { Demandeur } from "./classg.js";

document.getElementById("recru").addEventListener("click", function(){
 var selectelmt=document.getElementById("liste");
 var val=selectelmt.options[selectelmt.selectedIndex].value;
 var textselect=selectelmt.options[selectelmt.selectedIndex].text;
 let recru=new Recruteur(textselect,"Cyberbob");
 console.log(recru);
 console.log("vous avez recruté:  "+recru.typeJob);

});



document.getElementById("post").addEventListener("click", function(){
 var selectelmt=document.getElementById("liste");
 var val=selectelmt.options[selectelmt.selectedIndex].value;
 var textselect=selectelmt.options[selectelmt.selectedIndex].text;

 let poste=new Demandeur(textselect,"Informatique");
 console.log(poste);
 console.log("poste " +poste.nom);
});