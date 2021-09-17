
let modalLinks = document.querySelectorAll(".modal-link");
let modalOuter = document.querySelector(".modal-outer");
let modalContent = document.querySelector(".modal-content");
let closeBtn = document.querySelector(".close-modal");

//Vi looper igennem alle links.
//For hvert link afvikles callback funktionen.
//element peger på det link som har "tur" i loopet.
modalLinks.forEach( function (element) {
    //vi propper en click på links of aflyser linkets
    //standard opførsel. (event) variablen repræsenterer selve click eventet.
    element.addEventListener("click", function(event){
        event.preventDefault();
        //Vi opsamler linkets href attribut og gemmer den i en variabel
        let modalHref = element.getAttribute("href");
        //Vi bruger variablen som argument i en querySelector for at få det rigtige HTML indhold.
        let modalHTML = document.querySelector(modalHref).innerHTML;
        //Vi propper idholdet ind i popup vinduet
        modalContent.innerHTML = modalHTML;
        //Vi skifter klasse på hele vores modal så den bliver synlig.
        modalOuter.classList.add("open")
    });
});

    


modalOuter.addEventListener("click", function(){
    modalOuter.classList.remove("open");
});

modalContent.addEventListener("click", function(event){
    event.stopPropagation();
});