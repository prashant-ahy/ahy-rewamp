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
$mailer2 = Swift_Mailer::newInstance($transport);

if(isset($_POST['email']) && isset($_POST['username']) ){
	//$fromArray = array($_POST['email'] => $_POST['name']);
	$name = $_POST['username'];
	$email = $_POST['email'];
	$number = isset($_POST['number']) ? $_POST['number'] : "NA";
	$scope = isset($_POST['scope']) ? $_POST['scope'] : "NA";
	$budget = isset($_POST['budget']) ? $_POST['budget'] : "NA";
	$timeFrame = isset($_POST['timeframe']) ? $_POST['timeframe'] : "NA";
	$projectDetails = isset($_POST['projectdetails']) ? $_POST['projectdetails'] : "NA";

	$fromArray = array($sendingAccountUsername => $websiteName);
}
else
{
	$fromArray = array($sendingAccountUsername => $websiteName);
}


//replyToCustomer($mailer, $fromArray, $email, $name, $emailSubject);
//replyToCompany($mailer2, $fromArray, $companyEmail, $companyName, $conpanyEmailSubject, $name, $email, $number ,$scope, $budget, $timeFrame, $projectDetails);


	//send the message to the user
	$messageText1 = "<h1> Thank You For Placing an enquiry we will contact you soon</h1>";
	$message = Swift_Message::newInstance($emailSubject)
	  ->setFrom($fromArray)
	  ->setTo(array($email => $name))->setBody($messageText1,'text/html');

	// Send the message to the company
	$messageText2 = "<h1>Some one has Placed an Enquiry</h1>"
								."<span style='font-size:1.3em'>Username</span>: <span style='font-size:1.3em'>".$name."</span><br>"
								."<span style='font-size:1.3em'>Email</span>: <span style='font-size:1.3em'>".$email."</span><br>"
								."<span style='font-size:1.3em'>Phone Number</span>: <span style='font-size:1.3em'>".$number."</span><br>"
								."<span style='font-size:1.3em'>Scope</span>: <span style='font-size:1.3em'>".$scope."</span><br>"
								."<span style='font-size:1.3em'>Budget</span>: <span style='font-size:1.3em'>".$budget."</span><br>"
								."<span style='font-size:1.3em'>TimeFrame</span>: <span style='font-size:1.3em'>".$timeFrame."</span><br>"
								."<span style='font-size:1.3em'>Description</span>: <span style='font-size:1.3em'>".$projectDetails."</span><br>";

	$message2 = Swift_Message::newInstance($companyEmailSubject)
	  ->setFrom($fromArray)
	  ->setTo(array($companyEmail => $companyName))->setBody($messageText2,'text/html');

	// Send the message or catch an error if it occurs.
	try{
		echo($mailer->send($message2) && $mailer->send($message));
	}
	catch(Exception $e){
		echo($e->getMessage());
	}
	exit;




?>
