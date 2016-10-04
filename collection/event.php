<?php
	$mysqli = new mysqli("127.0.0.1", "newuser","password","events");
	if ($mysqli->connect_errno) {
    	// echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	}
	else{
		// "sucessfully connect<br>";
	}
	if($_POST['firstname']=="")
	{
		$data['fname']="please enter the name";
	}
	elseif (preg_match('/^[A-Z]+$/i', $_POST['firstname'])) {
		$data['fname']="valid";
	}
	else{
		$data['fname']="please enter proper name";
	}
	if($_POST['lastname']=="")
	{
		$data['lname']="please enter the last name";
	}
	elseif (preg_match('/^[A-Z]+$/i', $_POST['lastname'])) {
		$data['lname']="valid";
	}
	else{
		$data['lname']="please enter proper last name";
	}
	if(preg_match('/^[0-9]{10}$/', $_POST['usrtel']))
	{
		$data['phone']="valid";
	}
	else{
		$data['phone']="please enter the phone number";
	}
	if ($_POST['email']=="") {
		$data['email']="enter email";
	}
	elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$data['email']="enter proper email";
	}
	else{
		$data['email']="valid";
	}
	
	if($data['fname']!="valid"||$data['lname']!="valid"||$data['email']!="valid"||$data['phone']!="valid"){
		$data['status']="fail";
	}
	else{
		$data['status']="valid";
	}
	

	if($data['status']=="valid"){
		$sql = "INSERT INTO evedata (fname, lname, email, tel, type, date, time, venue ) VALUES ('".$_POST['firstname']."','".$_POST['lastname']."','".$_POST['email']."','".$_POST['usrtel']."','".$_POST['type']."','".$_POST['date']."','".$_POST['time']."','".$_POST['venue']."')";
		$result=$mysqli->query($sql);
	
		echo json_encode($data);
	}
	else{
		echo json_encode($data);
	}
?>
