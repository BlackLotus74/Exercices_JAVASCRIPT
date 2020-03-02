//ajoute à la suite
document.getElementById('langages').innerHTML += '<li id="python">Python</li>';

//vide
//document.getElementById('langages').innerHTML = "";

//ajoute à la suite /!\ne pas oublier le "+="
document.querySelector('h1').textContent += ' de programmation';


//definir valeure d'un attribut
document.querySelector('h1').setAttribute('id', 'titre');
//equivaut
document.querySelector("h1").id = "titre";


//ajouter ou supprimer des classes
let titreElt = document.querySelector('h1'); //acces au premier titre h1
titreElt.classList.remove("debut");          //suppression de la classe "debut"
titreElt.classList.add("titre");             //ajout de la classe "titre"
console.log(titreElt);

//ajouter un nouvel element
let rubyElt = document.createElement('li');               //creation element li
rubyElt.id = "Ruby";                                      //definition de l'identifiant
rubyElt.textContent = "ruby";                             //definition de son contenu textuel
document.getElementById('langages').appendChild(rubyElt); //insertion du nouvel element

//comme au dessus en changeant createTextNode
let rubyElt = document.createElement("li");               // Création d'un élément li
rubyElt.id = "ruby";                                      // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby"));     // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément


var perlElt = document.createElement("li");               // Création d'un élément li
perlElt.id = "perl";                                      // Définition de son identifiant
perlElt.textContent = "Perl";                             // Définition de son contenu textuel
                                // Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

