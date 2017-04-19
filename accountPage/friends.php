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
	// Select all games from the database
	$sql = "SELECT * FROM users INNER JOIN friend ON users.userID=friend.userIDB WHERE friend.userIDA='".$_SESSION["currentUser"]."'";
	$queryResult = $conn->query($sql);
	STATIC $i=0;
	if ($queryResult->num_rows > 0) {
		// output data of each row
		while($row = $queryResult->fetch_assoc()) {
			$friendsList[$i]= $row;
			$i=$i+1;
		}
	} else {
		echo "0 results";
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
<p id="friendsHeader">Friends</p>
<div class="friends-list-block" id="friends-list">
</div>
<script type="text/javascript"> var friendsList = <?= json_encode($friendsList) ?>; </script>
<script language="javascript" src="friends.js" onload="populateFriends(friendsList)"></script>

</body>
</html>
