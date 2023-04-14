class Cv {
    constructor(nom, prenom, formation, competences, loisirs, telephone, langues) {
      this.nom = nom;
      this.prenom = prenom;
      this.formation = formation;
      this.competences = competences;
      this.loisirs = loisirs;
      this.telephone = telephone;
      this.langues = langues;
    }
  
    affichercv() {
      return `Nom: ${this.nom}, Email: ${this.prenom}, formation: ${this.formation}, competences: ${this.competences}, loisirs: ${this.loisirs}, telephone: ${this.telephone}, langues: ${this.langues}`;
    }
  }
  
  export { Cv };
  class Utilisateur {
    constructor(nom, email, motDePasse) {
      this.nom = nom;
      this.email = email;
      this.motDePasse = motDePasse;
    }
  
    afficherInfo() {
      return `Nom: ${this.nom}, Email: ${this.email}`;
    }
  }
export {Utilisateur};


class Session {
    constructor(username) {
      this.username = username;
    }
    
    login(username, password) {
      if (username === "admin" && password === "admin") {
       console.log(username, " + est connecté ");
      } 
      else {
        return false;
      }
    }
  
    logout() {
      this.username = null;
    }
  
    isLoggedIn() {
      return this.username !== null;
    }
  }

export{Session};

class CareerProfile {
    constructor(jobTitle, department, location, qualifications, experience) {
      this.jobTitle = jobTitle;
      this.department = department;
      this.location = location;
      this.qualifications = qualifications;
      this.experience = experience;
    }
 
  
}
class Compte {
  constructor(email, motDePasse) {
    this.email = email;
    this.motDePasse = motDePasse;
  }

  estValide() {
  
    return true; 
  }

  creer() {
    if (this.estValide()) {
      console.log(`Compte créé avec succès pour ${this.email}`);
    } else {
      console.log("Le compte n'est pas valide");
    }
  }
}

class Recruteur {
  constructor(typeJob, entreprise) {
    this.typeJob=typeJob;
    this.entreprise = entreprise;
  }
  
  publierOffre(poste, salaire) {
    console.log(`[${this.typeJob} - ${this.entreprise}] : Nous recrutons pour le poste de ${poste} avec un salaire de ${salaire} par an.`);
  }
}

class Demandeur {
  constructor(nom, domaine) {
    this.nom = nom;
    this.domaine = domaine;
  }
  
  postuler(poste) {
    
  }
}
class Administrateur extends Utilisateur{
  constructor(connexion){
    this.connexion=true;
  }
}
export{Administrateur};
export{Recruteur};
export{Demandeur};
export{Compte};
export{CareerProfile};

