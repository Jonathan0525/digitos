<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_tel = $_POST['cf_tel'];
$field_message = $_POST['cf_message'];

$mail_to = 'contactoweb@digitosydisenos.com.co';
$subject = 'Mensaje de contacto Digitos Disenos '.$field_name;

$body_message = 'De: '.$field_name."\n";
$body_message .= 'Correo: '.$field_email."\n";
$body_message .= 'Telefono: '.$field_tel."\n";
$body_message .= 'Mensaje: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Gracias por su mensaje. Pronto estremos en contacto.');
		window.location = 'contact_page.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('El mensaje no se ha enviado. Por favor, contactarnos al correo gerencia@digitosydisenos.com.co');
		window.location = 'contact_page.html';
	</script>
<?php
}
?>