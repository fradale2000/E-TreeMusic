<?php
 $hostName = "localhost";
 $userName = "root";
 $password = "";
 $dbName = "e-treemusic";
 $con= new mysqli($hostName,$userName,$password,$dbName);
 if ( $con === false ) {
   die ("Errore di connessione: " . $con-> connect_error ) ;
}
  ?>