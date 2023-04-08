const question = [
    {
        question: "Le meilleur anime de tous les temps",
        a: "Naruto",
        b: "Goku",
        c: "Bleach",
        d: "One Peach",
        correct: "a"
    },

    {
        question: "Le meilleur Personnage principale",
        a: "Naruto",
        b: "Itachi",
        c: "Sasuke",
        d: "Sakura",
        correct: "a"
    },

    {
        question: "Son Biju",
        a: "Kurama",
        b: "Gyûki",
        c: "Son Gokû",
        d: "Shukaku",
        correct: "a"
    },

    {
        question: "combien de Queue",
        a: "9",
        b: "3",
        c: "8",
        d: "10",
        correct: "a"
    },

    {
        question: "Comment s'appelle le fils de Naruto",
        a: "Boruto",
        b: "Minati",
        c: "Say",
        d: "Hinata",
        correct: "a"
    }
];

const cont = document.querySelector(".text");
const text_reponses = document.querySelectorAll(".quest");
const bouton_suivant = document.getElementById("bouton");
const radios = document.getElementsByName("reponse");
const bouton_ = document.getElementById("bouton");

let currentQuestion = 0;
let score = 0;
let relancer = 0;

function afficherQuestion(question) {
    cont.innerHTML = question.question;
    text_reponses[0].innerHTML = question.a;
    text_reponses[1].innerHTML = question.b;
    text_reponses[2].innerHTML = question.c;
    text_reponses[3].innerHTML = question.d;
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    desactiverBoutonSuivant();
}


function desactiverBoutonSuivant() {
    bouton_suivant.disabled = true;
}



function activerBoutonSuivant() {
    bouton_suivant.disabled = false;
}



function verifierSelection() {
    const radioSelectionne = document.querySelector('input[name="reponse"]:checked');
    if (radioSelectionne) {
        activerBoutonSuivant();
    } else {
        desactiverBoutonSuivant();
    }
}



for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", verifierSelection);
}



afficherQuestion(question[currentQuestion]);



function afficherProchaineQuestion() {
    relancer++
    if (relancer===7) {
        
        bouton.addEventListener('click',location.reload())
    }
    console.log(relancer)
    if (currentQuestion<=4) {
        if (document.getElementById("co1").checked) {
            score++
        }
        if (currentQuestion!=5) {
            currentQuestion++;
            afficherQuestion(question[currentQuestion]);
        }
        
    }
    if (currentQuestion===5) {
        const radioSelectionne = document.getElementById("bloc_input");
        radioSelectionne.remove()
        const dimunuer = document.getElementById("conteneur")
        dimunuer.style.height = "20vh"
        bouton_.style.height = "40%"
        const delivrance = document.querySelector(".text");
        delivrance.innerText = "Votre score est de score : "+score+"/5";
        // activerBoutonSuivant()
        // bouton_suivant.addEventListener("click", location.reload);
        // const bouton = document.getElementById("bouton");
        // bouton.innerHTML = "REJOUER"
        // bouton.addEventListener('click',location.reload())
        // let b=document.createElement('button')
        // b.innerText="Rejour"
        // bouton.append(b)
        // b.addEventListener('dbclick',location.reload())
    }
}

desactiverBoutonSuivant();
bouton_suivant.addEventListener("click", afficherProchaineQuestion);

// if (relancer===7)
// {
//     const bouton_ = document.getElementById("bouton");
//     bouton_.addEventListener("click",location.reload());
// }





// if (radios.checked = true) {
//     bouton_suivant.disabled = true;
//     bouton_suivant.disabled = false;
// }

// const question = [
//     {
//         question: "Le meilleur anime de tous les temps",
//         a: "Naruto",
//         b: "Goku",
//         c: "Bleach",
//         d: "One Peach",
//         correct: "a"
//     },

//     {
//         question: "Le meilleur Personnage principale",
//         a: "Naruto",
//         b: "Itachi",
//         c: "Sasuke",
//         d: "Sakura",
//         correct: "a"
//     },

//     {
//         question: "Son Biju",
//         a: "Kurama",
//         b: "Gyûki",
//         c: "Son Gokû",
//         d: "Shukaku",
//         correct: "a"
//     },

//     {
//         question: "combien de Queue",
//         a: "9",
//         b: "3",
//         c: "8",
//         d: "10",
//         correct: "a"
//     },

//     {
//         question: "Comment s'appelle le fils de Naruto",
//         a: "Boruto",
//         b: "Minati",
//         c: "Say",
//         d: "Hinata",
//         correct: "a"
//     }
// ];

