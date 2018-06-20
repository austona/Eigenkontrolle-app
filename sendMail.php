<?php
$date = date_create();
$date = date_format($date, 'd/m/y'); 
$name = utf8_decode($_POST['name']);
$email = $_POST['email'];
sleep(1.5);



$path = "/var/www/virtual/milchkuh/save"; 

$latest_ctime = 0;
$latest_filename = '';    

$d = dir($path);
while (false !== ($entry = $d->read())) {
  $filepath = "{$path}/{$entry}";
  // could do also other checks than just checking whether the entry is a file
  if (is_file($filepath) && filemtime($filepath) > $latest_ctime) {
    $latest_ctime = filemtime($filepath);
    $latest_filename = $entry;
  }
}





// $path = "/var/www/virtual/milchkuh/send/eigenkontrolle.pdf";
// $filename = 'eigenkontrolle.pdf'; 
$path = "{$path}/{$latest_filename}";
$type = 'application/pdf';
// $encoding = 'base64'; 



require_once 'class.phpmailer.php';
$mail = new PHPMailer;

$mail->setFrom('eigenkontrolle@hotmail.com', 'Eigenkontrolle Kuh');
$mail->addAddress($email, $name);
// $mail->AddAttachment($path, 'eigenkontrolle.pdf');
$mail->AddAttachment($path,$latest_filename);

 // 'base64'
$mail->Subject  = "Eigenkontrolle vom ". $date;
$mail->Body     = utf8_decode("Guten Tag ". $name. ", \nIm Anhang befinden sich die Ergebnisse Ihrer Eigenkontrolle.
Die Bewertung der Merkmale erfolgt mit einem einfachen Ampelsystem, die Einstufung beruht auf dem aktuellen Kenntnisstand und wird fortlaufend neuen Erkenntnissen angepasst. 
\nBei 'GRÜN' ist alles in Ordnung, 'GELB' bedeutet suboptimal und Sie sollten daher eine Maßnahme ergreifen, welche dazu geeignet ist, eine Verbesserung der Situation herbeizuführen. 'ROT' entspricht einer nicht hinnehmbaren Einstufung und Sie sollten qualifizierte Beratung zur Verbesserung des Kriteriums in Anspruch nehmen.  
\nDie hinterlegten Zielgrößen für die tierbezogenen Indikatoren finden Sie unter: \n
http://mlr.baden-wuerttemberg.de/fileadmin/redaktion/m-mlr/intern/dateien/PDFs/SLT/2017_02_10_Bericht_Pilotprojekt_Q-Wohl.pdf \n
Es wäre sinnvoll, die Erhebung halbjährlich, jeweils zur Mitte des Sommer- und des Winterhalbjahres zu erheben. \n
Herzliche Grüße und bis bald unter www.eigenkontrolle-kuh.de!");

if(!$mail->Send()) {
	
	// echo 'Der Bericht konnte nicht versendet werden. ';
  // echo 'Mailer error: ' . $mail->ErrorInfo;
  header('Location: mailFailure.html');
 // var_dump($latest_filename,$path);
  
	
} else {
<<<<<<< HEAD
		// <script>document.location.href = "#mailSuccess";</script>;
=======
>>>>>>> 2de149434d94601d82da3b7f27b852e5471aa796
		header('Location: mailSuccess.html');
}


?>