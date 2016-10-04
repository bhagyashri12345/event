<?php
	$mysqli = new mysqli("127.0.0.1", "newuser","password","events");
if ($mysqli->connect_errno) {
     //echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;

}
else{
	  //echo "sucessfully connect<br>";
}
$search = $_GET['data'];

	$page = $_GET['page'];
	$no = 10;
	$start = $no*($page-1);
	if($start<1){
		$start = 0;
	}
	$name = $search;
	if($_GET['perPage']>10){
		$no = $_GET['perPage'];
	}
	$sql = "SELECT count(*) as count FROM evedata WHERE  fname LIKE '%" . $name . "%' OR lname LIKE '%" . $name  ."%'";

		// $sqli = "select * from evedata";
		$result=$mysqli->query($sql);
		$total = $result->fetch_array(MYSQLI_ASSOC);
	$sql = "SELECT * FROM evedata WHERE  fname LIKE '%" . $name . "%' OR lname LIKE '%" . $name  ."%'"." ORDER BY created DESC"." limit $start,$no";
	// echo $sql;
			$result=$mysqli->query($sql);
			// print_r($result);
			
			if($result==null){
				$error = "result null";
			}
			
			while($row = $result->fetch_array(MYSQLI_ASSOC)){
				 	$rows[] = $row;
		    }

		    $pagination['perPage']=$no;

 			$pages = (int)($total['count']/$no);
 			$p=$total['count']/$no;
 			if($p>$pages){
 				$pages++;
 			}
 			$pagination['totalPage']=$pages;
 			$pagination['count']=$total['count'];
 			if($page==null){
 				// echo "current page null";
 				$page = 1;
 			}
 			
 			$pagination['currentPage']=$page;
 			$pagination['error']=$error;
			 echo json_encode(array('events' => $rows,'pagination'=>$pagination ));




?>
