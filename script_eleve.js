window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});


function auto_grow(element) {
    element.style.height = "1px";
    element.style.height = (element.scrollHeight)+"px";
}


function bloquerSpe1(idSpe1, idSpe2) {
    // recuperer l'option selectionnée spe1
    const spe1 = document.getElementById(idSpe1).value;

    // désélectionner l'option spe1 options dans spe2
    const spe2 = document.getElementById(idSpe2);
    for (const i of spe2.options) {
        if (i.value === spe1) {
            if (i.selected === true) {
                spe2.value = "";
            }
            i.disabled = true;
        } else {
            i.disabled = false;
        }
    }
}


function verifierSpe1(idSpe1, idSpe2) {
    // si l'option selectionnée en spe1 est vide
    // selectionner "" en spe2
    const spe1 = document.getElementById(idSpe1);
    const spe2 = document.getElementById(idSpe2);
    if (spe1.value === "" && spe2.value !== "") {
        for (const i of spe1.options) {
            if (i.value === spe2.value) {
                i.selected = true;
                spe2.options[i.index].disabled = true;
                spe2.value = "";
            }
        }
    }
}


function recupperer_questions() {
    const id = document.getElementById('id').value;
    const mdp = document.getElementById('mdp').value;

    if (id !== "" && mdp !== "") { //si les champs sont remplis
        
        if (id =="101" && mdp == "101") {

            //desactiver le questionnaire d'authentification
            document.getElementById('id').disabled = true;
            document.getElementById('mdp').disabled = true;
            document.getElementById('bouton_connection').innerText = "Connecté";
            document.getElementById('bouton_connection').style.background = '#2BC016C0';
            document.getElementById('bouton_connection').disabled = true;
            document.getElementById('bouton_sauvegarder').removeAttribute('disabled');

            //activer le questionnaire des questions
            document.getElementById('q1').removeAttribute('disabled');
            document.getElementById('q1s1').removeAttribute('disabled');
            document.getElementById('q1s2').removeAttribute('disabled');
            document.getElementById('q2').removeAttribute('disabled');
            document.getElementById('q2s1').removeAttribute('disabled');
            document.getElementById('q2s2').removeAttribute('disabled');

            //creer les option pour les select
            const q1s1 = document.querySelector('#q1s1');
            const q1s2 = document.querySelector('#q1s2');
            const q2s1 = document.querySelector('#q2s1');
            const q2s2 = document.querySelector('#q2s2');

            for (let i of [q1s1, q1s2, q2s1, q2s2]) {
                for (let j of ['NSI', 'MATHS']) {
                    let newOption = new Option(j, j);
                    i.add(newOption, undefined);
                }
            }

            // assigner les valeurs aux bons champs de textes
            // relatif a la premiere question
            document.getElementById("q1").value = "Le hasard est il vraiment aléatoire en informatique ?";
            auto_grow(document.getElementById("q1"));
            q1s1.value = "NSI";
            q1s2.value = "MATHS";
            // desactiver les options de la premiere question sauf si la valeur est ""
            if (q1s1.value !== "") {
                bloquerSpe1("q1s1", "q1s2");
            }

            // mettre nom et prenom dans #nom-eleve
            document.getElementById("nom-eleve").innerText = "Bonjour, Florian PETIOT";
            // enlever attribut "hidden" de #nom-eleve
            document.getElementById("nom-eleve").removeAttribute("hidden");

            // mettre le focus sur q1 si q1 est vide
            if (document.getElementById("q1").value === "") {
                document.getElementById("q1").focus();
            }
            
            // changer margin-top de .premiere-question to 35px
            document.querySelector(".premiere-question").style.marginTop = "35px";

            // baisser la page sur le nom de l'élève
            document.getElementById("nom-eleve").scrollIntoView({ behavior: "smooth" });

        }
        else if (id =="903" && mdp == "903") {
            alert("Vous êtes professeur.\nVeillez donc vous connecter via l'accès professeur.");
        }
        else {
            alert("DEMONSTRATION\n\nVous pouvez vous connecter ici avec les identifiants suivants :\nIdentifiant : 101\nMot de passe : 101");
        }

    }
}



function sauvegarder_questions() {
    // recuperer les valeurs des champs de textes
    const q1 = document.getElementById("q1").value;
    const q1s1 = document.getElementById("q1s1").value;
    const q1s2 = document.getElementById("q1s2").value;

    const q2 = document.getElementById("q2").value;
    const q2s1 = document.getElementById("q2s1").value;
    const q2s2 = document.getElementById("q2s2").value;

    // tester s'il y a "&" or "#" dans q1 ou q2
    if (q1.includes("&") || q1.includes("#") || q2.includes("&") || q1.includes("#")) {
        alert("Les caractères '&' et '#' ne sont pas autorisés dans les questions !");
    }
    else if (q1s2 == "" && (q2s1 == q1s1 && q2s2 == "" && q1s1 != "") ){
        alert("Vous devez obligatoirement solliciter vos deux spécialités !");
    }
    else {
        alert("Vos questions ont bien été sauvegardées.");
    }

}