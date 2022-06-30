function printCarll(){
    var div = document.getElementById("record_carrello");
    
    for (let i = 0; i < localStorage.length; i++){
        localStorage.getItem("song_" +i,JSON.stringify(prod));
        var prod = JSON.parse(localStorage.getItem("song_"+i));
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
        let costo = document.createElement("span");
        costo.innerHTML= prod.Costo+ " €";
            
        //appendo tutto nel div "record_carrello"
        let prodotto = document.createElement("div");
        prodotto.setAttribute("class","pro")
        prodotto.appendChild(div_immagine);
        prodotto.appendChild(titolo);
        prodotto.appendChild(artista);
        prodotto.appendChild(anno);
        prodotto.appendChild(costo);
        div.appendChild(prodotto);   
    }
}