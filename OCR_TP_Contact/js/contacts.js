
	class Contact {
    	constructor(nom, prenom){
      	this.nom = nom;
      	this.prenom = prenom;
    	}

    decrire(){
      return `${this.nom}, ${this.prenom}`;
    	}   
  	};

    function ajoutContact(nom, prenom){
      var Contact = {nom, prenom}
      contacts.push(Contact); 
      console.log("Le nouveau contact à été ajouté.");
    }

    function listChoix(){
        var menu = `   
        1 : Liste des contacts
        2 : Ajout de contact
        0 : Quitter   
        `;
        console.log(menu);
    }
 
    function listerContacts(contacts){
        console.log("Voici la liste de tous vos contacts :");
        for(const contact of contacts){
              console.log(`Nom : ${contact.nom}, prénom : ${contact.prenom}`);
            };
    }
 
  const contact1 = new Contact("Lévisse", "Carole");
  const contact2 = new Contact("Nelsonne", "Mélodie");
  
  console.log("Bienvenue dans le gestionnaire des contacts.");
  
  const contacts = [contact1, contact2];

  var choix;
      while (choix !== "0"){
        listChoix();
        choix = prompt("Choisissez une option");
  
        switch(choix) {
          case "0":
          console.log("Au revoir !");
          break;

          case "1":
            listerContacts(contacts)            
          break;
  
          case "2":
            var nom = prompt("Saisissez le nom :");
            var prenom = prompt("Saisissez le prénom :");
            ajoutContact(nom, prenom);
          break;
  
          default:
            console.log("Je n'ai pas compris votre choix.");
          break;
        }