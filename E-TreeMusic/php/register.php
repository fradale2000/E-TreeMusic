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
    <title>E-TreeMusic/registrazione</title>
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
            <img src="./../Immagini/TestLogo.png" id="logop">
        </div>
        <div class="brand-title">Registrati qui </E-TreeMusic>
        </div>
        <div class="inputs">
            <form action = "#" method = "POST" >
                <label>Email</label>
                <input type="email" name="email" placeholder="example@gmail.com" />
                <label>Password</label>
                <input type="password" name="psw_utente" placeholder="Min 8 charaters long " />
                <label>Ripeti Password</label>
                <input type="password" name="psw_utente2" placeholder="Min 8 charaters long " />
                <label>Nome</label>
                <input type="text" name="nome"  placeholder="Name"/>
                <label>Cognome</label>
                <input type="text"  name="cognome" placeholder="Last Name" />
                <label>Data di nascita</label>
                <input type="date" name="data_nascita" placeholder="Date of birth" />
                <button type="submit" name= "SubmitButton">Registrati
            </form>
        </div>
    </div>
    <?php
        #-------------------------------------------------------------
        if(isset($_POST['SubmitButton'])){ //controlla se il pulsante accedi sia stato premuto
            #inserimento dati nel database
                                #real_escape_string è per sicurezza
            // echo "entra nell'if";
            $email = $con -> real_escape_string($_POST['email']);
            $psw_utente = $con -> real_escape_string($_POST['psw_utente']);
            $psw_utente2 = $con -> real_escape_string($_POST['psw_utente2']);
            $nome = $con -> real_escape_string($_POST['nome']);
            $cognome = $con -> real_escape_string($_POST['cognome']);
            $data_nascita = $con -> real_escape_string($_POST['data_nascita']);
            $idtipo = 2;
            if($email == null or  $psw_utente == null or $nome==null or $cognome == null or $data_nascita == null){
                echo "<script> alert('Non sono stati riempiti tutti i campi richiesti!'); </script>";
            }else{
            $control = "SELECT * FROM utenti WHERE email = '$email' ";
                            #specificare la tabella che si vuole usare(utenti)
            $query = "INSERT INTO  utenti  (nome, cognome , data_nascita , email , psw_utente , idtipo) VALUES
            ( '$nome' , '$cognome' , '$data_nascita' , '$email' , '$psw_utente' , '$idtipo');";

            if($psw_utente != $psw_utente2){
                echo "<script> alert('Password inserita non corretta !'); </script>";
            }
            else if($result= $con->query($control)){
                if($result->num_rows>0){  // se la query trova qualcosa
                    echo "<script> alert('Email già registrata !'); </script>";}
                else{
                    if ( $con->query($query) === true) {
                        $ultimo_elemento = $con->insert_id ;
                        echo "<script> alert('Utente registrato con successo !'); </script>";
                    } else {
                        echo "<script> alert('Utente registrato con successo !'); </script>";
                    }
                }
            }
        }
    }
        $con->close();
    ?>
</body>
