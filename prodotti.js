// by fradale2000
var cont = localStorage.length;
var cont_prod = 0;
var cont_canzone = 0;
var cont_artista = 0;
var cont_tot = 0;
var lista_prodotti= [];
var div = document.getElementById("div_prodotti");
for (let i = 0; i < 10; i++) {
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

    localStorage.setItem("account_" +cont_tot,JSON.stringify(prod));
    // localStorage.setItem("carello" +cont_tot,JSON.stringify(carello));
    lista_prodotti.push(prod);
    cont_prod ++;
    cont_canzone ++;
    cont_artista ++;
    cont_tot ++;
}
// localStorage.setItem("lista_prodotti" +cont_tot,JSON.stringify(lista_prodotti));
console.log(lista_prodotti);

for (let i = 0; i < lista_prodotti.length; i++) {
    var prod = lista_prodotti[i];   
    console.log(prod);
    let prodotto = document.createElement("div");
    prodotto.classList.add("song");
    prodotto.setAttribute("id",prod.IDProd);
    let titolo = document.createElement("span");
    titolo.innerHTML= `<span>Titolo : ${prod.Titolo}</span>`;
    let artista = document.createElement("span");
    artista.innerHTML= `<span>Artista : ${prod.Artista}</span>`;
    let anno = document.createElement("span");
    anno.innerHTML= `<span>Anno : ${prod.Anno}</span>`;
    let costo = document.createElement("span");
    costo.innerHTML= `<span>Costo : ${prod.Costo} €</span>`;
    div.append(prodotto);
    prodotto.append(titolo);
    prodotto.append(artista);
    prodotto.append(anno);
    prodotto.append(costo);    
}
// var a = { Topics: [] }; // define container with empty Topics array

// // add some topics

// a.Topics[1] = { topicId: 1, subTopicId: 1, topicName: "x", subTopicName: "x" };
// localStorage.setItem("prova" +cont_tot,JSON.stringify(a.Topics[1]));
// a.Topics[2] = { topicId: 1, subTopicId: 2, topicName: "x", subTopicName: "x" };
// a.Topics[62] = { topicId: 10, subTopicId: 62, topicName: "x", subTopicName: "x" };

// alert(a.Topics[1].topicName + " - " + a.Topics[1].subTopicName);