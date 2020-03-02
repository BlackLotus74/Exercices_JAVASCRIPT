
/**
 * Nous voulons pouvoir entrer du texte dans le formulaire et l'envoyer vers un service web. 
 * Ce service web va simplement nous renvoyer notre contenu en plus d'autres informations 
 * et nous allons afficher le contenu renvoyé par le serveur
 */
window.addEventListener('DOMContentLoaded', function(){

    function send(){
        /**
         * création du contenu que nous allons envoyer au serveur. 
         * Nous récupérons donc la valeur du champ de saisie et nous la mettons dans la propriété value d'un objet.
         */
        let body = {value: document.getElementById("value").value};
        let request = new XMLHttpRequest();
        request.onreadystatechange = function(){
          if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            document.getElementById("result").innerHTML = response.postData.text;
          }
        }
        request.open("POST", "https://mockbin.com/request");
        request.setRequestHeader("Content-Type", "application/json"); //prévenir service web qu'il va recevoir du JSON
        request.send(JSON.stringify(body));                           //transformer objet JavaScript en JSON
    };

    /**
     * Maintenant nous voulons envoyer notre requête, 
     * et donc appeler notre fonction send dès que nous soumissons le formulaire ayant pour ID form.
     */
      document.getElementById("form").addEventListener("submit", function(e){
        e.preventDefault();
        send();
      });

      /**
       * créer une fonction asynchrone (avec async) qui s'appelle compute et qui va récupérer les résultats
       *  des 2 fonctions asynchrones getNumber1() et getNumber2() (avec await) 
       * et renvoyer la somme des 2 valeurs récupérées.
       */
      async function compute(){
        const result1 = await getNumber1();
        const result2 = await getNumber2();
        return result1 + result2;
      };

      /**
       * appeler notre fonction compute() et utiliser sa valur de retour comme une Promise 
       * pour finalement afficher le résultat de la promesse dans le contenu HTML de l'élément ayant pour ID result.
       */
      compute()
        .then(function(data){
            document.getElementById("result").innerHTML = data;
        });

        /**
         * nous voulons exécuter une requête  POST  une fois que les 2 requêtes  GET  sont terminées, et pas avant ! 
         * Pour ce faire, nous devons savoir si les requêtes  GET  sont terminées. 
         * C'est pour ça que la variable  GETRequestCount  est créée. 
         * On va l'incrémenter dans la fonction callback que l'on a envoyée aux appels à  get() , et si on atteint 2 (le nombre de requêtes  GET qu'on a faites), 
         * alors on va exécuter la requête  POST .
         * GETRequestResults  sert à conserver les réponses des requêtes  GET , car on ne les a pas toutes les 2 en même temps.
         */
    let GETRequestCount = 0;
    let GETrequestResults = [];

    function onGETRequestDone(err, result){
        if(err) throw err;

        GETRequestCount++;
        GETrequestResults.push(result);

        if(GETRequestCount == 2){
            post(url3, function(err, result){
                if(err) throw err;
            });
        }
    }
    get(url1, onGETRequestDone);l
    get(url2, onGETRequestDone);


    /**
     * La fonction  Promise.all  qui prend en paramètre une liste de Promise (cela peut aussi être de simples valeurs qui sont alors 
     * transformées en Promise résolues), et qui permet de toutes les exécuter en parallèle et de retourner une nouvelle Promise qui sera résolue quand 
     * toutes les Promise seront résolues.Ainsi, la fonction then() recevra les résultats de toutes les Promise sous forme d'un tableau.
     * Afin d'exécuter notre requête  POST une fois que les requêtes GET sont terminées, nous l'exécutons donc dans la fonction  then().
     * Notez que dans la fonction then(), nous faisons encore une fois appel à la fonction Promise.all en lui passant les résultats des requêtes GET et notre requête POST.
     * Étant donné que  Promise.all considère les simples valeurs comme des  Promise  résolues, cela nous permet, dans le prochain  then() , 
     * de récupérer une liste qui contient les résultats des requêtes  GET  et le résultat de la requête POST : allResults = [ [ getResult1, getResult2 ], postResult ] . 
     */
    Promise
    .all([get(url1), get(url2)])
    .then(function(results) {
        return Promise.all([results, post(url3)]);
    })
    .then(function(allResults) {
        // We are done here !
    });


    /**
     * Nous utilisons aussi la fonction  Promise.all  dans ce code, car c'est comme ça que l'on peut exécuter des fonctions asynchrones en parallèle 
     * (rappelez-vous que async correspond en arrière-plan à une Promise).
     * Par contre, ici, nous utilisons await devant Promise.all  afin d'attendre la fin de l'exécution des 2 requêtes GET , 
     * puis nous utilisons  await  devant la requête  POST  afin d'attendre son résultat. Puis nous renvoyons un tableau avec tous les résultats.
     * Lorsque nous appelons la fonction  requests() , ici, nous utilisons  then()  pour récupérer tous les résultats 
     * (mais vous auriez aussi pu utiliser  await  au sein d'une autre fonction avec le mot clé  async ).
     */
    async function requests() {
        let getResults = await Promise.all[(get(url1), get(url2))];
        let postResult = await post(url3);
        return [getResults, postResult];
    }
    requests()
    .then(function(allResults){

    });

    
});