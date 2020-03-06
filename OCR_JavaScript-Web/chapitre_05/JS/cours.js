/*function clic() {
    console.log("Clic !");
}*/

let boutonElt = document.getElementById("bouton");
boutonElt.addEventListener("click", function(){
    console.log("Clic !")
});

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
document.getElementById("bouton").addEventListener("click", function (event) {
    console.log("Evènement : " + event.type + 
        ", texte de la cible : " + event.target.textContent);
});

// Gestion de l'appui sur une touche du clavier produisant un caractère
/*document.addEventListener("keypress", function (event) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(event.charCode));
});*/


document.addEventListener('keydown', function(event){
    console.log('evenement clavier : ' + event.type + ', touche : ' + event.keyCode);
});
/*function infoClavier(event){
    console.log('evenement clavier : ' + event.type + ', touche : ' + event.keyCode);
}
document.addEventListener('keyup', infoClavier);*/



// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0: // 0 est le code du bouton gauche
        bouton = "gauche";
        break;
    case 1: // 1 est le code du bouton du milieu
        bouton = "milieu";
        break;
    case 2: // 2 est le code du bouton droit
        bouton = "droit";
        break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

/*// Gestion du clic souris
document.addEventListener("click", infosSouris);

// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {
    console.log("Page entièrement chargée");
});

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});*/


// Gestion du clic sur le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
});

// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation(); // Arrêt de la propagation de l'événement
});


// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});