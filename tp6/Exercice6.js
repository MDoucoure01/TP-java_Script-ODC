const jour = document.querySelector('.jour')
const heur = document.querySelector('.heur')
const minute = document.querySelector('.minute')
const seconde = document.querySelector('.seconde')



const date_actuelle = new Date().getFullYear()
const date_reference = new Date('January 01 2024 00:00:00')


function mise_a_jour()
{
    const temps_actuel = new Date()
    const diff = date_reference-temps_actuel
    const day = Math.floor(diff/1000/(60*60*24))
    const hours = Math.floor(diff/1000/(60*60))%24
    const min = Math.floor(diff/1000/(60))%60
    const sec = Math.floor(diff/1000)%60

    jour.innerHTML = day
    jour.innerHTML = '-'+ day;
    heur.innerHTML = hours < 10 ? '0-0' + hours : '-' + hours;
    minute.innerHTML = min < 10 ? '-0' + min : '0-' + min;
    seconde.innerHTML = sec < 10 ? '0-0' + sec : '0-' + sec;

    console.log(hours)
}
setInterval(mise_a_jour,1000)