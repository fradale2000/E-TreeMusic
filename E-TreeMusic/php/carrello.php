<!DOCTYPE html>
<?php
    include("connect.php");
    require_once('header.php');
    session_start();
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./../css/cssmusica.css">
    <title>Carrello</title>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-242609135-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-242609135-1');
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body id="body" onload="lastAdded()"> 
    
    <h1>Il mio carrello</h1>

   
    <?php
     //stampa a schermo dei prodotti
        $total = 0;
        echo "<div id = 'div_prodotti'>";
         $query="SELECT * FROM prodotti
                 inner join artisti on prodotti.idartista = artisti.idartista
                 inner join generi on prodotti.idgenere = generi.idgenere";// seleziono tutti i prodotti
         if($result= $con->query($query)){
             $product_id = array_column($_SESSION['carrello'] , "idprodotto");

             while ($row = mysqli_fetch_assoc($result)){
                 foreach ($product_id as $id){
                     if ($row['idprodotto'] == $id){
                        $total = $total + (int)$row['costo'];
                        $_SESSION['totale'] = $total;
                        echo"
                        <div class='grid' name ='prodotto' class='div_prodotto'>
                            <form action='#' method='post'>
                                <figure class='effect-goliath'>
                                <img src='./../Immagini/".$row['immagine']."'>
                                    <figcaption>
                                            <h2><span>".$row['titolo']."</span></h2>
                                            <p>".$row['nome_artista']." - ".$row['anno']." - ".$row['genere']." - ".$row['costo']."€"." 
                                            </p>
                                                            
                                    </figcaption>	
                                        
                                </figure>
                                <button type='submit' name='Rem'>Rimuovi</button>
                                    <input type='hidden' name='idprodotto' value=".$row['idprodotto'].">
                            </form>	
                        </div>";
                    }

                 }
             }
         }else{
             echo "<h5>Il carrello è vuoto</h5>";
         }
        echo "</div>";

?>


<?php
            //rimozione prodotto dal carrello
    if (isset($_POST['Rem'])){
        foreach ($_SESSION['carrello'] as $key => $value){ //per ogni valore nella sessione

            $controllo = $_POST['idprodotto']; //assegna valore a controllo=al valore del prodotto inserito

            if($value["idprodotto"] == $controllo ){
                unset($_SESSION['carrello'][$key]);
                echo "<script>window.location = 'carrello.php'</script>";
                   }
            }
        }
    

?>


    <form action='' method='post'>
        <h6>Dettaglio Prezzo</h6>
        <hr>
        <div class="row price-details">
            <div class="col-md-6">
                <?php
                    if (isset($_SESSION['carrello'])){
                        $count  = count($_SESSION['carrello']);
                        echo "<h6>canzoni:  ($count items)</h6>";
                    }else{
                        echo "<h6>canzoni: (0 items)</h6>";
                    }
                ?>
        
                <hr>
                <h6>Totale</h6>
                <button type="submit"  name="buy">Compra</button>
            </div>

            <?php
                //acquisto carrelli
                if (isset($_POST['buy'])){

                    if( count($_SESSION['carrello'])== 0){
                        echo "<script>alert('Il carrello è vuoto!')</script>";
                    }else{

                    $creaCarrello="INSERT INTO lista_carrelli (idcarrello  ,idutente, data_chiusura,totale) VALUES (NULL,".$_SESSION['idutente'].", current_timestamp(),".$_SESSION['totale']." )" ;
                    $con->query($creaCarrello);

                    $selezCarrello = "SELECT * FROM lista_carrelli ORDER BY idcarrello DESC LIMIT 1;";
                    $result= $con->query($selezCarrello);
                    if($result->num_rows>0) {     // se la query trova qualcosa
                        $row = mysqli_fetch_assoc($result); //prendo il risultato e lo trasformo in array
                        $carrelloatt = $row['idcarrello'];
                    }

                    

                    foreach ($_SESSION['carrello'] as $key => $value){ //per ogni valore nella sessione
                        $inserisci="INSERT INTO contenuto_carrelli(idcontenuto_carrelli , idcarrello , idprodotto) 
                                    VALUES (NULL ," . $carrelloatt . ",".$value['idprodotto'].") ";
                        $con->query($inserisci);
                        unset($_SESSION['carrello'][$key]);

                        }
                        echo "<script>window.location = 'prodotti.php'</script>";
                }    
            }
            ?>

            <div class="">
                <h6>€<?php echo $total; ?></h6>
                <hr>
                <h6>€<?php
                    echo $total;
                    ?></h6>

                
            </div>
        </div>
    </form>
      
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <?php
        require_once('footer.php');
    ?>
</body>
</html>