function changeColor(color){
    document.getElementById("content").style.background = color;
}

function rgb(){
    document.getElementById("content").style.backgroundColor =
    "rgb("+document.getElementById("nomRouge").value+","
    +document.getElementById("nomVert").value+","
    +document.getElementById("nomBleu").value+")";
}

//correction
/*function testChamps (_champs){
    var chaine = document.getElementById(_champs).value.toUpperCase();
    var regex = /^[0-9A-F]{2}$/;
    var testBool = false;

    if(regex.test(chaine)){
        testBool = true;
    }else{
        //document.getElementById(_champs).value="";
        document.getElementById(_champs).focus();
        alert("2 caractères en code hexa");
    }
    return testBool;
}

function genereCouleur(_champs){
    if(testChamps(_champs) == true){
        var couleur = "#" + document.querySelector("#rouge").value
        + document.querySelector("#vert").value
        + document.querySelector("#bleu").value;

        document.body.style.backgroundColor = couleur;
    }
document.querySelector("#rouge").addEventListener("blur", function(){genereCouleur("rouge");
});

document.querySelector("#vert").addEventListener("blur", function(){genereCouleur("vert");
});

document.querySelector("#bleu").addEventListener("blur", function(){genereCouleur("bleu");
});
}

function genereCouleur(_rouge, _vert, _bleu){
    var couleur = "#" + _rouge + _vert + _bleu;
    document.body.style.backgroundColor = couleur;
}*/


