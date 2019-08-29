
function total(){
    var quant1 = Number(document.getElementById("Qté1").value);
    var prixUnitaire1 = Number(document.getElementById("PrixUnit1").value);
    var prix1 = quant1 * prixUnitaire1;
    document.getElementById("Prix1").value=prix1;

    var quant2 = Number(document.getElementById("Qté2").value);
    var prixUnitaire2 = Number(document.getElementById("PrixUnit2").value);
    var prix2 = quant2 * prixUnitaire2;
    document.getElementById("Prix2").value=prix2;
    
    var totalFinal = prix1 + prix2;

    document.getElementById("Total").value=totalFinal;
   }


document.getElementById("Qté1").addEventListener("change", total);
document.getElementById("PrixUnit1").addEventListener("change", total);
document.getElementById("Prix1").addEventListener("change", total);

document.getElementById("Qté2").addEventListener("change", total);
document.getElementById("PrixUnit2").addEventListener("change", total);
document.getElementById("Prix2").addEventListener("change", total);

