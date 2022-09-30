<?php
include ('connect.php');

$query="SELECT idprodotto,titolo,nome_artista,anno,genere,descrizione,costo FROM prodotti
        inner join artisti on prodotti.idartista = artisti.idartista
        inner join generi on prodotti.idgenere =  generi.idgenere" ;
if($result= $con->query($query)){
    if($result->num_rows>0){
        while ($row = mysqli_fetch_assoc($result)){
            $separato = implode(",", $row);
            $element = "<div> titolo: ".$row['titolo'].
                        " rtista: ".$row['nome_artista'].
                        " anno: ".$row['anno'].
                        " genere: ".$row['genere'].
                        " descrizione: ".$row['descrizione'].
                        " costo: ".$row['costo'].
                        "</div>";
            echo $element;
        }
        echo ' </tbody> </table>';
    }else{
        echo"non ci sono righe per questa query";
    }
}else{
    echo "errore non ha funzionato nulla".$connessione->error;
}

$con->close();

?>