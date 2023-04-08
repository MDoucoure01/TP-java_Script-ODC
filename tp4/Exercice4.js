let btn = document.querySelector(".bout");
let not = document.querySelector(".fonce")
let parent = document.querySelector(".bloc_bouton")
let cop = document.querySelector("#copie")
let extraire = ""

btn.addEventListener('click', function(){
    let longueur = parseInt(document.getElementById("c1").value);
    let Mot_de_pass=""
    let caractere = "";
    let nouvelle = ""
    let extraire = ""
    if(isNaN(longueur)){
        let notifCocher = document.createElement('div')
        notifCocher.innerHTML = `<div class="fonce_before">Entrer un nombre</div>`
        not.appendChild(notifCocher)
        setTimeout(() => {
            notifCocher.remove()
            
        }, 2899);
    }
    if(longueur >= 1  && longueur <=20)
    {
        let i=0;
        if (document.getElementById("c2").checked) {
            caractere += "AZERTYUIOPMLKJHGFDSQWXCVBN";
            i++;
            let car_maj = "AZERTYUIOPMLKJHGFDSQWXCVBN"
            extraire += car_maj.charAt(Math.floor(Math.random() * car_maj.length));
        }
        if (document.getElementById("c3").checked) {
            caractere += "azertyuiopmlkjhgfdsqwxcvbn";
            i++;
            let car_min = "azertyuiopmlkjhgfdsqwxcvbn"
            extraire += car_min.charAt(Math.floor(Math.random() * car_min.length));
        }
        if (document.getElementById("c4").checked) {
            caractere += "1234567890";
            i++;
            let car_nb = "1234567890"
            extraire += car_nb.charAt(Math.floor(Math.random() * car_nb.length));
        }
        if (document.getElementById("c5").checked) {
            caractere += "¹~#{[|`\\^@]}$¤*%§ ";
            i++;
            let car_sp = "¹~#{[|`\\^@]}$¤*%§"
            extraire += car_sp.charAt(Math.floor(Math.random() * car_sp.length));
        }
        console.log(extraire)
        let reste = longueur-i
        console.log(reste)
        if (!(document.getElementById("c5").checked) && !(document.getElementById("c4").checked) && !(document.getElementById("c3").checked) && !(document.getElementById("c2").checked)) {
            // alert("Desoler veillez cocher au moins une cage")
            let notifCocher = document.createElement('div')
            notifCocher.innerHTML = `<div class="fonce_before">Veillez Cocher au Moins une Cage</div>`
            not.appendChild(notifCocher)
            setTimeout(() => {
                notifCocher.remove()
                
            }, 2899);
        }
        
        if(i>longueur)
        {
            // alert('Les case case cocher sont de trop')
            let notifCocher = document.createElement('div')
            notifCocher.innerHTML = `<div class="fonce_before">Les Cages Cocher Sont de Trop</div>`
            not.appendChild(notifCocher)
            document.querySelector("#copie").innerHTML=""
            setTimeout(() => {
                notifCocher.remove()
                
            }, 2899);
        }
        else
        {
            for (let i = 0; i < reste; i++) {
                // alert("diogal")
                Mot_de_pass += caractere.charAt(Math.floor(Math.random() * caractere.length));
            }
            nouvelle = Mot_de_pass + extraire
            let Mot_de_pass_reel =""
            for (let i = 0; i < nouvelle.length; i++) {
                Mot_de_pass_reel += nouvelle.charAt(Math.floor(Math.random() * nouvelle.length));
            }
            console.log(Mot_de_pass_reel)
            document.querySelector("#copie").innerHTML = nouvelle;
        }
    }
    else
    {
        // alert('RESPECT')
        let notifCocher = document.createElement('div')
            notifCocher.innerHTML = `<div class="fonce_before">Taille Anormale Compris 1 et 20</div>`
            not.appendChild(notifCocher)
            setTimeout(() => {
                notifCocher.remove()
                
            }, 2899);
    }
    console.log(caractere);
})

// function copie() {
                                
//     if (cop.value == 0) {
                                    
//         alert('Case vide , il n y a rien à copier')
//     }
//     else {
//         alert('Copié')
//         cop.select();
//         document.execCommand('copy');
//     }
// }

cop.addEventListener("click",()=>
{
    alert('Copié')
    navigator.clipboard.writeText(cop.innerText);
})