<?php
	$to = "youremail@gmail.com"; /*Your Email*/
	$subject = "Suscription from the landing"; /*Issue*/
	$date = date ("l, F jS, Y"); 
	$time = date ("h:i A"); 
	
		
	$Email     = $_REQUEST['Email'];
	$firstName = $_REQUEST['Name'];
	$message   = $_REQUEST['message'];	
	

	$msg="
	
	Message sent from website on date  $date, hour: $time.\n
	
	Name: $firstName $lastName\n
	Email: $Email\n
	
	$message";

	if ($Email=="") {
		echo "<div class='alert alert-error'>
  				<a class='close' data-dismiss='alert'>×</a>
  				<strong>Warning!</strong> Please enter your email.
			</div>
		
		";
	}	
	elseif ($Email=="" or $firstName=="" or $message=="" ) {
		echo "<div class='alert alert-error'>
  				<a class='close' data-dismiss='alert'>×</a>
  				<strong>Warning!</strong> Please fill all the fields.
			</div>";
	}	
	else{
		mail($to, $subject, $msg, "From: $_REQUEST[Email]");
		echo "<div class='alert alert-success'>
  				<a class='close' data-dismiss='alert'>×</a>
  				<strong>Thank you for your message!</strong>
			</div>
		
		
		";	
	}
	
?>
