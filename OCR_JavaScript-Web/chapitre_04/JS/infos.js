let styleElement = getComputedStyle(document.getElementById("contenu"));
let listeElt = document.createElement("ul");

let longueurElt = document.createElement("li");
longueurElt.textContent = "Longueur : " + styleElement.width;
let hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur : " + styleElement.height;

listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(listeElt);