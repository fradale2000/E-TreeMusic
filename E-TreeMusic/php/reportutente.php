<?php
 session_start();
include('connect.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fredoka:wght@300;400;600&family=Josefin+Sans:wght@400;700&family=Lora:ital@1&display=swap" rel="stylesheet">
    <link rel="icon" href="immagini/LogoGIusto.png" type="image/icon type">
    <link rel="stylesheet" href="style.css">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Product Report</title>
</head>
<body>
       
<?php
    require_once ('header.php');
?>    
    <br><br><br>
    <div class="main" id="section1">
        <h1 style="text-align:center;">Lista dei tuoi Carrelli</h1>
    </div>
    <?php
    if(!$con) {
        die("cannot connect to server");
    }
    //Visualizzare tutti i carrelli a schermo
    $sql = "SELECT contenuto_carrelli.idprodotto, titolo, contenuto_carrelli.idcarrello, lista_carrelli.idutente, email
    from lista_carrelli
    inner join contenuto_carrelli on lista_carrelli.idcarrello = contenuto_carrelli.idcarrello
    inner join prodotti on contenuto_carrelli.idprodotto = prodotti.idprodotto
    inner join utenti on lista_carrelli.idutente = utenti.idutente
    WHERE utenti.idutente = ".$_SESSION['idutente'].";";
    $result = $con-> query($sql);

    if($result-> num_rows > 0) {
        echo "<div class=\"cont-table\">";   
        echo "<br>";   
        echo "<table class=\"table table-bordered \">";
        echo "<thead class=\"thead-dark \">";
        echo "<tr>";
        echo "<th scope=\"col\">Id canzone </th>";
        echo "<th scope=\"col\">Titolo</th>";
        echo "<th scope=\"col\">codice carrello</th>";
        echo "<th scope=\"col\">EMAIL</th>";
        
        echo "</tr>";
        echo "</thead>";
        echo "<tbody>";
        echo "<tr>";
        echo "<th scope=\"row\"></th>";
        echo "<td></td>";
        echo "</tr>";
        echo "</tbody>"; 
    
    while ($row = $result-> fetch_assoc()) {
        echo
        "<tr><td>". $row["idprodotto"]. 
        "</td><td>". $row["titolo"].  
        "</td><td>". $row["idcarrello"].
        "</td><td>". $row["email"].
        "</td></tr>";
        
    
        }

    echo "</table>";
    echo "</div>";
    echo "<br>";
    }
    else {
        echo "0 result";
    }

    
    ?>

    <?php
        require_once ('footer.php');
    ?>    

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </html>

    </body>
</html>