window.addEventListener('load', horloge)
            function horloge()
            {
                let d = new Date()
                document.getElementById('heure').innerHTML = d.toLocaleTimeString()
                setTimeout(horloge, 1000)
            }
        document.addEventListener('DOMContentLoaded', function(){  //indique au navigateur qu’il doit d’abord charger tout le contenu HTML avant d’exécuter le JS à l’intérieur de celui-ci.
            let cache = document.getElementById('bouton')
            cache.addEventListener('click', cacheHorloge)

        document.getElementById('tog').style.display = 'block'

            function cacheHorloge(){
                let para = document.getElementById('tog')
                if(para.style.display == 'block'){
                    para.style.display = 'none'
                }else{
                    para.style.display = 'block'
                }
            }
        })