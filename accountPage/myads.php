<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "teamfinder";
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	session_start();	
	// Select all ads from the current user
	$adsFound=false;
	$sql = "SELECT * FROM ad WHERE userID='".$_SESSION["currentUser"]."'";
	$queryResult = $conn->query($sql);
	STATIC $i = 0;
	if ($queryResult->num_rows > 0) {
		// output data of each row
		while($row = $queryResult->fetch_assoc()) {
			$userAds[$i]= $row;
			$i++;
		}
		$adsFound=true;
	} else {
		echo "0 results";
	}
	
	//Find who the ads belong to
	if($adsFound==true){
		for($x=0;$x<sizeof($userAds);$x++){
			$sql = "SELECT gameName,picture FROM game WHERE gameID = ".$userAds[$x]['gameID'];
			$queryResult = $conn->query($sql);		
			if($queryResult->num_rows>0){
				while($row=$queryResult->fetch_assoc()){
					$userAds[$x]['gameName']=$row['gameName'];
					$userAds[$x]['picture']=$row['picture'];
				}
			}		
		}
	}
	
	$conn->close();
?>
<html>
<head>
  <meta charset="UTF-8">
  <title>Team Finder</title>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="stylePage.css">
  <style>
  </style>
</head>

<body>
<p id="myAdsHeader">My Ads</p>
<div class="ad-list-block" id="my-ads-list">
</div>
<script type="text/javascript"> var userAds = <?= json_encode($userAds) ?>; </script>
<script language="javascript" src="myAds.js" onload="populateMyAds(userAds)"></script>

</body>
</html>
