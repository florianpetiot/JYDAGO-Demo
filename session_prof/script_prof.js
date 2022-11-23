window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});


function recupperer_questions() {
    const id = document.getElementById('id').value;
    const mdp = document.getElementById('mdp').value;

    if (id !== "" && mdp !== "") { //si les champs sont remplis

        if  (id == "101" && mdp == "101") {
            alert("Vous êtes élève.\nVeillez donc vous connecter via l'accès élève.")
        }
        else if (!((id == "903" && mdp == "903") || (id == "999" && mdp == "999"))) {
            alert("DEMONSTRATION\n\nVous pouvez vous connecter ici avec les identifiants suivants :\nIdentifiant : 903 ou 999\nMot de passe : 903 ou 999");
        }
        else {

            //desactiver le questionnaire d'authentification
            document.getElementById('id').disabled = true;
            document.getElementById('mdp').disabled = true;
            document.getElementById('bouton_connection').innerText = "Connecté";
            document.getElementById('bouton_connection').style.background = '#2BC016C0';
            document.getElementById('bouton_connection').disabled = true;

            let myObj
            if (id == "903") {
                myObj = {"0":{"0":"PETIOT","nom":"PETIOT","1":"Florian","prenom":"Florian","2":"TA","classe":"TA","3":"MATHS","spe1":"MATHS","4":"NSI","spe2":"NSI","5":"903","idprof1":"903","6":"901\/903","idprof2":"901\/903","7":"Le hasard est il vraiment al\u00e9atoire en informatique ?","question1":"Le hasard est il vraiment al\u00e9atoire en informatique ?","8":"NSI","q1spe1":"NSI","9":"MATHS","q1spe2":"MATHS","10":"","question2":"","11":"","q2spe1":"","12":"","q2spe2":""},"1":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TA","classe":"TA","3":"MATHS","spe1":"MATHS","4":"NSI","spe2":"NSI","5":"908","idprof1":"908","6":"901\/903","idprof2":"901\/903","7":"Quels sont les enjeux de l\u2019intelligence artificielle ?","question1":"Quels sont les enjeux de l\u2019intelligence artificielle ?","8":"NSI","q1spe1":"NSI","9":"","q1spe2":"","10":"","question2":"","11":"","q2spe1":"","12":"","q2spe2":""},"2":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TB","classe":"TB","3":"HGGSP","spe1":"HGGSP","4":"NSI","spe2":"NSI","5":"907","idprof1":"907","6":"901\/903","idprof2":"901\/903","7":"Cyberguerre : la 3\u00e8me guerre mondiale ?","question1":"Cyberguerre : la 3\u00e8me guerre mondiale ?","8":"HGGSP","q1spe1":"HGGSP","9":"NSI","q1spe2":"NSI","10":"","question2":"","11":"","q2spe1":"","12":"","q2spe2":""},"3":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TC","classe":"TC","3":"MATHS","spe1":"MATHS","4":"NSI","spe2":"NSI","5":"908","idprof1":"908","6":"901\/903","idprof2":"901\/903","7":"","question1":"","8":"","q1spe1":"","9":"","q1spe2":"","10":"","question2":"","11":"","q2spe1":"","12":"","q2spe2":""},"nom_prof":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx"}};            
            }
            else if (id == "999") {
                myObj = {"0":{"0":"PETIOT","nom":"PETIOT","1":"Florian","prenom":"Florian","2":"TA","classe":"TA","3":"Le hasard est il vraiment al\u00e9atoire en informatique ?","question1":"Le hasard est il vraiment al\u00e9atoire en informatique ?","4":"NSI","q1spe1":"NSI","5":"MATHS","q1spe2":"MATHS","6":"","question2":"","7":"","q2spe1":"","8":"","q2spe2":""},"1":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TA","classe":"TA","3":"En quoi le succ\u00e8s de Wikip\u00e9dia est-il r\u00e9v\u00e9lateur des nouveaux enjeux li\u00e9s \u00e0 la connaissance ?","question1":"En quoi le succ\u00e8s de Wikip\u00e9dia est-il r\u00e9v\u00e9lateur des nouveaux enjeux li\u00e9s \u00e0 la connaissance ?","4":"HGGSP","q1spe1":"HGGSP","5":"","q1spe2":"","6":"","question2":"","7":"","q2spe1":"","8":"","q2spe2":""},"2":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TA","classe":"TA","3":"Est-il possible d\u2019\u00e9liminer les d\u00e9chets r\u00e9sultant de l\u2019industrie nucl\u00e9aire ?","question1":"Est-il possible d\u2019\u00e9liminer les d\u00e9chets r\u00e9sultant de l\u2019industrie nucl\u00e9aire ?","4":"PC","q1spe1":"PC","5":"","q1spe2":"","6":"Comment la chimie dite \u00ab verte \u00bb est-elle au service de la protection de l'environnement ?","question2":"Comment la chimie dite \u00ab verte \u00bb est-elle au service de la protection de l'environnement ?","7":"PC","q2spe1":"PC","8":"SVT","q2spe2":"SVT"},"3":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TA","classe":"TA","3":"Peut-on parler de classes sociales au niveau europ\u00e9en ?","question1":"Peut-on parler de classes sociales au niveau europ\u00e9en ?","4":"SES","q1spe1":"SES","5":"","q1spe2":"","6":"Les migrants climatiques, quels visages du r\u00e9chauffement climatique ?","question2":"Les migrants climatiques, quels visages du r\u00e9chauffement climatique ?","7":"HGGSP","q2spe1":"HGGSP","8":"","q2spe2":""},"4":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TA","classe":"TA","3":"Quels sont les enjeux de l\u2019intelligence artificielle ?","question1":"Quels sont les enjeux de l\u2019intelligence artificielle ?","4":"NSI","q1spe1":"NSI","5":"","q1spe2":"","6":"Comment peut-on calculer l\u2019aire sous la courbe d\u2019une fonction ?","question2":"Comment peut-on calculer l\u2019aire sous la courbe d\u2019une fonction ?","7":"MATHS","q2spe1":"MATHS","8":"","q2spe2":""},"6":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TB","classe":"TB","3":"Cyberguerre : la 3\u00e8me guerre mondiale ?","question1":"Cyberguerre : la 3\u00e8me guerre mondiale ?","4":"HGGSP","q1spe1":"HGGSP","5":"NSI","q1spe2":"NSI","6":"","question2":"","7":"","q2spe1":"","8":"","q2spe2":""},"7":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TB","classe":"TB","3":"","question1":"","4":"","q1spe1":"","5":"","q1spe2":"","6":"","question2":"","7":"","q2spe1":"","8":null,"q2spe2":null},"8":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TB","classe":"TB","3":"","question1":"","4":"","q1spe1":"","5":"","q1spe2":"","6":"","question2":"","7":"","q2spe1":"","8":null,"q2spe2":null},"9":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TC","classe":"TC","3":"","question1":"","4":"","q1spe1":"","5":"","q1spe2":"","6":"","question2":"","7":"","q2spe1":"","8":"","q2spe2":""},"10":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TC","classe":"TC","3":"","question1":"","4":"","q1spe1":"","5":"","q1spe2":"","6":"","question2":"","7":"","q2spe1":"","8":"","q2spe2":""},"11":{"0":"XXXX","nom":"XXXX","1":"Xxxx","prenom":"Xxxx","2":"TC","classe":"TC","3":null,"question1":null,"4":null,"q1spe1":null,"5":null,"q1spe2":null,"6":null,"question2":null,"7":null,"q2spe1":null,"8":null,"q2spe2":null},"nom_prof":{"0":"Admin","nom":"Admin","1":"Admin","prenom":"Admin"}}
            }
            
            // ajout du bloc HTML dans la div "cadre-ext"
            let cadre_ext = document.getElementById('cadre-ext');
            let div = document.createElement('div');
            div.setAttribute('class', 'liste-questions large');
            div.setAttribute('id', 'liste-questions');

            // creation du bloc html à ajouter
            let html = "";

            html += "<h3 id='nom-prof'>Bonjour, " + myObj["nom_prof"].prenom + " " + myObj["nom_prof"].nom + "</h3>";
            html += "<button id='bouton-exporter' class='large' onclick='telecharger_questions()'>Exporter les questions</button>";
            if (id == '999'){
                html += "<button id='bouton-exporter' class='large' onclick='telecharger_rapport()'>Télécharger un rapport</button>";
            }
            html += "<hr>";

            for (let item in myObj) {

                if (item != "specialite" && item != "nom_prof") {
                    html += `<h4 class='prenom'>${myObj[item].nom} ${myObj[item].prenom} - ${myObj[item].classe}</h4>`;

                    if (myObj[item].question1 != "" && myObj[item].question1 != null) {   
                        if (myObj[item].q1spe2 === "") {
                            html += `<p class='question'>${myObj[item].q1spe1} - ${myObj[item].question1}</p>`;
                        }
                        else {
                            html += `<p class='question'>${myObj[item].q1spe1}, ${myObj[item].q1spe2} - ${myObj[item].question1}</p>`;
                        }
                    }

                    if (myObj[item].question2 != "" && myObj[item].question2 != null) { 
                        if (myObj[item].q2spe2 === "") {
                            html += `<p class='question'>${myObj[item].q2spe1} - ${myObj[item].question2}</p>`;
                        }
                        else {
                            html += `<p class='question'>${myObj[item].q2spe1}, ${myObj[item].q2spe2} - ${myObj[item].question2}</p>`;
                        }
                    }
                    html += "<hr>";
                }
            }
        
            div.innerHTML = html;
            cadre_ext.appendChild(div);

            document.getElementById('cadre-ext').style.paddingBottom = '10px';

            // baisser la page sur la premiere question
            document.getElementById("liste-questions").scrollIntoView({ behavior: "smooth" });

        }
    }
}



function telecharger_questions() {
    const id = document.getElementById('id').value;

    if (id == '903') {
        // telecharger "questions_eleves_903.xlsx"
        let link = document.createElement('a');
        link.href = "questions_eleves_903.xlsx";
        link.download = "questions_eleves_903.xlsx";
        link.click();
    }
    else if (id == '999') {
        // telecharger "questions_eleves_999.xlsx"
        let link = document.createElement('a');
        link.href = "questions_eleves_999.xlsx";
        link.download = "questions_eleves_999.xlsx";
        link.click();
    }

}



function telecharger_rapport() {
    // telecharger "Rapport_JYDAGO.xlsx"
    let link = document.createElement('a');
    link.href = "Rapport_JYDAGO.xlsx";
    link.download = "Rapport_JYDAGO.xlsx";
    link.click();
}