<?php

 /*----------------------------------------------------------------------------*\
|*  Email settings for sending all emails from your website forms.              *|
 \*============================================================================*/

// Choose here whether to use php mail() function or your SMTP server (recommended) to send the email.
// Use 'smtp' for better reliability, or use 'phpmail' for quick + easy setup with lower reliability.
$emailMethod                = 'smtp'; // REQUIRED value. Options: 'smtp' , 'phpmail'

// Outgoing Server Settings - replace values on the right of the = sign with your own.
// These 3 settings are only required if you choose 'smtp' for emailMethod above.
$outgoingServerAddress      = 'smtp.gmail.com'; // Consult your hosting provider.
$outgoingServerPort         = '587';                  // Options: '587' , '25' - Consult your hosting provider.
$outgoingServerSecurity     = 'tls';                 // Options: 'ssl' , 'tls' , null - Consult your hosting provider.

// Sending Account Settings - replace these details with an email account held on the SMTP server entered above.
// These 2 settings are only required if you choose 'smtp' for emailMethod above.
$sendingAccountUsername     = 'devteam1@ahyconsulting.com';
$sendingAccountPassword     = 'batmanvssupermansucks';

// Recipient (To:) Details  - Change this to the email details of who will receive all the emails from the website.
//$recipientEmail             = 'prashant.yadav@ahytech.com'; // REQUIRED value.
//$recipientName              = 'Prashant yadav';             // REQUIRED value.

// Email details            - Change these to suit your website needs
$emailSubject               = 'Thank You for a enquiry'; // REQUIRED value. Subject of the email that the recipient will see
$websiteName                = 'Ahyconsulting.com';                // REQUIRED value. This is used when a name or email is not collected from the website form

$companyName                = "Harpreet Singh";  //REQUIRED value. This is used to send the email in company (Person).
$companyEmail               = "prashantydv25@gmail.com";  //REQUIRED value. This is used to send the email in company (Person).
$conpanyEmailSubject        = "There was an enquiry placed"; //REQUIRED value. This is used to send the email in company (Person).

$timeZone					= 'Asia/Kolkata';         // OPTIONAL, but some servers require this to be set.
                                                             // See a list of all supported timezones at: http://php.net/manual/en/timezones.php
 /*----------------------------------------------------------------------------*\
|*  You do not need to edit anything below this line, the rest is automatic.    *|
 \*============================================================================*/
?>
