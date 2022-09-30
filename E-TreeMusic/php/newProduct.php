<!DOCTYPE html>
<?php
    include('connect.php');
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./../css/effetticsspagin.css">
    <title>E-TreeMusic/registrazione</title>
</head>
<body>
    <div>
        <a href="index.html">
        </a>
    </div>

    <div class="container">
        <div class="TestLogo"> 
            <img src="/Immagini/TestLogo.png" id="logop">
        </div>
        <div class="brand-title">Aggiunta nuova Canzone </E-TreeMusic>
        </div>
        <div class="inputs">
            <form action = "#" method = " POST " >
                <label> Titolo</label>
                <input type="text" name="titolo" placeholder="Titolo" >

                <label>Artista</label>
                <select name="artista" id = "artista" onchange= Aggiunta_artista()>
                    <option value=0></option>
                    <?php
                        $query_artisti= "SELECT * from artisti ";
                        if($result= $con->query($query_artisti)){   
                            if($result->num_rows>0){
                                for ($i=0; $i < $result->num_rows; $i++) {
                                    $row = mysqli_fetch_assoc($result);
                                    echo "<option value=". $row['idartista'].">".$row['nome_artista']."</option>";
                                }
                            }                     
                        }
                    ?>      
                </select>
                <script>
                    function Aggiunta_artista() {//funzione js per far visualizzare TXTbox per aggiunta artista
                    let select = document.getElementById('artista')
                    if (select.value == 0) {
                        document.getElementById('Aggartista').style.display = 'block';
                        } else {
                        document.getElementById('Aggartista').style.display = 'none';
                        }
                    }
                </script>
                <div id = "Aggartista">
                <label>AGGIUNTA Artista</label>
                <input type="text" name="Aggartista" placeholder="Nuovo Artista" >
                </div>

                <label>Anno</label>
                <input type="text" name="anno" placeholder="Min 8 charaters long " >

                <label>Genere</label>
                <select name="genere" id = "genere" onchange=Aggiunta_genere()>
                    <option value="0"></option>
                    <?php
                        $query_artisti= "SELECT * from generi ";
                        if($result= $con->query($query_artisti)){   
                            if($result->num_rows>0){
                                for ($i=0; $i < $result->num_rows; $i++) {
                                    $row = mysqli_fetch_assoc($result);
                                    echo "<option value=". $row['idgenere'].">".$row['genere']."</option>";
                                }
                            }                     
                        }
                    ?>
                </select>
                <script>
                    function Aggiunta_genere() {//funzione js per far visualizzare TXTbox per aggiunta genere
                    let select = document.getElementById('genere')
                    if (select.value == 0) {
                        document.getElementById('Agggenere').style.display = 'block';
                        } else {
                        document.getElementById('Agggenere').style.display = 'none';
                        }
                    }
                </script>
                <div id="Agggenere" >
                <label>AGGIUNTA Genere</label>
                <input type="text"  name="Agggenere"  placeholder="Nuovo Genere">
                </div>
                <label>Descrizione</label>
                <input type="text" name="descrizione" placeholder="Last Name" >

                <label>Immagine</label>
                <input type="text" name="immagine" placeholder="Last Name" >
                
                <label>Costo</label>
                <input type="text" name="costo" placeholder="Ex. 4" >
                <button type="submit" name= "SubmitButton">Aggiungi Canzone
            </form>
        </div>
    </div>
    <?php
        if(isset($_REQUEST['SubmitButton'])){ //controlla se il pulsante aggiungi sia stato premuto
            $titolo = $_REQUEST['titolo'];
            //DESCRIZIONE
            $descrizione = $_REQUEST['descrizione'];
            //IMMAGINE
            $immagine = $_REQUEST['immagine'];
            //COSTO
            $costo = $_REQUEST['costo'];
            //ARTISTA
            $artista = "";
            $anno = $_REQUEST['anno'];
            $NuovoArtista = $_REQUEST['Aggartista'];
            if ($NuovoArtista != null) {//controllo se si voglia aggiungere un nuovo artista
                $query_agg = "INSERT INTO artisti (idartista, nome_artista) VALUES (NULL, '$NuovoArtista')";
                $result= $con->query($query_agg);
                echo "<script> alert('Artista aggiunto correttemente!');</scrip>";
                $query_artista = "SELECT idartista from artisti
                                where nome_artista = '$NuovoArtista'";
                if($result_artista= $con->query($query_artista)){
                    if($result_artista->num_rows>0){// se la query trova qualcosa
                    $row = mysqli_fetch_assoc($result_artista);
                    $artista = $row['idartista'];
                    }
                    else {
                        echo "<script> alert('Errore nell'aggiunta artista!');</script>";
                    }
                }
                else {
                    echo "<script> alert('Errore nell'aggiunta artista!');</script>";
                }
            } 
            else {
                $artista = $_REQUEST['artista'];
                $query_artista = "SELECT idartista from artisti
                                 where nome_artista = '$artista'";
                if($result= $con->query($query_artista)){
                    if($result->num_rows>0){// se la query trova qualcosa
                        $row = mysqli_fetch_assoc($result);
                        $artista = $row['idartista'];
                    }
                }
            }
            //GENERE
            $genere = "";
            $NuovoGenere = $_REQUEST['Agggenere'];
            if ($NuovoGenere != null) {//controllo se si voglia aggiungere un nuovo genere
                $query_agg = "INSERT INTO generi (idgenere, genere) VALUES (NULL, '$NuovoGenere')";
                $result_agggenere= $con->query($query_agg);
                echo "<script> alert('Genere aggiunto correttemente!');</script>";
                $query_genere = "SELECT * from generi
                                where genere = '$NuovoGenere'";
                if($result_genere= $con->query($query_genere)){
                    if($result_genere->num_rows>0){// se la query trova qualcosa
                    $result_genere = $con->query($query_genere);
                    $row = mysqli_fetch_assoc($result_genere);
                    $genere = $row['idgenere'];
                    }
                    else{
                        echo "<script> alert('Errore nell'aggiunta genere!');</script>";
                    }
                }
                else{
                    echo "<script> alert('Errore nell'aggiunta genere!');</script>";
                }
            } 
            else {
                $genere = $_REQUEST['genere'];
                $query_genere = "SELECT idgenere from generi
                                        where genere = '$genere'";
                if($result = $con->query($query_genere)){
                    if($result->num_rows>0){// se la query trova qualcosa
                        $row = mysqli_fetch_assoc($result);
                        $genere = $row['idgenere'];
                    }
                }
            }
            //query finale
            if($titolo == null or $artista == null or $anno == null or $genere == null or $costo == null){
                echo "<script> alert('Inserire tutti i campi per aggiungere la nuova canzone!');</script>";
            }else{ 
            $query = "INSERT INTO `prodotti` (`idprodotto`, `titolo`, `idartista`, `anno`, `idgenere`, `descrizione`, `immagine`, `costo`) 
                    VALUES (NULL, '$titolo', '$artista', '$anno', '$genere', '$descrizione', '$immagine', '$costo')";
            $result= $con->query($query);
            echo "<script> location.replace('prodotti.php');</script>";
            }
        }
    ?>
</body>
</html>
