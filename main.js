// by fradale2000 & Edo(poco)
var cont = localStorage.length;
var cont_prod = 0;
var cont_carrelli = 0;
var lista_prodotti= [];
var lista_carrelli = [];
var carrello_attuale = [];
var elem_carrello = document.getElementById("cont_carrello");
var cont_elem_carrello= 0;
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
    if (sessionStorage.length >= 2) {
        carrello_attuale =  JSON.parse(sessionStorage.getItem("carrello"));
    }
    
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
            "Anno": '2020',
            "Genere":'Rap',
            "Descrizione":'Tratto dall’album Persona, l’artista si dedica a raccontare le sue esperienze personali passate.',
            "Costo":2.59,
            "src": "Immagini/canzoni/CRUDELIA.jpg",
            "quantita": 0,
            "somma_costi": 0,            
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodA));
        cont_prod ++;
        let prodB= {
            "IDProd":cont_prod,
            "Titolo":'Falling Back',
            "Artista":'Drake',
            "Anno":'2022',
            "Genere":'R&B/HipHop',
            "Descrizione":'Drake è uno dei primi 10 artisti più ascoltati nel mondo.',
            "Costo":3.10,
            "src": "Immagini/canzoni/Falling_Back.jpg",
            "quantita": 0,
            "somma_costi": 0,              
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodB));
        cont_prod ++;
        let prodC= {
            "IDProd":cont_prod,
            "Titolo":'Puffin on Zootiez',
            "Artista":'Future',
            "Anno":'2022',
            "Genere":'Rap',
            "Descrizione":'tratto dall’album Gunna . DS4EVER',
            "Costo":1.50,
            "src": "Immagini/canzoni/Puffin_on_zooties.jpg",
            "quantita": 0,
            "somma_costi": 0,              
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodC));
        cont_prod ++;
        let prodD= {
            "IDProd":cont_prod,
            "Titolo":'Bimbi per strada',
            "Artista":'Fedez',
            "Anno":'2020',
            "Genere":'HipHop',
            "Descrizione":'Hit Estiva',
            "Costo":1.80,
            "src": "Immagini/canzoni/Bimbi_per_strada.jpg",
            "quantita": 0,
            "somma_costi": 0,              
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodD));
        cont_prod ++;
        let prodE= {
            "IDProd":cont_prod,
            "Titolo":'Casablanca',
            "Artista":'BabyGang',
            "Anno":'2021',
            "Genere":'Rap',
            "Descrizione":'Giovane rapper con problemi legali racconta la sua vita per strada',
            "Costo":1.50,
            "src": "Immagini/canzoni/Casablanca.jpg",
            "quantita": 0,
            "somma_costi": 0,              
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodE));
        cont_prod ++;
        let prodF= {
            "IDProd":cont_prod,
            "Titolo":'Shakerando',
            "Artista":'Rhove',
            "Anno":'2021',
            "Genere":'Rap',
            "Descrizione":' Giovane ragazzo di provincia ci propone uno stile influenzato dalla Francia',
            "Costo":1.20,
            "src": "Immagini/canzoni/Shakerando.jpg",
            "quantita": 0,
            "somma_costi": 0,              
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodF));
        cont_prod ++;
        let prodG= {
            "IDProd":cont_prod,
            "Titolo":'0ffline',
            "Artista":'thasupreme',
            "Anno":'2020',
            "Genere":'Rap',
            "Descrizione":'Piace alla prof zarini',
            "Costo":0.99,
            "src": "Immagini/canzoni/0ffline.jpg",
            "quantita": 0,
            "somma_costi": 0,              
        }
        localStorage.setItem("song_" +cont_prod,JSON.stringify(prodG));
        cont_prod ++;
        //salvo tutto nel localstorage
    var div = document.getElementById("div_prodotti");

    console.log(lista_prodotti);
    //ciclo per creare tutti gli oggetti nella pagina in maniera dinamica
    for (let i = 0; i < localStorage.length; i++) {  //-------------------------6546415649/867465
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
//--------------------------------------------------------------------------
//                             INIZIO MODAL
            div_cliccabile.addEventListener("click",() => {
                let current_prod = lista_prodotti[prodotto.id];
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
                    let current_prod = lista_prodotti[prodotto.id];
                    if (carrello_attuale.length <=0) {
                        current_prod.quantita++;
                        carrello_attuale.push(current_prod);
                        SetLocal(carrello_attuale,lista_prodotti,prodotto);
                    }
                    else{
                        let prod_presente = carrello_attuale.find(element => element.IDProd === current_prod.IDProd);
                        if ( prod_presente !== undefined) {
                            prod_presente.quantita++;
                            SetLocal(carrello_attuale,lista_prodotti,prodotto);
                        } else{
                            current_prod.quantita++;
                            carrello_attuale.push(current_prod);
                            SetLocal(carrello_attuale,lista_prodotti,prodotto);
                        }
                    }
                    cont_elem_carrello++;
                    elem_carrello.innerHTML = cont_elem_carrello;
                    console.log(carrello_attuale);
                    
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
            //            FINE MODAL
//-----------------------------------------------------------
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
                let current_prod = lista_prodotti[prodotto.id];
                if (carrello_attuale.length <=0) {
                    current_prod.quantita++;
                    carrello_attuale.push(current_prod);
                    SetLocal(carrello_attuale,lista_prodotti,prodotto);
                }
                else{
                    let prod_presente = carrello_attuale.find(element => element.IDProd === current_prod.IDProd);
                    if ( prod_presente !== undefined) {
                        prod_presente.quantita++;
                        SetLocal(carrello_attuale,lista_prodotti,prodotto);
                    } else{
                        current_prod.quantita++;
                        carrello_attuale.push(current_prod);
                        SetLocal(carrello_attuale,lista_prodotti,prodotto);
                    }
                }
                cont_elem_carrello++;
                elem_carrello.innerHTML = cont_elem_carrello;
                console.log(carrello_attuale);
                
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
    if (sessionStorage.length >= 2) {
        for (let i = 0; i < carrello_attuale.length; i++) {
            cont_elem_carrello += carrello_attuale[i].quantita;
        }
        elem_carrello.innerHTML = cont_elem_carrello;
    }
    
}

//--------------------------------------------------------------------QUI
function lastAdded(){
    let div = document.getElementById("lista_ultime_aggiunte");
        for (let i = (localStorage.length-1); i > (localStorage.length-6); i--){
            var prod = JSON.parse(localStorage.getItem("song_"+i));   
            console.log(prod);
            //creo un div per inserire la canzone in maniera dinamica
            let prodotto = document.createElement("div");
            let last = document.createElement("div");
            //aggiungo la classe song
            prodotto.classList.add("song");
            last.classList.add("last");
            //aggiungo un'id
            prodotto.setAttribute("id",prod.IDProd);
            let div_immagine = document.createElement("div");
            let immagine = document.createElement("img");
            immagine.setAttribute("src",prod.src);
            immagine.classList.add("immagine");
            div_immagine.classList.add("div_immagine");
            div_immagine.appendChild(immagine);
            
            let titolo = document.createElement("span");
            titolo.innerHTML= prod.Titolo;
            last.appendChild(div_immagine);
            last.appendChild(titolo);
            prodotto.setAttribute("class" , "ultime_aggiunte" );
            prodotto.appendChild(last);
            div.appendChild(prodotto);
    }
}

//----------------------------------------------------------------------
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
        "quantita": 0,
        "somma_costi": 0,             
    }
    localStorage.setItem("song_" +cont_prod,JSON.stringify(new_prod));
    cont_prod++;
}
//-----------------------------------------------------------------------------------------
//     FILTRI DI RICERCA 
function Search(){
    let ART = document.getElementById("SArtista").value; // prendo il valore nella prima searchbar
    let ANNO = document.getElementById("SYear").value; // prendo il valore nella seconda searchbar
    let GEN = document.getElementById("SGenere").value; // prendo il valore nella terza searchbar

    if (ART=="" && ANNO=="" && GEN==""){ //SE TUTTE SONO VUOTE "BLOCK" A TUTTI I PRODOTTI
        for (let i = 0; i < lista_prodotti.length; i++) {
            document.getElementById(i).style.display = "block";
            }
        }
    else{
        for (let i = 0; i < lista_prodotti.length; i++) {
            if(ART != "" && ANNO=="" && GEN==""){       //SE IL CAMPO ARTISTA NON è VUOTO E GLI ALTRI SI,ENTRA
                // VECCHIO METODO           if(ART.toUpperCase() == (lista_prodotti[i].Artista).toUpperCase()){ 
                if(((lista_prodotti[i].Artista).toUpperCase()).includes(ART.toUpperCase())){ 
                                      document.getElementById(i).style.display = "block";   
                                }else{
                                    document.getElementById(i).style.display = "none";   
                                } }

            if (ANNO != "" && ART =="" && GEN==""){              //SE IL CAMPO ANNO NON è VUOTO E GLI ALTRI SI,ENTRA
                // VECCHIO METODO           if(ANNO.toUpperCase() == (lista_prodotti[i].Anno).toUpperCase()){ 
                    if(((lista_prodotti[i].Anno).toUpperCase()).includes(ANNO.toUpperCase())){     
                                    document.getElementById(i).style.display = "block";   
                            }else{ 
                                    document.getElementById(i).style.display = "none";
                                } 
                            }

            if(GEN != "" && ANNO=="" && ART==""){                //SE IL CAMPO GENERE NON è VUOTO E GLI ALTRI SI,ENTRA               
                // VECCHIO METODO           if(GEN.toUpperCase() == (lista_prodotti[i].Genere).toUpperCase()){
                    if(((lista_prodotti[i].Genere).toUpperCase()).includes(GEN.toUpperCase())){    
                                    document.getElementById(i).style.display = "block";   
                            }else{
                                    document.getElementById(i).style.display = "none";   
                                }
                        }

            if(ART != "" && ANNO != "" && GEN == ""){           //SE IL CAMPO ARTISTA E ANNO NON SONO VUOTI ENTRA
                // VECCHIO METODO           if(ART.toUpperCase() == (lista_prodotti[i].Artista).toUpperCase() && ANNO.toUpperCase() == (lista_prodotti[i].Anno).toUpperCase()){ 
                if(((lista_prodotti[i].Artista).toUpperCase()).includes(ART.toUpperCase())&&((lista_prodotti[i].Anno).toUpperCase()).includes(ANNO.toUpperCase())){   
                                    document.getElementById(i).style.display = "block";   
                            }else{
                                    document.getElementById(i).style.display = "none";   
                                }
                            }

            if(ART != "" && ANNO == "" && GEN != ""){      //SE IL CAMPO ARTISTA E GENERE NON SONO VUOTI ENTRA
                // VECCHIO METODO           if(ART.toUpperCase() == (lista_prodotti[i].Artista).toUpperCase() && GEN.toUpperCase() == (lista_prodotti[i].Genere).toUpperCase()){ 
                if(((lista_prodotti[i].Artista).toUpperCase()).includes(ART.toUpperCase())&&((lista_prodotti[i].Genere).toUpperCase()).includes(GEN.toUpperCase())){   
                                    document.getElementById(i).style.display = "block";   
                            }else{
                                    document.getElementById(i).style.display = "none";   
                                    }
                            }
                            
            if(ART == "" && ANNO != "" && GEN != ""){      //SE IL CAMPO ANNO E GENERE NON SONO VUOTI ENTRA
                // VECCHIO METODO           if(ANNO.toUpperCase() == (lista_prodotti[i].Anno).toUpperCase() && GEN.toUpperCase() == (lista_prodotti[i].Genere).toUpperCase()){
                if(((lista_prodotti[i].Anno).toUpperCase()).includes(ANNO.toUpperCase())&&((lista_prodotti[i].Genere).toUpperCase()).includes(GEN.toUpperCase())){
                                    document.getElementById(i).style.display = "block";   
                            }else{
                                    document.getElementById(i).style.display = "none";   
                                    }
                            }     
                            
            if(ART != "" && ANNO != "" && GEN != ""){      //SE TUTTI I CAMPI NON SONO VUOTI,ENTRA
                // VECCHIO METODO           if(ART.toUpperCase() == (lista_prodotti[i].Artista).toUpperCase() && ANNO.toUpperCase() == (lista_prodotti[i].Anno).toUpperCase() && GEN.toUpperCase() == (lista_prodotti[i].Genere).toUpperCase()){
                  if(((lista_prodotti[i].Artista).toUpperCase()).includes(ART.toUpperCase())&&((lista_prodotti[i].Anno).toUpperCase()).includes(ANNO.toUpperCase())&&((lista_prodotti[i].Genere).toUpperCase()).includes(GEN.toUpperCase())){    
                                    document.getElementById(i).style.display = "block";   
                            }else{
                                    document.getElementById(i).style.display = "none";   
                                    }
                            }    

        }//chiusura FOR
    }//chiusura ELSE
}//chiusura FUNZIONE