// const cont = document.querySelector(".text");
// const text_reponses = document.querySelectorAll(".quest");
// const bouton_suivant = document.getElementById("bouton");
// const radios = document.getElementsByName("reponse"); // Ajouté
// const trouve = document.getElementById("co1");
// let currentQuestion = 0;
// let score = 0;

// function afficherQuestion(question) {
//     cont.innerHTML = question.question;
//     text_reponses[0].innerHTML = question.a;
//     text_reponses[1].innerHTML = question.b;
//     text_reponses[2].innerHTML = question.c;
//     text_reponses[3].innerHTML = question.d;

//     // Réinitialiser tous les boutons radio en supprimant la propriété "checked"
//     for (let i = 0; i < radios.length; i++) {
//         radios[i].checked = false;
//     }
// }

// afficherQuestion(question[currentQuestion]);

// function afficherProchaineQuestion() {
//     if (currentQuestion < 4) {
//         if (document.getElementById("co1").checked) {
//             score++;
//             console.log(score);
//         }

//         // Désactiver le bouton radio sélectionné
//         const radioSelectionne = document.querySelector('input[name="reponse"]:checked');
//         if (radioSelectionne) {
//             radioSelectionne.disabled = true;
//         }

//         currentQuestion++;
//         afficherQuestion(question[currentQuestion]);
//     }
// }

// bouton_suivant.addEventListener("click", afficherProchaineQuestion);


















// function afficherProchaineQuestion() {
//     const reponseForm = document.getElementById('reponse-form');
//     const radios = reponseForm.elements['reponse'];
//     let isChecked = false;
//     for (let i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             isChecked = true;
//             break;
//         }
//     }
//     if (isChecked) {
//         if (currentQuestion < 4) {
//             if (document.getElementById("co1").checked) {
//                 score++
//                 console.log(score)
//             }
//             currentQuestion++;
//             afficherQuestion(question[currentQuestion]);
//             bouton_suivant.removeAttribute('disabled');
//         }
//     } else {
//         bouton_suivant.setAttribute('disabled', '');
//     }
// }
















// if (currentQuestion < question.length) {
//     afficherQuestion(currentQuestion);
//     resetReponses();
// } else {
//     cont.innerHTML = `Votre score est de ${score}/${question.length}.`;
//     bouton_suivant.disabled = true;
// }
// function obtenirReponse() {
//     let reponse = undefined;

//     text_reponses.forEach((text_reponse) => {
//         if (text_reponse.checked) {
//             reponse = text_reponse.id;
//         }
//     });
//     return reponse;
// }

// function resetReponses() {
//     text_reponses.forEach((text_reponse) => {
//         text_reponse.checked = false;
//     });
// }



// bouton_suivant.addEventListener("click", () => {
//     const reponse = obtenirReponse();

//     if (reponse) {
//         if (reponse === question[currentQuestion].correct) {
//             score++;
//         }

//         currentQuestion++;

//         if (currentQuestion < question.length) {
//             afficherQuestion(question[currentQuestion]);
//             resetReponses();
//         } else {
//             cont.innerHTML = `Votre score est de ${score}/${question.length}.`;
//             bouton_suivant.disabled = true;
//         }
//     }
// });



// const bloc=[
//     {
//         question: "Le meilleur anime de tous les temps",
//         a: "Naruto",
//         b: "Goku",
//         c: "Bleach",
//         d: "One Peach",
//         correct: "a"
//     },

//     {
//         question: "Le meilleur Personnage principale",
//         a: "Naruto",
//         b: "Itachi",
//         c: "Sasuke",
//         d: "Sakura",
//         correct: "a"
//     },

//     {
//         question: "Son Biju",
//         a: "Kurama",
//         b: "Gyûki",
//         c: "Son Gokû",
//         d: "Shukaku",
//         correct: "a"
//     },

//     {
//         question: "combien de Queue",
//         a: "9",
//         b: "3",
//         c: "8",
//         d: "10",
//         correct: "a"
//     },

//     {
//         question: "la technique de kurama",
//         a: "l'Orbe des Démons à Queues",
//         b: "Orbre tourbillonant",
//         c: "Technique de scellement",
//         d: "Illusion",
//         correct: "a"
//     }
// ]

// let cont = document.querySelector(".text")
// let text_reponse = document.querySelector(".quest")
// cont[0].innerHTML = bloc[0].question;
