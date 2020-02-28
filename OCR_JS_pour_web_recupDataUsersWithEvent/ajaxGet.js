//permet d'envoyer une requête HTTP de type GET au service web se trouvant http://url-service-web.com/api/users 

var request = new XMLHttpRequest();
request.onreadystatechange = () => {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response.current_condition.condition);
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/annecy");
request.send();