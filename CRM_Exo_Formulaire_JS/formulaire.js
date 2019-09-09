
//correction

function displayDay(){
    var uneOption = document.createElement("Option");
    uneOption.text = "choose your day";
    uneOption.value = "";
    document.querySelector("#jour").options[0]=uneOption;

    for (let i = 1; i <= 31; i++) {
       var monOption = new Option();
       monOption.text = i;
       monOption.value = i; 
       document.querySelector("#jour").options[i]=monOption;   
    }
}

function displayYears(){
    var uneOption = document.createElement("Option");
    uneOption.text = "choose your year";
    uneOption.value = "";
    document.querySelector("#annee").options[0]=uneOption;
    var annee = 1945;
    var maDate = new Date;
    monAnnee = maDate.getFullYear();
    nbAnnee = monAnnee - annee;

    for (let i = 1; i <= 2019; i++) {
        var monOption = new Option();
        monOption.text = annee +i;
        monOption.value = annee +i;
        document.querySelector("#annee").options[i]=monOption;
    }
}

function displayMonth(){
    var uneOption = document.createElement("Option");
    uneOption.text = "choose your month";
    uneOption.value = "";
    document.querySelector("#mois").options[0]=uneOption;
    let tabMois = new Array ("Janvier","Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", 
    "Aout", "Septembre", "Octobre", "Novembre", "Decembre");

    for (let i = 0; i < tabMois.length ; i++) {
        var monOption = new Option();
        monOption.text = tabMois[i];
        monOption.value = i;
        document.querySelector("#mois").options[i+1]=monOption;
    }
}

displayDay();
displayYears();
displayMonth();

function valNum(champ){
    champ2 = champ.toUpperCase();
    var somme=0;
    for (let i = 0; i < champ2.length; i++) {
        somme += champ2.charCodeAt(i)-64;       
    }
    return somme;
}

function calculerSigne(leMois){
    var tabSign =["Verseau", "Poisson", "Belier", "Taureau", "Gemeaux", "Cancer",
     "Lion", "Vierge", "Balance", "Scorpion", "Sagitaire", "Capricorne"];

     return tabSign[leMois];
    }

function formOk(){
    var prenom = document.querySelector("#userName").value;
    var nom = document.querySelector("#userFirstname").value;
    var ville= document.querySelector("#ville").value;
    var jour = document.querySelector("#jour").value;
    var mois = document.querySelector("#mois").value;
    var annee = document.querySelector("#annee").value;
    var verif = false;

    if(prenom!="" && nom!="" && ville!="" && jour!="" && mois!="" && annee!=""){
        verif = true;
        //document.getElementById("validation").disabled=false;
    }
    return verif;
}

function newCookie(key, value){
    var dateOfTheDay = new Date();
    var duree = dateOfTheDay.getTime();
    duree += 24*60*60*1000;
    dateOfTheDay.setTime(duree);

    //var dateExpiration = new Date(dateOfTheDay.getFullYear(), dateOfTheDay.getMonth(), dateOfTheDay.getDay(), dateOfTheDay.getHours()+1);
    document.cookie = key +"=" + value + ";expires " + dateOfTheDay.toGMTString();
}



function calculerPseudo(){
    let test = formOk();
    if(test == true){
        let nombre = valNum(document.querySelector("#userName").value)+ 
        valNum(document.querySelector("#userFirstname").value)+
        valNum (document.querySelector("#ville").value);

        document.getElementById("validation").disabled=false;
        let pseudo = calculerSigne(document.querySelector("#mois").value) + nombre;
        document.querySelector("#pseudo").value = pseudo;
    }
}

document.querySelector("#userName").addEventListener("blur", calculerPseudo);
document.querySelector("#userFirstname").addEventListener("blur", calculerPseudo);
document.querySelector("#ville").addEventListener("blur", calculerPseudo);
document.querySelector("#jour").addEventListener("blur", calculerPseudo);
document.querySelector("#mois").addEventListener("blur", calculerPseudo);
document.querySelector("#annee").addEventListener("blur", calculerPseudo);

document.querySelector("#validation").addEventListener("click", function(){
    newCookie("userName", document.getElementById("userName").value);
            newCookie("userFirstname", document.getElementById("userFirstname").value);
            newCookie("ville", document.getElementById("ville").value);
            var maDateAnniv = new Date(document.getElementById("annee").value,
                document.getElementById("mois").value,
                document.getElementById("jour").value);
            newCookie("dateAnniv", maDateAnniv);
            newCookie("pseudo", document.getElementById("pseudo").value);
            document.getElementById("form1").submit();

});

/*document.querySelector("#validation").addEventListener("click", function(){
var valeure=document.getElementById("userName").value;
    newCookie("userName",valeure);
	//newCookie("nom","test" );
    recupCookies("userName");
	});*/


/*function recupCookies(key){
    console.log(document.cookie);
    var params = document.cookie.split("; ");
    var resultat = "test";
    let verif = false;
    console.log(params);
    for (var i = 0; i < params.length; i++) {
        var tabPaire = params[i].split("=");
        if(tabPaire[0]==key){
            verif = true;
            resultat = tabPaire[1];
        }
    }
    alert(resultat);
}*/

/*dateAnniv = new Date(recupCookies("dateAnniv"));
var chaineDate = dateAnniv.getDate() + "/" + (dateAnniv.getMonth()+1) + "/" + dateAnniv.getFullYear();
//alert(chaineDate);
document.querySelector("#userName").innerHTML = recupCookies("userName");
document.querySelector("#userFirstname").innerHTML = recupCookies("userFirstname");
document.querySelector("#ville").innerHTML = recupCookies("ville");
document.querySelector("#naissance").innerHTML = recupCookies("naissance");
document.querySelector("#pseudo").innerHTML = recupCookies("pseudo");


function nbJoursAnniv(dateNaissance){
    let dn = new Date(dateNaissance);
    let dateCourante = new Date();
    let dateAnniv = new Date(dateCourante.getFullYear(), dn.getMonth(), dn.getDate());
    let diffDate = dateAnniv - dateCourante;
    let uneJournee = 24 * 60 * 60 * 1000;
    let nbJours = Math.ceil(diffDate / uneJournee);
        if(nbJours > 0){
            return nbJours;
        }else if(nbJours < 0){
            let dateAnniv = new Date(dateCourante.getFullYear() + 1, dn.getMonth(), dn.getDate());
            let diffDate2 = dateAnniv2 - dateCourante;
            nbJours = Math.ceil(diffDate2 / uneJournee);
            return nbJours;
        }else{
            alert("c'est votre anniversaire !");
            nbJours = 0;
            return nbJours;
        }
    }
    var dateDeNaissance = recupCookies("dateAnniv");
    document.querySelector("#nbJour").innerHTML = nbJoursAnniv(dateDeNaissance);
*/

