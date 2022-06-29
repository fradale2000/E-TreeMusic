// by fradale2000 & Edo(poco)
var cont = localStorage.length;
var cont_prod = 0;
var cont_canzone = 0;
var cont_artista = 0;
var cont_tot = 0;
var lista_prodotti= [];
var modal = document.getElementById("myModal");
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
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

var div = document.getElementById("div_prodotti");
//creo un tot di oggetti tramite for
for (let i = 0; i < 2; i++) {
    
    let prod= {
        "IDProd":cont_prod,
        "Titolo":'canzone'+cont_canzone,
        "Artista":'artista'+cont_artista,
        "Anno":2020,
        "Genere":'rap',
        "Descrizione":'desc.',
        "Costo":3.50,
        "scr": "Immagini/TestLogo.png",             
    }
    
    //salvo tutto nel localstorage
    localStorage.setItem("song_" +cont_tot,JSON.stringify(prod));
    // localStorage.setItem("carello" +cont_tot,JSON.stringify(carello));
    lista_prodotti.push(prod);
    cont_prod ++;
    cont_canzone ++;
    cont_artista ++;
    cont_tot ++;
}

// localStorage.setItem("lista_prodotti" +cont_tot,JSON.stringify(lista_prodotti));
console.log(lista_prodotti);
//ciclo per creare tutti gli oggetti nella pagina in maniera dinamica
for (let i = 0; i < lista_prodotti.length; i++) {
    if(localStorage.getItem('song_'+i)<lista_prodotti.length){
        continue
    }else{
    let prod = lista_prodotti[i];   
    console.log(prod);
    //creo un div per inserire la canzone in maniera dinamica
    let prodotto = document.createElement("div");
    //aggiungo la classe song
    prodotto.classList.add("song");
    //aggiungo un'id
    prodotto.setAttribute("id",prod.IDProd);
    prodotto.addEventListener("click", () => {
        let div_desc_prod = document.getElementById("div_desc_prod");
        let cazzata = document.createElement("span");
        cazzata.innerHTML = "porcaputtana";
        div_desc_prod.appendChild(cazzata);
        modal.style.display = "block";
    });
    let immagine = document.createElement("img");
    immagine.setAttribute("src",prod.scr)
    let titolo = document.createElement("span");
    titolo.innerHTML= `<span>${prod.Titolo}</span>`;
    let artista = document.createElement("span");
    artista.innerHTML= `<span>${prod.Artista}</span>`;
    let anno = document.createElement("span");
    anno.innerHTML= `<span>${prod.Anno}</span>`;
    let costo = document.createElement("span");
    costo.innerHTML= `<span>${prod.Costo} €</span>`;
    //appendo tutto nel div "div_prodotto"
    div.appendChild(prodotto);
    prodotto.appendChild(immagine);
    prodotto.appendChild(titolo);
    prodotto.appendChild(artista);
    prodotto.appendChild(anno);
    prodotto.appendChild(costo);    
}}
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
    const titolo = document.getElementById('Titolo').value;
    const Art = document.getElementById('Artista').value;
    const Anno = document.getElementById('Anno').value;
    const Genere = document.getElementById('gen').value;
    const Descrizione = document.getElementById('desc').value;
    const Prezzo = document.getElementById('Prezzo').value;

    let new_prod= {
        "IDProd":cont_prod,
        "Titolo canzone" : titolo,
        "Artista": Art,
        "Anno":Anno,
        "Genere":Genere,
        "Descrizione":Descrizione,
        "Costo":Prezzo,
        "scr": "Immagini/TestLogo.png",             
    }
    localStorage.setItem("song_" +cont_prod,JSON.stringify(new_prod));
    cont_prod++;
}