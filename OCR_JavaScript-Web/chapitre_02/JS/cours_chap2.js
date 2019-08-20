//console.log(document.body.childNodes[5].childNodes[1]);
var titresElts = document.getElementsByTagName("h2");
console.log(titresElts[0]);
console.log(titresElts.length);

var merveillesElts = document.getElementsByClassName("merveilles");
for(var i = 0; i < merveillesElts.length; i++){
    console.log(merveillesElts[i]);
}