//FINE FILTRI
//--------------------------------------------------------------------------------------------
//funzione per settare nel SessionStorage il carrello aggiornato
function SetLocal(carrello_attuale,lista_prodotti,prodotto){
    if (sessionStorage.length <=1) {
        sessionStorage.setItem("carrello",JSON.stringify(carrello_attuale));
    }
    else{
        let carrello_salvato = JSON.parse(sessionStorage.getItem("carrello"));
        let current_prod = lista_prodotti[prodotto.id];  
        //controllo nel carrelo salvato se il prodotto corrente(quello selezionato) è già presente nel carrelo
        let prod_presente = carrello_salvato.find(element => element.IDProd === current_prod.IDProd);
        if ( prod_presente !== undefined) {
            sessionStorage.setItem("carrello",JSON.stringify(carrello_attuale));
        } else{
            carrello_salvato.push(current_prod);
            sessionStorage.setItem("carrello",JSON.stringify(carrello_salvato));
        }     
    }
}

function printCarll(){
    var div = document.getElementById("record_carrello");
    let carrello_salvato =  JSON.parse(sessionStorage.getItem("carrello"));
    var elem_carrello = document.getElementById("cont_carrello");
    let prezzo_totale = 0;
    let cont_new = 0;
    while (localStorage.getItem('song_'+cont_new)!= null){
        lista_prodotti.push(JSON.parse(localStorage.getItem('song_'+cont_new)));
        cont_new++;
    }
    for (let i = 0; i < carrello_salvato.length; i++) {
        cont_elem_carrello += carrello_salvato[i].quantita;
    }
    elem_carrello.innerHTML = cont_elem_carrello;
    for (let i = 0; i < carrello_salvato.length; i++){
        var prod = carrello_salvato[i];
        let prodotto = document.createElement("div");
        prodotto.setAttribute("id",prod.IDProd);
        let div_immagine = document.createElement("div");
        let immagine = document.createElement("img");
        immagine.classList.add("immagine");
        div_immagine.classList.add("div_immagine");
        div_immagine.appendChild(immagine);
        immagine.setAttribute("src",prod.src);
        let titolo = document.createElement("span");
        titolo.innerHTML= prod.Titolo;
        let artista = document.createElement("span");
        artista.innerHTML= prod.Artista;
        let anno = document.createElement("span");
        anno.innerHTML= prod.Anno;
        // let costo = document.createElement("span");
        // costo.innerHTML= prod.Costo+ " €";
        let somma = document.createElement("span");
        somma.innerHTML = prod.Costo*prod.quantita;
        

            
        //div per distanziare i bottoni del carrello
        let div_bottoni_carrello = document.createElement("div_bottoni_carrello");
        div_bottoni_carrello.classList.add("div_bottoni_carrello");
        //bottone +
        let div_bottone_piu = document.createElement("div");
        let bottone_piu = document.createElement("img");
        bottone_piu.setAttribute("src","Immagini/vinile+.png");
        bottone_piu.classList.add("bottone");
        div_bottone_piu.classList.add("bottoni_carrello");
        div_bottone_piu.classList.add("div_bottoni_carrello");
        div_bottone_piu.appendChild(bottone_piu);
        div_bottone_piu.addEventListener("click", () =>{
            let current_prod = lista_prodotti[prodotto.id];
            let prod_presente = carrello_salvato.find(element => element.IDProd === current_prod.IDProd);
            if ( prod_presente !== undefined) {
                prod_presente.quantita++;
                location.reload();
                SetLocal(carrello_salvato,lista_prodotti,prodotto);
            } else{
                current_prod.quantita++;
                carrello.push(current_prod);
                location.reload();
                SetLocal(carrello_salvato,lista_prodotti,prodotto);
            }
            console.log(carrello);
            cont_elem_carrello++;
            elem_carrello.innerHTML = cont_elem_carrello;
        });
        div_bottoni_carrello.appendChild(div_bottone_piu);

        //bottone -
        let div_bottone_meno = document.createElement("div");
        let bottone_meno = document.createElement("img");
        bottone_meno.setAttribute("src","Immagini/vinile-.png");
        bottone_meno.classList.add("bottone");
        div_bottone_meno.classList.add("bottoni_carrello");
        div_bottone_meno.classList.add("div_bottoni_carrello");
        div_bottone_meno.appendChild(bottone_meno);
        div_bottone_meno.addEventListener("click", () =>{
            let current_prod = lista_prodotti[prodotto.id];
            let prod_presente = carrello_salvato.find(element => element.IDProd === current_prod.IDProd);
            if ( prod_presente !== undefined) {
                prod_presente.quantita--;
                if (prod_presente.quantita == 0) {
                    carrello_salvato.splice(i,1);
                }
                location.reload();
                SetLocal(carrello_salvato,lista_prodotti,prodotto);
            } else{
                current_prod.quantita--;
                if (prod_presente.quantita == 0) {
                    carrello_salvato.splice(i,1);
                }
                carrello.push(current_prod);
                location.reload();
                SetLocal(carrello_salvato,lista_prodotti,prodotto);
            }
            console.log(carrello);
            cont_elem_carrello--;
            elem_carrello.innerHTML = cont_elem_carrello;
        });
        div_bottoni_carrello.appendChild(div_bottone_meno);

        let quantita = document.createElement("span");
        quantita.innerHTML= "Quantità: "+prod.quantita;
       
        prodotto.setAttribute("class","pro");
        prodotto.appendChild(div_immagine);
        prodotto.appendChild(titolo);
        prodotto.appendChild(artista);
        prodotto.appendChild(anno);
        prodotto.appendChild(somma);
        prodotto.appendChild(quantita);
        prodotto.appendChild(div_bottoni_carrello);
        div.appendChild(prodotto);   
    }
    div_prezzo = document.createElement("div");
    prezzo= document.createElement("span");
    prezzo.innerHTML = prezzo_totale;
    div.appendChild(div_prezzo);
}

function CloseCarll(){
    if (sessionStorage.length <= 2 ) {
        let carrello_salvato =  JSON.parse(sessionStorage.getItem("carrello"));
        let carrl = {
            "nome": "carrello_"+(lista_carrelli.length),
            "elementi": carrello_salvato
        }
        lista_carrelli.push(carrl);
        sessionStorage.setItem("lista_carrelli",JSON.stringify(lista_carrelli));
        carrello_salvato.splice(0,carrello_salvato.length);
        sessionStorage.setItem("carrello",JSON.stringify(carrello_salvato));
        location.reload();
    }
    else {
        let carrello_salvato =  JSON.parse(sessionStorage.getItem("carrello"));
        lista_carrelli = JSON.parse(sessionStorage.getItem("lista_carrelli"));
        let carrl = {
            "nome": "carrello_"+ (lista_carrelli.length),
            "elementi": carrello_salvato
        }
        lista_carrelli.push(carrl);
        sessionStorage.setItem("lista_carrelli",JSON.stringify(lista_carrelli));
        carrello_salvato.splice(0,carrello_salvato.length);
        sessionStorage.setItem("carrello",JSON.stringify(carrello_salvato));
        location.reload();
    }
    
}