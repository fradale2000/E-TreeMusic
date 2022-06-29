// by fradale2000 & Edo(poco)
var cont = localStorage.length;
var cont_prod = 0;
var cont_canzone = 0;
var cont_artista = 0;
var cont_tot = 0;
var lista_prodotti= [];
var carello = [];
var modal = document.getElementById("myModal");
var div_desc_prod = document.getElementById("div_desc_prod");
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        div_desc_prod.innerHTML = "";
      modal.style.display = "none";
    }
}

function caricamento(){
    let cont_new = 0;
    while (localStorage.getItem('song_'+cont_new)!= null){
        lista_prodotti.push(JSON.parse(localStorage.getItem('song_'+cont_new)));
        cont_new++;
    }
    //localStorage.clear();
    //vari contatori per for oppure crezione di oggetti

    // let c = 0;
    // if (c == 0) {
    //     localStorage.clear();
    //     c++;
    // }
    //creo un tot di oggetti tramite for
    for (let i = 0; i < 5; i++) {
        let prod= {
            "IDProd":cont_prod,
            "Titolo":'canzone'+cont_canzone,
            "Artista":'artista'+cont_artista,
            "Anno":2020,
            "Genere":'rap',
            "Descrizione":'desc.',
            "Costo":3.50,
            "src": "Immagini/TestLogo.png",             
        }
        //salvo tutto nel localstorage
        localStorage.setItem("song_" +cont_tot,JSON.stringify(prod));
        // localStorage.setItem("carello" +cont_tot,JSON.stringify(carello));
        //  lista_prodotti.push(prod);
        cont_prod ++;
        cont_canzone ++;
        cont_artista ++;
        cont_tot ++;
    }
    var div = document.getElementById("div_prodotti");

    // localStorage.setItem("lista_prodotti" +cont_tot,JSON.stringify(lista_prodotti));
    console.log(lista_prodotti);
    //ciclo per creare tutti gli oggetti nella pagina in maniera dinamica
    for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.getItem('song_'+i)<lista_prodotti.length){
            continue
        }
        else{
            var prod = JSON.parse(localStorage.getItem("song_"+i));   
            console.log(prod);
            //creo un div per inserire la canzone in maniera dinamica
            let prodotto = document.createElement("div");
            //aggiungo la classe song
            prodotto.classList.add("song");
            //aggiungo un'id
            prodotto.setAttribute("id",prod.IDProd);
            prodotto.addEventListener("click", () => {
                let current_prod = lista_prodotti[prodotto.id];
                console.log(current_prod.Genere)
                console.log(lista_prodotti[prodotto.id].src)
                console.log(div_desc_prod)
                //immagine
                let immagine = document.createElement("img");
                immagine.setAttribute("src",lista_prodotti[prodotto.id].src);
                immagine.classList.add("modal-div_desc_prod-content");

                //titolo
                let titolo = document.createElement("span");
                titolo.innerHTML= `Titolo:${prodotto.children[1].innerHTML}`;
                titolo.classList.add("modal-div_desc_prod-content");

                //artista
                let artista = document.createElement("span");
                artista.innerHTML= ` Artista:${prodotto.children[2].innerHTML} `;
                artista.classList.add("modal-div_desc_prod-content");

                //anno
                let anno = document.createElement("span");
                anno.innerHTML= ` Anno:${prodotto.children[3].innerHTML} `;
                anno.classList.add("modal-div_desc_prod-content");

                //genere
                let genere = document.createElement("span");
                genere.innerHTML= ` Genere:${current_prod.Genere} `;
                genere.classList.add("modal-div_desc_prod-content");

                //descrizione
                let descrizione = document.createElement("span");
                descrizione.innerHTML= ` Descrizione:${current_prod.Descrizione} `;
                descrizione.classList.add("modal-div_desc_prod-content");

                //costo
                let costo = document.createElement("span");
                costo.innerHTML= ` Costo:${prodotto.children[4].innerHTML} `;
                costo.classList.add("modal-div_desc_prod-content");

                //bottone
                let bottone = document.createElement("button");
                bottone.classList.add("btn add btn-success");
                bottone.addEventListener("onclick", () =>{
                    carello.push(prod);
                    console.log(carello);
                });

                //append di tutti gli elementi
                div_desc_prod.appendChild(immagine);
                div_desc_prod.appendChild(titolo);
                div_desc_prod.appendChild(artista);
                div_desc_prod.appendChild(anno);
                div_desc_prod.appendChild(genere);
                div_desc_prod.appendChild(descrizione);
                div_desc_prod.appendChild(costo);
                div_desc_prod.appendChild(bottone);
                modal.style.display = "block";
            });
            let immagine = document.createElement("img");
            immagine.setAttribute("src",prod.src);
            let titolo = document.createElement("span");
            titolo.innerHTML= prod.Titolo;
            let artista = document.createElement("span");
            artista.innerHTML= prod.Artista;
            let anno = document.createElement("span");
            anno.innerHTML= prod.Anno;
            let costo = document.createElement("span");
            costo.innerHTML= prod.Costo+ " €";
            let bottone = document.createElement("button");
            bottone.classList.add("bottone_carrello");
            bottone.setAttribute("onclick", () =>{
                carello.push(prod);
                console.log(carello);
            });


            //appendo tutto nel div "div_prodotto"
            div.appendChild(prodotto);
            prodotto.appendChild(immagine);
            prodotto.appendChild(titolo);
            prodotto.appendChild(artista);
            prodotto.appendChild(anno);
            prodotto.appendChild(costo);
            prodotto.appendChild(bottone);
        }
    }
}
// var a = { Topics: [] }; // define container with empty Topics array

// // add some topics

// a.Topics[1] = { topicId: 1, subTopicId: 1, topicName: "x", subTopicName: "x" };
// localStorage.setItem("prova" +cont_tot,JSON.stringify(a.Topics[1]));
// a.Topics[2] = { topicId: 1, subTopicId: 2, topicName: "x", subTopicName: "x" };
// a.Topics[62] = { topicId: 10, subTopicId: 62, topicName: "x", subTopicName: "x" };

// alert(a.Topics[1].topicName + " - " + a.Topics[1].subTopicName);

function add(){
    cont_prod = localStorage.length;
    let titolo = document.getElementById('Titolo').value;
    let Art = document.getElementById('Artista').value;
    let Anno = document.getElementById('Anno').value;
    let Genere = document.getElementById('gen').value;
    let Descrizione = document.getElementById('desc').value;
    let Prezzo = document.getElementById('Prezzo').value;

    let new_prod= {
        "IDProd":cont_prod,
        "Titolo" : titolo,
        "Artista": Art,
        "Anno":Anno,
        "Genere":Genere,
        "Descrizione":Descrizione,
        "Costo":Prezzo,
        "src": "Immagini/TestLogo.png",             
    }
    localStorage.setItem("song_" +cont_prod,JSON.stringify(new_prod));
    cont_prod++;
}