<?php 
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
	}
	    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
	}
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		function validata($data){
			$data = stripcslashes($data);
			$data = trim($data);
			$data = htmlspecialchars($data);
			return $data;
		}

		$name = validata($_POST['name']);
		$email = validata($_POST['email']);
		$massage = validata($_POST['massage']);

		if (isset($name) && isset($email) && isset($massage)) {
		
			// Set the recipient email address.
	        // Type here your email id for receive email.
	        $email_to = "ssasenick412@gmail.com"; 

	        // Set the email subject.
	        $subject = "New email from $name";

	        // Build the email content.
	        $email_body = "Name: $name\n";
	        $email_body .= "Email: $email\n\n";
	        $email_body .= "Message:\n$massage\n";

	        // Build the email headers.
	        $email_headers = "From: $name <$email>";

	        // Send the email.
	        $success = mail($email_to, $subject, $email_body, $email_headers);
	        if ($success){
			   echo "success";
			}else{
			   echo "Something went wrong :(";
			}
		}
	}

?>