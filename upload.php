<?php

	
	// unlink("/var/www/virtual/milchkuh/send/eigenkontrolle.pdf");
	
 // $filename = $_POST['fileNameStorage'];
 // $filename = $filename + ".pdf";
		
	$filename = uniqid();
	$filename = $filename. ".pdf";
	
if(!empty($_POST['data'])){
    $data = utf8_decode($_POST['data']);
	// $data = ($_POST['data']);
	
    $fname = $filename;// name the file
	$file = fopen("/var/www/virtual/milchkuh/save/".$fname, 'w'); // open the file path
    fwrite($file, $data); //save data
    fclose($file);
	
    $fname = "eigenkontrolle.pdf";// name the file
	$file = fopen("/var/www/virtual/milchkuh/send/".$fname, 'w'); // open the file path
    fwrite($file, $data); //save data
    fclose($file);
	
} else {
    echo "No Data Sent";
}

?>
