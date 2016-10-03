<?php
	$id = $_POST['id'];
	$mysqli = new mysqli("127.0.0.1", "newuser","password","events");
	if ($mysqli->connect_errno) {
    	// echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error
	}
	else{
		 // "<br>sucessfully connect<br>";
	}
	echo $sql = "DELETE FROM evedata WHERE id='".$_POST['id']."'";

	$result=$mysqli->query($sql);
	// var_dump($result);
	echo json_encode($result);
?>