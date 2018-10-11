<?php
error_reporting(0);
$nombre = $_POST['nombre'];
$correo_electronico= $_POST['email'];
$level= $_POST['level'];
$cita= $_POST['cita'];
$skype= $_POST['skype'];
$mensaje=$_POST['mensaje'];
$header = 'From: ' . $correo_electronico . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";
$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $correo_electronico . " \r\n";
$mensaje .= "Su nivel es: " . $level . " \r\n";
$mensaje .= "Su Skype es: " . $skype . " \r\n";
$mensaje .= "La hora que mejor le conviene y su zona horaria es: " . $cita . " \r\n";
$mensaje .= "mensaje " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());
//$para = 'hlna_mi@hotmail.com';
$para = 'info@entiendespanish.com';
$asunto = 'formulario entiendespanish';
mail($para, $asunto, utf8_decode($mensaje), $header);
echo '<html><head></head><body><style>html,body{margin:0px;height:100%;}</style><article style="background-color: #4abd92;height: 100%;margin: 0px;padding: 0px;width: 100%;margin: 0px;padding: 0px;"> </header> <section style="width: 100%;margin: 0px;padding: 0px;height:100vh;display: flex;align-items: center;justify-content: center;"> <h1 style="width: 30%;height: 30%;display: flex;align-items: center;justify-content: center;flex-direction: column;line-height: 25px;background-color: white;"> Thank you for your message!<br><a href="http://www.entiendespanish.com" style="text-decoration: none;color: black;cursor: pointer;border: none;-webkit-border-radius: 20px;-moz-border-radius: 20px;-ms-border-radius: 20px;border-radius: 20px;padding: 10px 20px;font-size: 15px;font-family: $light_font;font-weight: 100;margin: 30px 10px 10px 10px;color: #4abd92;background-color: transparent;border: 2px solid #4abd92;-webkit-transition: all 0.2s linear;-moz-transition: all 0.2s linear;transition: all 0.2s linear;">Come back</a> </h1> </section></article></body></html>';
?>