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
	// Select all information about the current user
	$sql = "SELECT * FROM users WHERE userID='".$_SESSION["currentUser"]."'";
	$queryResult = $conn->query($sql);
	if ($queryResult->num_rows > 0) {
		// output data of each row
		while($row = $queryResult->fetch_assoc()) {
			$userInfo= $row;
		}
	} else {
		echo "0 results";
	}
	
	// Select all ads from the current user
	$sql = "SELECT * FROM ad WHERE userID='".$_SESSION["currentUser"]."'";
	$queryResult = $conn->query($sql);
	STATIC $i = 0;
	if ($queryResult->num_rows > 0) {
		// output data of each row
		while($row = $queryResult->fetch_assoc()) {
			$userInfo['ads'][$i]= $row;
			$i++;
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
  <div class="left-quarter-block">
    <div id=avatarNameBlock>
      <img id="usrAvatar" src="<?= $userInfo['picture']?>">
      <p id="usrName-2"><?php echo $userInfo['username'] ?></p>
    </div>
    <p id="gamesFollowedHeader">GAMES FOLLOWED :</p><div id="usrGamesFollowed"></div>
  </div>
  <div class="middle-half-block">
    <img id="ratingBlock" src="assets/testRatings.png">
    <p id="bioHeader">BIO :</p><p id="usrBio"><?php echo $userInfo['description'] ?></p>
  </div>
  <div class="right-quarter-block">
    <p id="recentAdsHeader">RECENT ADS :</p><div id="usrRecentAds"><?php print_r($userInfo['ads']) ?></div>
  </div>

</body>
</html>
