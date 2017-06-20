<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
 </head>
 <body>

<?php

$nombre= $_POST['nombre'];
$apellido= $_POST['apellido'];
$email= $_POST['email'];
$telefono= $_POST['telefono'];
$mensaje= $_POST['mensaje'];


$to = "camiloguio@gmail.com";
	    
	      $msg .= "Nombre: " . $nombre . "\n";
	      $msg .= "Apellido: " . $apellido . "\n";
	      $msg .= "E-mail: " . $email . "\n";
	      $msg .= "Teléfono: " . $telefono . "\n";
	      $msg .= "Mensaje: " . $mensaje . "\n";
      
        mail($to, "Contáctenos digitosydisenos.com.co", $msg, $header);
        

?>

<script type="text/javascript">
window.location = "http://www.digitosydisenos.com.co/contactenos.html";
</script>      

</body>
</html>