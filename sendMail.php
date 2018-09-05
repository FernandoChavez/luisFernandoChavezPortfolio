<?php
	$name = $_POST['nameUser'];
	$email = $_POST['emailUser'];
	$subject = $_POST['subjectUser'];
	$message = $_POST['messageUser'];
	$business= $_POST['businessUser'];
	$formcontent = "Name: ".$name."\r\nSubject: ".$subject."\r\nMessage: ".$message;
	//$recipient = "ccnsc@live.com";
	$subject = "Formulario de contacto";
	switch($business){
		case 'dev':
			$recipient = "ingluisfernandochavez@hotmail.com";
			break;
		case 'smash':
			$recipient = "FuerzaDON@hotmail.com";
			break;
		default:
	    $recipient ="ingluisfernandochavez@hotmail.com";
	    break;
	}

	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	//header('Location: gracias.html');
	exit;
?>
