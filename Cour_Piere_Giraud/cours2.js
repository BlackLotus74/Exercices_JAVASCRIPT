let bonjour = document.getElementById('b1')
let ajouter = document.getElementById('b2')

bonjour.addEventListener('click', alerte)
ajouter.addEventListener('click', ajout)

function alerte(){
    alert('Bonjour')
}

function ajout(){
    let paragraphe = document.createElement('p')
    paragraphe.textContent = 'Paragraphe ajouté'
    document.body.appendChild(paragraphe)
}