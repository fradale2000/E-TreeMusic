<!DOCTYPE html>
<?php
include("connect.php");
session_start();
require_once('header.php');
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./../css/cssmusica.css">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-242609135-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-242609135-1');
    </script>
    <!-- link per analytics https://analytics.google.com/analytics/web/provision/#/a242609135w333757916p276262199/admin/tracking/tracking-code/ -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>E-TreeMusic</title>
</head>
 
    
    <h1>E-TreeMusic</h1>


    <div id="filtri">
        <form action='' method="POST">
        <select name="filtro_artista" id = "filtro_artista">
        <option value="0">Tutti</option>
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


        <select name="filtro_genere" id = "filtro_genere">
        <option value="0">Tutti</option>
        <?php
            $query_generi= "SELECT * from generi ";
            if($result= $con->query($query_generi)){   
                if($result->num_rows>0){
                    for ($i=0; $i < $result->num_rows; $i++) {
                        $row = mysqli_fetch_assoc($result);
                        echo "<option value=". $row['idgenere'].">".$row['genere']."</option>";
                    }
                }                     
            }
        ?>
        </select>
        <select name="filtro_anno" id = "filtro_anno" >
            <option value="0">Tutti</option>
            <?php
                $array_anni = array();
                $query_anni= "SELECT anno from prodotti GROUP BY anno;";
                if($result= $con->query($query_anni)){   
                    if($result->num_rows>0){
                        for ($i=0; $i < $result->num_rows; $i++) {
                            $row = mysqli_fetch_assoc($result);
                            echo "<option value=".(int)$row['anno'].">".(int)$row['anno']."</option>";
                        }
                    }                     
                }
            ?>
        </select>
                <input type="submit" name='filtro' value ="INVIA">
        </form>

    </div>


    <?php

    $filtroArtista = 0;
    $filtroGenere = 0; 
    $filtroAnno = 0;      

    if (isset($_POST['filtro'])){
        $filtroArtista = $_POST['filtro_artista']; //selezione idArtista
        $filtroGenere = $_POST['filtro_genere'];    //selezione idArtista
        $filtroAnno = $_POST['filtro_anno'];       //selezione Anno
    }


    // seleziono tutti i prodotti quando tutto vuoto
        $query="SELECT * FROM prodotti
        inner join artisti on prodotti.idartista = artisti.idartista
        inner join generi on prodotti.idgenere = generi.idgenere";

    //seleziono solo con artista
        $queryArtista="SELECT * FROM prodotti
            inner join artisti on prodotti.idartista = artisti.idartista
            inner join generi on prodotti.idgenere = generi.idgenere WHERE artisti.idartista = ".$filtroArtista."";

    //seleziono solo con genere
        $queryGenere="SELECT * FROM prodotti
        inner join artisti on prodotti.idartista = artisti.idartista
        inner join generi on prodotti.idgenere = generi.idgenere WHERE generi.idgenere = ".$filtroGenere."";

    //seleziono solo con l'ANNO
        $queryAnno="SELECT * FROM prodotti
        inner join artisti on prodotti.idartista = artisti.idartista
        inner join generi on prodotti.idgenere = generi.idgenere WHERE prodotti.anno = ".$filtroAnno."";

    //seleziono artista e genere
        $queryArGe="SELECT * FROM prodotti
        inner join artisti on prodotti.idartista = artisti.idartista
        inner join generi on prodotti.idgenere = generi.idgenere 
        WHERE prodotti.idartista = ".$filtroArtista." AND generi.idgenere = ".$filtroGenere."";

    //seleziono artista e anno
        $queryArAn="SELECT * FROM prodotti
        inner join artisti on prodotti.idartista = artisti.idartista
        inner join generi on prodotti.idgenere = generi.idgenere 
        WHERE prodotti.idartista = ".$filtroArtista." AND prodotti.anno = ".$filtroAnno."";

    //seleziono genere e anno
        $queryGeAn="SELECT * FROM prodotti
        inner join artisti on prodotti.idartista = artisti.idartista
        inner join generi on prodotti.idgenere = generi.idgenere 
        WHERE prodotti.idgenere = ".$filtroGenere." AND prodotti.anno = ".$filtroAnno."";

    //seleziono artista + genere + anno
        $querytot="SELECT * FROM prodotti
        inner join artisti on prodotti.idartista = artisti.idartista
        inner join generi on prodotti.idgenere = generi.idgenere 
        WHERE prodotti.idartista = ".$filtroArtista." AND generi.idgenere = ".$filtroGenere." AND prodotti.anno= ".$filtroAnno."";

        if($filtroArtista == 0 && $filtroGenere==0 && $filtroAnno== 0){//tutto nullo
            GeneraSchermo($query,$con);
        }elseif($filtroArtista != 0 && $filtroGenere==0 && $filtroAnno== 0){//solo artista
            GeneraSchermo($queryArtista,$con);
        }elseif($filtroGenere != 0 && $filtroArtista==0 && $filtroAnno== 0){//solo genere
            GeneraSchermo($queryGenere,$con);
        }elseif($filtroAnno != 0 && $filtroGenere==0 && $filtroArtista== 0){//solo Anno
            GeneraSchermo($queryAnno,$con);
        }elseif($filtroArtista != 0 && $filtroGenere !=0 && $filtroAnno== 0){// artista + genere
            GeneraSchermo($queryArGe,$con);
        }elseif($filtroArtista != 0 && $filtroGenere ==0 && $filtroAnno != 0){// artista + anno
            GeneraSchermo($queryArAn,$con);
        }elseif($filtroArtista == 0 && $filtroGenere !=0 && $filtroAnno != 0){// artista + anno
            GeneraSchermo($queryGeAn,$con);
        }elseif($filtroArtista != 0 && $filtroGenere !=0 && $filtroAnno != 0){// artista + anno
            GeneraSchermo($querytot,$con);
        }

    


        function GeneraSchermo($query,$con){
            echo "<div id = 'div_prodotti'>";
            if($result= $con->query($query)){
                if($result->num_rows>0){// se la query trova qualcosa
                    //prendo il risultato e lo trasformo in array
                    for ($i=0; $i < $result->num_rows; $i++) {  
                        $row = mysqli_fetch_assoc($result);
                        if ($row['immagine'] == null) { //se non è salvata l'immagine mi mette quella del sito
                            echo"
                            <div class='grid' name ='prodotto' class='div_prodotto'>
                            <form action='#' method='post'>
                                <figure class='effect-goliath'>
                                <img src='./../Immagini/TestLogo.png'>
                                    <figcaption>
                                            <h2><span>".$row['titolo']."</span></h2>
                                            <p>".$row['nome_artista']." - ".$row['anno']." - ".$row['genere']." - ".$row['costo']."€"." 
                                            
                                            </p>
                                                            
                                    </figcaption>	
                                        
                                </figure>
                                <button type='submit' name='add'>Add to carrello</button>
                                    <input type='hidden' name='idprodotto' value=".$row['idprodotto'].">
                            </form>	
                            </div>";
                        }
                        else {
                            echo"
                            <div class='grid' name ='prodotto' class='div_prodotto'>
                            <form action='#' method='post'>
                                <figure class='effect-goliath'>
                                <img src='".$row['immagine']."'>
                                    <figcaption>
                                            <h2><span>".$row['titolo']."</span></h2>
                                            <p>".$row['nome_artista']." - ".$row['anno']." - ".$row['costo']."€"." 
                                            
                                            </p>                
                                    </figcaption>
                                        
                                </figure>
                                </figure>
                                <button type='submit'  name='add'>Add to carrello </button>
                                    <input type='hidden' name='idprodotto' value=".$row['idprodotto'].">	
                            </div>";
                        }
                    }
                }
                else {
                    echo"Nessun prodotto trovato!";
                }
            }
            echo "</div>";
        }


    ?>

      
<?php

if (isset($_POST['add'])){
   
    if(isset($_SESSION['carrello'])){

        $item_array_id = array_column($_SESSION['carrello'], "idprodotto");
        if(in_array($_POST['idprodotto'], $item_array_id)){

            echo "<script>alert('Product is already added in the carrello..!')</script>";
            echo "<script>window.location = 'prodotti.php'</script>";
        }else{
            echo'ciao';
            $count = count($_SESSION['carrello']);
            $item_array = array(
                'idprodotto' => $_POST['idprodotto']
            );
            $_SESSION['carrello'][$count] = $item_array;
        }
    }else{
        $item_array = array(
                'idprodotto' => $_POST['idprodotto']
        );

        // Create new session variable
        $_SESSION['carrello'][0] = $item_array;
        
    }
    
}

?>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <?php
        require_once('footer.php');
    ?>
</body>
</html>