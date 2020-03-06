let compteurElt = document.getElementById('compteur');

//diminue compteur jusqu'à 0
function diminuerCompteur() {
    //conversion en nombre du texte du compteur
    let compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        //annule l'exécution répétée
        clearInterval(intervalId);
        //modifie le titre de la page
        let titre = document.getElementById('titre');
        titre.textContent = "BOUM !!";
        //modification du titre au bout de 2 secondes
        setTimeout(function () {
            titre.textContent = 'contactez monsieur Balkany';
        }, 1500);
    }
}

//Appelle la fonction diminuerCompteur toutes les secondes
let intervalId = setInterval(diminuerCompteur, 1000);