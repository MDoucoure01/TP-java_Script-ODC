let notif_bloc = document.querySelector('.bouton_unique');
let bnt_vert = document.querySelector('.vert');
let btn_jaune = document.querySelector('.jaune');
let bnt_rouge = document.querySelector('.rouge');
let bnt_bleu = document.querySelector('.bleu');

bnt_vert.addEventListener('click',function(){
    let notif_vert = document.createElement('div')
    notif_vert.innerHTML = `<div class="N_vert"> Tous les Notification ont ete lu</div>`
    notif_bloc.appendChild(notif_vert)
    setTimeout(() => {
        notif_vert.remove()
        
    }, 3000);
});
bnt_rouge.addEventListener('click',function(){
    let notif_rouge = document.createElement('div')
    notif_rouge.innerHTML = `<div class="N_rouge"> Notification span non Autoriser</div>`
    notif_bloc.appendChild(notif_rouge)
    setTimeout(() => {
        notif_rouge.remove()
        
    }, 3000);
});
btn_jaune.addEventListener('click',function(){
    let notif_jaune = document.createElement('div')
    notif_jaune.innerHTML = `<div class="N_jaune"> Notification d'Avertissement</div>`
    notif_bloc.appendChild(notif_jaune)
    setTimeout(() => {
        notif_jaune.remove()
        
    }, 3000);
});
bnt_bleu.addEventListener('click',function(){
    let notif_bleu = document.createElement('div')
    notif_bleu.innerHTML = `<div class="N_bleu"> Notification d'information</div>`
    notif_bloc.appendChild(notif_bleu)
    setTimeout(() => {
        notif_bleu.remove()
        
    }, 3000);
});
