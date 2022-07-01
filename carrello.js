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
            carrello.push(prod);
            console.log(carrello);
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
            carrello.push(prod);
            console.log(carrello);
        });
        div_bottoni_carrello.appendChild(div_bottone_meno);
        //appendo tutto nel div "record_carrello"
        let prodotto = document.createElement("div");
        prodotto.setAttribute("class","pro");
        prodotto.appendChild(div_immagine);
        prodotto.appendChild(titolo);
        prodotto.appendChild(artista);
        prodotto.appendChild(anno);
        prodotto.appendChild(costo);
        prodotto.appendChild(div_bottoni_carrello);
        div.appendChild(prodotto);   
    }
}