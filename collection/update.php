<?php
	$mysqli = new mysqli("127.0.0.1", "newuser","password","events");
if ($mysqli->connect_errno) {
     echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
else{
	  echo "sucessfully connect<br>";
}

$id = $_POST['id'];
$fname  = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$type = $_POST['type'];
$date = $_POST['date'];
$time = $_POST['time'];
$venue = $_POST['venue'];

$sql ="UPDATE evedata set fname = '".$fname."',lname = '".$lname."',email = '".$email."',tel = '".$contact."',type = '".$type."',date = '".$date."',time = '".$time."',venue = '".$venue."',updated=now() where id = '".$id."'";

$result=$mysqli->query($sql);
//var_dump($mysqli->error);

//$r = $result->fetch_array(MYSQLI_ASSOC);
echo "<pre>";
var_dump($result);
exit;
$r = mysql_fetch_array($result);
//echo $result;	
var_dump($r);
	// $id = $_POST['id'];
?>
