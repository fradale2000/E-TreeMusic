// by fradale2000 & Edo(poco)
var cont = localStorage.length;
var cont_prod = 0;
var lista_prodotti= [];
var carrello = [];
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
           //for (let i = 0; i < 5; i++) {                                    /////TEST\\\\
        let prodA= {
            "IDProd":cont_prod,
            "Titolo": 'CRUDELIA - i nervi' ,
            "Artista":'Marracash',
            "Anno":2020,
            "Genere":'Rap',
            "Descrizione":'Tratto dall’album Persona, l’artista si dedica a raccontare le sue esperienze personali passate.',
            "Costo":2.59,
            "src": "Immagini/canzoni/CRUDELIA.jpg",             
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodA));
        cont_prod ++;
        let prodB= {
            "IDProd":cont_prod,
            "Titolo":'Falling Back',
            "Artista":'Drake',
            "Anno":2022,
            "Genere":'R&B/HipHop',
            "Descrizione":'Drake è uno dei primi 10 artisti più ascoltati nel mondo.',
            "Costo":3.10,
            "src": "Immagini/canzoni/Falling_Back.jpg",             
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodB));
        cont_prod ++;
        let prodC= {
            "IDProd":cont_prod,
            "Titolo":'Puffin on Zootiez',
            "Artista":'Future',
            "Anno":2022,
            "Genere":'Rap',
            "Descrizione":'tratto dall’album Gunna . DS4EVER',
            "Costo":1.50,
            "src": "Immagini/canzoni/Puffin_on_zooties.jpg",             
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodC));
        cont_prod ++;
        let prodD= {
            "IDProd":cont_prod,
            "Titolo":'Bimbi per strada',
            "Artista":'Fedez',
            "Anno":2020,
            "Genere":'HipHop',
            "Descrizione":'Hit Estiva',
            "Costo":1.80,
            "src": "Immagini/canzoni/Bimbi_per_strada.jpg",             
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodD));
        cont_prod ++;
        let prodE= {
            "IDProd":cont_prod,
            "Titolo":'Casablanca',
            "Artista":'BabyGang',
            "Anno":2021,
            "Genere":'Rap',
            "Descrizione":'Giovane rapper con problemi legali racconta la sua vita per strada',
            "Costo":1.50,
            "src": "Immagini/canzoni/Casablanca.jpg",             
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodE));
        cont_prod ++;
        let prodF= {
            "IDProd":cont_prod,
            "Titolo":'Shakerando',
            "Artista":'Rhove',
            "Anno":2021,
            "Genere":'Rap',
            "Descrizione":' Giovane ragazzo di provincia ci propone uno stile influenzato dalla Francia',
            "Costo":1.20,
            "src": "Immagini/canzoni/Shakerando.jpg",             
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodF));
        cont_prod ++;
        let prodG= {
            "IDProd":cont_prod,
            "Titolo":'0ffline',
            "Artista":'thasupreme',
            "Anno":2020,
            "Genere":'Rap',
            "Descrizione":'Piace alla prof zarini',
            "Costo":0.99,
            "src": "Immagini/canzoni/0ffline.jpg",             
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodG));
        cont_prod ++;
        //salvo tutto nel localstorage
    
        // localStorage.setItem("carello" +cont_tot,JSON.stringify(carello));
        //  lista_prodotti.push(prod);
        // cont_canzone ++;
        // cont_artista ++;
        // cont_tot ++;
    //}
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
            let div_cliccabile = document.createElement("div");
            //aggiungo la classe song
            prodotto.classList.add("song");
            div_cliccabile.classList.add("div_cliccabile");
            //aggiungo un'id
            prodotto.setAttribute("id",prod.IDProd);
            //creo un'evento click
            div_cliccabile.addEventListener("click",() => {
                let current_prod = lista_prodotti[prodotto.id];
                // console.log(current_prod.Genere);
                // console.log(lista_prodotti[prodotto.id].src);
                // console.log(div_desc_prod);
                //immagine
                let div_immagine = document.createElement("div");
                let immagine = document.createElement("img");
                immagine.setAttribute("src",lista_prodotti[prodotto.id].src);
                immagine.classList.add("modal-div_desc_prod-content");
                immagine.classList.add("immagine");
                // div_immagine.classList.add("div_immagine");
                div_immagine.style.width = "200px";
                div_immagine.style.height = "200px";
                div_immagine.appendChild(immagine);

                //titolo
                let titolo = document.createElement("span");
                titolo.innerHTML= `Titolo:${div_cliccabile.children[1].innerHTML}`;
                titolo.classList.add("modal-div_desc_prod-content");

                //artista
                let artista = document.createElement("span");
                artista.innerHTML= ` Artista:${div_cliccabile.children[2].innerHTML} `;
                artista.classList.add("modal-div_desc_prod-content");

                //anno
                let anno = document.createElement("span");
                anno.innerHTML= ` Anno:${div_cliccabile.children[3].innerHTML} `;
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
                costo.innerHTML= ` Costo:${div_cliccabile.children[4].innerHTML} `;
                costo.classList.add("modal-div_desc_prod-content");

                //bottone
                let div_bottone = document.createElement("div");
                let bottone = document.createElement("img");
                bottone.setAttribute("src","Immagini/vinile+.png");
                bottone.classList.add("bottone");
                div_bottone.classList.add("div_bottone");
                div_bottone.appendChild(bottone);
                div_bottone.addEventListener("click", () =>{
                    carrello.push(prod);
                    console.log(carrello);
                });

                //append di tutti gli elementi
                div_desc_prod.appendChild(div_immagine);
                div_desc_prod.appendChild(titolo);
                div_desc_prod.appendChild(artista);
                div_desc_prod.appendChild(anno);
                div_desc_prod.appendChild(genere);
                div_desc_prod.appendChild(descrizione);
                div_desc_prod.appendChild(costo);
                div_desc_prod.appendChild(div_bottone);
                modal.style.display = "block";
            });
            let div_immagine = document.createElement("div");
            let immagine = document.createElement("img");
            immagine.setAttribute("src",prod.src);
            immagine.classList.add("immagine");
            div_immagine.classList.add("div_immagine");
            div_immagine.appendChild(immagine);
            
            let titolo = document.createElement("span");
            titolo.innerHTML= prod.Titolo;
            let artista = document.createElement("span");
            artista.innerHTML= prod.Artista;
            let anno = document.createElement("span");
            anno.innerHTML= prod.Anno;
            let costo = document.createElement("span");
            costo.innerHTML= prod.Costo+ " €";
            
            let div_bottone = document.createElement("div");
            let bottone = document.createElement("img");
            bottone.setAttribute("src","Immagini/vinile+.png");
            bottone.classList.add("bottone");
            div_bottone.classList.add("div_bottone");
            div_bottone.appendChild(bottone);
            div_bottone.addEventListener("click", () =>{
                carrello.push(current_prod);
                console.log(carrello);
            });

            //appendo tutto nel div "div_prodotto"
            div_cliccabile.appendChild(div_immagine);
            div_cliccabile.appendChild(titolo);
            div_cliccabile.appendChild(artista);
            div_cliccabile.appendChild(anno);
            div_cliccabile.appendChild(costo);
            prodotto.appendChild(div_cliccabile);
            prodotto.appendChild(div_bottone);
            div.appendChild(prodotto);
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