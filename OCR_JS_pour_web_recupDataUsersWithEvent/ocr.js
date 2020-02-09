window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('select[name="ice-cream"]').onchange=changeEventHandler;
}, false);

function changeEventHandler(event){
    if(!event.target.value) alert ('Please select one');
    else alert('You like ' + event.target.value + ' ice cream.');
}

input.addEventListener('input', function(event) {
    output.innerHtml = event.target.value;
});










