var h = document.head;               //la variable h contient l'objet head du DOM
console.log(h);

var b = document.body;               //la variable b contient l'objet body du DOM
console.log(b);

/*if (document.body.nodeType === document.ELEMENT_NODE){
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}*/

//Accès du premier enfant du noeud body
//console.log(document.body.childNodes[0]);

/*// Affiche les noeuds enfant du noeud body
for(var i = 0; i < document.body.childNodes.length; i++){
    console.log(document.body.childNodes[i]);
}*/

/*var h1 = document.body.childNodes[1];
console.log(h1.parentNode);  //affiche noeud body
console.log(document.parentNode);  //affiche null : document n'a aucun noeud parent*/

/** var merveilleElts = document.getElementsByClassName("merveilles");
for (var i =0; i <merveilleElts.length; i++){
    console.log(merveilleElts[i]);
}*/

//console.log(document.getElementById("nouvelles")); //permet de sélectionner et d'afficher la liste portant l'identifiant "nouvelles".


// Tous les paragraphes
console.log(document.querySelectorAll("p").length);// display 3

//tous les paragraphes à l'intérieur de l'element identifié par "continu"
console.log(document.querySelectorAll("#contenu p").length); //display 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); //display 8


// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); //display 1

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);
