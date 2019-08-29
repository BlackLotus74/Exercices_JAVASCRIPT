function changeColor(color){
    document.getElementById("content").style.background = color;
}

function displayName(color){
    document.getElementById("nomRouge").innerHTML["nomRouge"].value=color;
}

function rgb(){
    document.getElementById("content").style.backgroundColor =
    "rgb("+document.getElementById("nomRouge").value+","
    +document.getElementById("nomVert").value+","
    +document.getElementById("nomBleu").value+")";
}



