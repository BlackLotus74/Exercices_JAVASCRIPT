document.getElementById('code').addEventListener('input', function(e) {

    var value = e.target.value;
    if(/^CODE-/.test(value)){
      document.getElementById('code-validation').innerHTML = "Code valide";
      document.getElementById('submit-btn').removeAttribute('disabled');
    }else{
      document.getElementById('code-validation').innerHTML = "Code invalide";
      document.getElementById('submit-btn').setAttribute('disabled', true);
    }
  });