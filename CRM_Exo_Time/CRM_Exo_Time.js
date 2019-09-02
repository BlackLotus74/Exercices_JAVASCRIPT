
//correction

function afficherDate(){

        var maDate = new Date();
        var annee = maDate.getFullYear();
        var jour = maDate.getDate();
        var numDay = maDate.getDay();
        var mois = maDate.getMonth();

        jour=(jour<10)?"0"+jour:jour;
        mois=(mois<10)?"0"+mois:mois;

        var chaineDate = jour +"/"+ mois +"/"+ annee;
        document.getElementById("txtdate").value = chaineDate;
    }

     document.getElementById("btndate").addEventListener("click", afficherDate);


function afficherHeure(){

        var monHeure = new Date();
        var heure = monHeure.getHours();
        var minute = monHeure.getMinutes();
        var seconde = monHeure.getSeconds();

        heure=(heure<10)?"0"+heure:heure;
        minute=(minute<10)?"0"+minute:minute;
        seconde=(seconde<10)?"0"+seconde:seconde;

        monHeure = heure +":"+ minute +"."+ seconde;
        window.setTimeout(afficherHeure, 1000);
        return document.getElementById("txtheure").value = monHeure;
    }

       // document.getElementById("btnHeure").addEventListener("click", afficherHeure);

  