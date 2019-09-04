
function valNum(string){
    var out = 0;
    var len = string.length;
    for(pos = 0; pos < len; pos++){
        out += (str.toUpperCase().charCodeAt(pos)-64) * Math.pow(26, len - pos -1);
    }
    return out;
}

function valNum2(str){
    var str = document.getElementById("pseudo").value,
    numVal = 0,
    chars = str.split('');
    for (var c in chars){
        numVal += (chars[c].toUpperCase().charCodeAt(0) - 64);
    } 
    return numVal;
}

function calculerSigne(){
    var sign = 0;
    var signAstro =["Verseau","Poisson","Belier","Taureau","Gémeaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagittaire","Capricorne","Verseau"];
}

function getZodiacSign(day, month) {

    var zodiacSigns = {
      'capricorn':'capricorne',
      'aquarius':'verseau',
      'pisces':'poisson',
      'aries':'belier',
      'taurus':'taureau',
      'gemini':'gemeaux',
      'cancer':'cancer',
      'leo':'lion',
      'virgo':'vierge',
      'libra':'balance',
      'scorpio':'scorpion',
      'sagittarius':'sagitaire'
    }
  
    if(month == 1 ) {
      return zodiacSigns.aquarius;
    } else if(month == 2) {
      return zodiacSigns.pisces;
    } else if(month == 3) {
      return zodiacSigns.aries;
    } else if(month == 4) {
      return zodiacSigns.taurus;
    } else if(month == 5) {
      return zodiacSigns.gemini;
    } else if(month == 6) {
      return zodiacSigns.cancer;
    } else if(month == 7) {
      return zodiacSigns.leo;
    } else if(month == 8) {
      return zodiacSigns.virgo;
    } else if(month == 9) {
      return zodiacSigns.libra;
    } else if(month == 10) {
      return zodiacSigns.scorpio;
    } else if(month == 11) {
      return zodiacSigns.sagittarius;
    } else if(month == 12) {
      return zodiacsSigns.capricorn;
    }
  }

  function formOK(input){
      var value = window.document.formulaire.getElementById(input).value;
      if(value !=""){
        alert("tous les champs ne sont pas remplis");
      }else{
        document.location.href = 'formulaire';
      }
  }


  function calculerPseudo(){
      var pseudo = getZodiacSign(day, month) + valNum(userName) + valNum(userFirstname);
      pseudo = document.getElementById("pseudo").value;
      
  }













function formValid(){
    var formValid = document.getElementById("btn_valid");
    formValid.addEventListener('click', validation);
    function validation(){

    }
}

