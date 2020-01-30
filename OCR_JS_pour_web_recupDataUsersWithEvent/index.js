/**Nous avons ici un formulaire et nous aimerions restituer les réponses 
 * de notre formulaire dans l'élément du dessous. 
 * De plus, nous voudrions afficher la position de la souris quand elle se trouve 
 * dans cet élément.
 */


/** Ecoutez les événements input sur l'élément #name 
 * afin de savoir quand le contenu du champ texte est changé. 
 * Affichez le contenu actuel dans l'élément #res-name
 */

document.querySelector("#name").addEventListener("input", function(e) {
    document.querySelector("#res-name").innerHTML = e.target.value;
  });

/** Maintenant nous voulons écouter l'événement du changement de choix du genre (#gender), 
 * et afficher le résultat dans l'élément #res-gender. 
 */
  document.querySelector("#gender").addEventListener("change", function(c) {
    document.querySelector("#res-gender").innerHTML = c.target.value;
  });

/** Nous souhaitons maintenant afficher les coordonnées de la souris à l'intérieur 
 * de l'élément #result dès que celle-ci passe par dessus. Ce que nous voulons, 
 * c'est avoir les coordonnées relatives au coin en haut à gauche de l'élément #result.
 */
  
  document.querySelector("#result").addEventListener('mousemove', function(e) {
     document.querySelector("#mouse-x").innerHTML = e.offsetX + "";
     document.querySelector("#mouse-y").innerHTML = e.offsetY + "";
  });