<?php
//error_reporting(-1);
//ini_set('display_errors', 'On');
//echo "hello";
// Require the Swift Mailer library
include 'lib/swift_required.php';
include 'configuration.php';

// Set default timezone as some servers do not have this set.
if(isset($timeZone) && $timeZone != ""){
	date_default_timezone_set($timeZone);
}
else{
	date_default_timezone_set("UTC");
}

$messageText = "";

if($emailMethod == 'phpmail'){
	$transport = Swift_MailTransport::newInstance();
}elseif($emailMethod == 'smtp'){
    $transport = Swift_SmtpTransport::newInstance( $outgoingServerAddress, $outgoingServerPort, $outgoingServerSecurity )
    ->setUsername( $sendingAccountUsername )
    ->setPassword( $sendingAccountPassword );
}

$mailer = Swift_Mailer::newInstance($transport);
if(isset($_POST['email']) && isset($_POST['username']) ){
	//$fromArray = array($_POST['email'] => $_POST['name']);
	$recipientEmail = $_POST['email'];
	$recipientName = $_POST['username'];
	$text = $_POST['text'];
	$fromArray = array($sendingAccountUsername => $websiteName);
}
else
{
	$fromArray = array($sendingAccountUsername => $websiteName);
}

	//Send email to customer
	$messageText1 = "<h1> Thank You Master</h1>";
	$message1 = Swift_Message::newInstance($emailSubject)
	  ->setFrom($fromArray)
	  ->setTo(array($recipientEmail => $recipientName))->setBody($messageText1,'text/html');

	//send email to company
	$messageText2 = "<h1>Some one has Placed an Enquiry</h1>"
								."<span style='font-size:1.3em'>Username</span>: <span style='font-size:1.3em'>".$recipientName."</span><br>"
								."<span style='font-size:1.3em'>Email</span>: <span style='font-size:1.3em'>".$recipientEmail."</span><br>"
								."<span style='font-size:1.3em'>Description</span>: <span style='font-size:1.3em'>".$text."</span><br>";

	$message2 = Swift_Message::newInstance($conpanyEmailSubject)
	  ->setFrom($fromArray)
	  ->setTo(array($companyEmail => $companyName))->setBody($messageText2,'text/html');

	// Send the message or catch an error if it occurs.
	try{
		echo($mailer->send($message1) && $mailer->send($message2));
	}
	catch(Exception $e){
		echo($e->getMessage());
	}
	exit;




?>
