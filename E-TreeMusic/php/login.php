<!DOCTYPE html>
<?php
    include("connect.php");
    session_start();
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./../css/effetticsspagin.css">
    <title>E-TreeMusic/login</title>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-242609135-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-242609135-1');
    </script>
</head>
<body>
    <div>
        <a href="index.html">
        </a>
    </div>
    

    <div class="container">
        <div class="TestLogo"> 
            <img src="Immagini/TestLogo.png" id="logop">
        </div>
        <div class="brand-title">Hai già un account, accedi qui !</E-TreeMusic>
        </div>
    
        <form action="#" method="POST">
            <div class="inputs">
                <label>Email</label>
                <input type="Email" placeholder="example@gmail.com" name = "email"/>
                <label>Password</label>
                <input type="password" placeholder="Min 8 charaters long " name= "psw_utente" />
                <button type="submit" onclick="location.href='./prodotti.php'" name = "SubmitButton">Accedi</button>
                <button type="button" onclick="location.href='./register.php'">Non sei registrato? Fallo qui</button>
            </div>
        </form>
            
      </div>

    <?php
        if(isset($_POST['SubmitButton'])){ //controlla se il pulsante accedi sia stato premuto
            $email = strval($_POST['email']);
            $psw_utente = strval($_POST['psw_utente']);
            $query="SELECT * FROM utenti
                    where email = "."'$email'"."
                    and psw_utente = "."'$psw_utente'";// seleziono il profilo con le credenziali inserite
            if($result= $con->query($query)){
                if($result->num_rows>0){// se la query trova qualcosa
                    $row = mysqli_fetch_assoc($result); //prendo il risultato e lo trasformo in array
                    echo "<script> alert('Bentornato/a ".$row['nome']." ". $row['cognome']."'); 
                                    location.replace('prodotti.php');</script>";
                    $_SESSION['idutente'] = $row['idutente'];
                    $query_accesso = "INSERT INTO accessi (idaccesso, idutente, ora_accesso) VALUES (NULL, ".$row['idutente'].", current_timestamp())";
                    $result= $con->query($query_accesso);
                    echo "<script> alert(".$row['idutente']."); </script>";
                }else if($result->num_rows<=0){
                    echo"<script> alert('Email o password errata'); </script>".$con->error;
                }
            }else{
                echo "<script> alert('Email o password errata'); </script>".$con->error;
            }
        }
    ?>
</body>

    
