<?php

	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$level = $_POST['level'];
	$cita = $_POST['cita'];
	$skype = $_POST['skype'];
	$mensaje = $_POST['mensaje'];
	$envio = date('d/m/Y H:i:s');

	$error = array();
	if ($nombre == '') {
		$error['nombre'] = 'nombre';
	}
	if ($email == '') {
		$error['email'] = 'email';
	}
	if ($level == '') {
		$error['level'] = 'level';
	}
	if ($cita == '') {
		$error['cita'] = 'cita';
	}
	if ($skype == '') {
		$error['skype'] = 'skype';
	}
	if ($mensaje == '') {
		$error['mensaje'] = 'mensaje';
	}		

	if (empty($error)) {
		//$para = 'hlna_mi@hotmail.com'; //CHANGE 
		$para = 'info@entiendespanish.com';
		$titulo = 'Consulta Web :: entiendespanish.com';
		$header = 'Mensaje enviado por: ' . $email;
		$msjCorreo = "Este mensaje fue enviado por: $nombre\n Su e-mail es: $email\n Su nivel es: $level\n La hora que mejor le conviene y su zona horaria es: $cita\n Su Skype es: $skype\n Mensaje: $mensaje\n Enviado el $envio";
		  
		if (mail($para, $titulo, $msjCorreo, $header)) {
			echo "enviado";
		} else {
			echo 'fallo';
			
		}
	} else {
		echo json_encode($error);
	}

?>
