<?php

include('connect.php');

?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fredoka:wght@300;400;600&family=Josefin+Sans:wght@400;700&family=Lora:ital@1&display=swap" rel="stylesheet">
    <link rel="icon" href="Immagini/TestLogo.png" type="image/icon type">
    <link rel="stylesheet" href="style.css">
     <!-- Font Awesome -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css" />
    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


    <title>Aggiorna Prodotto</title>
    <style type="text/css">
        table{
            border-collapse: collapse;
            width: 70%;
            color: black;
            font-size: 25px;
            text-align: left;
            margin-left: 5%;
        }
     </style>
</head>
<body>
    
<?php
require_once('header.php');
?>

<div class="container mt-5" id="container">
	<h1>Aggiorna Prodotto</h1>
    <p>Scrivi l'Id del prodotto e aggiornalo, tutti i campi sono obbligatori</p>
	<form action="updateproduct.php" method="POST" enctype="multipart/form-data">

        <div class="form-group mb-3">
			<label>Id prodotto</label>
			    <input type="text" class="form-control" placeholder="Product id"
			name="idprod" />
		</div>
    
		<div class="form-group mb-3">
			<label> Nome Artista </label>
			    <input type="text"
				class="form-control"
				placeholder="Nome artista"
				name="iname" />
		</div>

		<div class="form-group mb-3">
			<label>Prezzo</label>
				<input type="number"
					class="form-control"
					placeholder="Prezzo"
					name="price" />
		</div>
		
		<div class="form-group mb-3">
			<label>Anno d'uscita</label>
				<input type="number"
					class="form-control"
					placeholder="Anno"
					name="year">
			</div>

            <label for="">Seleziona Genere</label>
            <select name="genre" class="form-select">
                <option selected> Genere</option>
                <?php
                    $q = "SELECT * FROM `generi`";

                    if($result= $con->query($q)){
                        if($result->num_rows>0){                   
                            while ($row = $result->fetch_array()){
                                echo ' <option value=" ' . $row['idgenere'] . ' ">' . $row['genere'] . ' </option> ';                                   
                            }}} 
                    ?>
                
            </select>
            <br>
            <label for=""> Seleziona Artista </label>
            <select name="artist" class="form-select">
                <option selected> Artista </option>
                <?php
                    $a = "SELECT * FROM `artisti`";
                   
                    if($result= $con->query($a)){
                        echo 'ciao';
                        if($result->num_rows>0){         
                                   
                            while ($row = $result->fetch_array()){
                                echo ' <option value=" ' . $row['idartista'] . ' ">' . $row['nome_artista'] . ' </option> ';                                   
                            }}} 
                ?>
            </select>


			<div class="form-group">
				<input type="submit"
					value="Aggiorna"
					class="btn btn-primary"
					name="update_prod_data">
			</div>
		</form>
	</div>
<?php
    
    if(isset($_POST['update_prod_data'])) {
        $id = $_POST['idprod'];
        $name=$_POST['iname'];
	    $price=$_POST['price'];	
	    $year=$_POST['year'];
        $genre = $_POST['genre'];
        $artist=$_POST['artist'];

        if($id == null or $name== null or $price== null or $year== null or $genre== null or $artist ==null){
            echo "<script> alert('Inserire tutti i campi per aggiornare la canzone!');</script>";
        }else{

        $query = "UPDATE prodotti SET idgenere='$genre', idartista='$artist', 
        titolo='$name', costo='$price', anno='$year' WHERE idprodotto='$id'";
        $query_run = mysqli_query($con, $query);
        if($query_run){
            $_SESSION['status'] = "Product Updated TOP";
            header("Location: updateproduct.php");
        } else {
            $_SESSION['status'] = "Not updated";
            header("Location: updateproduct.php");
        }
    }
}
?>

<h1>Catalogo dei prodotti</h1>
<table>
    <tr>
    <th>Id prodotto</th>
    <th>Nome</th>
    <th>Prezzo</th>   
    <th>Anno</th>      
    <th>Genere</th> 
    <th>Artista</th>                       
    </tr>     
</table>

<?php
$con=mysqli_connect("localhost","root","","e-treemusic");
if(!$con) {
	die("cannot connect to server");
}

$sql = "SELECT idprodotto, titolo, costo, anno, genere, nome_artista
from prodotti
inner join generi on prodotti.idgenere = generi.idgenere
inner join artisti on prodotti.idartista = artisti.idartista
";
$result = $con-> query($sql);


//Bisogna sistemare sta cagata ma non riesco
if($result-> num_rows > 0) {
   while ($row = $result-> fetch_assoc()) {
    echo "&nbsp;&nbsp;&nbsp;&nbsp;<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;". $row["idprodotto"]. 
    "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;". $row["titolo"].  
    "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;". $row["costo"].
    "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;". $row["anno"].
    "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;". $row["genere"].
     "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;". $row["nome_artista"].
     "&nbsp;&nbsp;&nbsp;&nbsp;</td></tr><br>";   
    }
echo "</table>";
}
else {
    echo "0 result";
}

$con-> close();
?>

<?php
require_once('footer.php');
?>

<!-- Linee di cordice che permettono di fare il menu a tendina -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</html>
</body>
</html>