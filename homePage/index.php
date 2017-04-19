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
	// Start the php session
	session_start();
	// Select all games from the database
	$sql = "SELECT * FROM game";
	$queryResult = $conn->query($sql);
	STATIC $i=0;
	if ($queryResult->num_rows > 0) {
		// output data of each row
		while($row = $queryResult->fetch_assoc()) {
			$listOfGames[$i]= $row;
			$i++;
		}
	} else {
		echo "0 results";
	}

	// Attach the number of corresponding ads to each game
	$i=0;
	for($x=0;$x<sizeof($listOfGames);$x++){
		$sql = "SELECT COUNT(*) FROM ad WHERE gameID = ".$listOfGames[$i]['gameID'];
		$queryResult = $conn->query($sql);
		if($queryResult->num_rows>0){
			while($row=$queryResult->fetch_assoc()){
				$listOfGames[$x]['numberOfAds']=$row['COUNT(*)'];
				$i=$i+1;
			}
		}
	}

	// Sort the array of games in descending order from the number of ads
	usort($listOfGames, function($a, $b) {
		return $b['numberOfAds'] - $a['numberOfAds'];
	});


	// Get the list of the user's ads
	$i=0;
	$userAds = [];
	if(!empty($_SESSION["currentUser"])){
		$sql = "SELECT * FROM ad WHERE userID = '".$_SESSION["currentUser"]."'";
		$queryResult = $conn->query($sql);
		STATIC $i=0;
		if ($queryResult->num_rows > 0) {
			// output data of each row
			while($row = $queryResult->fetch_assoc()) {
				$userAds[$i]= $row;
				$i++;
			}
		} else {
			echo "0 results";
		}
	}

	// Close the connection to the database
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

<body >
  <div class="side">
    <div class="topSideOptions">
      <div id="account-friends-group" class="btn-group btn-group-justified">
        <a id="account-link" href="../accountPage/index.html" class="btn btn-primary">Account</a>
        <a id="friends-link" href="#" class="btn btn-primary">Friends</a>
      </div>
      <a id="my-ads-link" href="#" class="btn btn-primary btn-block">My Ads</a>
    </div>
    <div class="sideFeed" id="sideFeed">
      <script language="javascript" src="./test.js" onload="populateSideBar(15)"></script>
    </div>
  </div>
  <div class="pageBody">
    <div class="title">
        <!-- Trigger the modal with a button -->
        <button type="button" id="loginButton" class="btn btn-info btn" data-toggle="modal" data-target="#loginModal" data-backdrop="false">Login</button>

        <!-- Modal -->
        <div class="modal fade" id="loginModal" role="dialog">
            <div class="modal-dialog">

              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-body" style="padding:40px 50px;">
                  <!-- added action specification and post method -->
                  <form role="form" action="login.php" method="post">
                    <div class="form-group">
                      <label for="usrname">Username</label>
                      <!-- Marked both forms as required input -->
                      <input type="text" class="form-control" name="username" id="usrname" placeholder="Enter username" required>
                    </div>
                    <div class="form-group">
                      <label for="psw">Password</label>
                      <input type="password" class="form-control" name="password" id="psw" placeholder="Enter password" required>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value="">Remember me</label>
                    </div>
                      <!-- fixed extra space in "login"-->
                      <button id="login-submit" type="submit" class="btn btn-success btn-block" >Login</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button id="modal-close-button" type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal">Close</button>
                  <p class="modal-footer-text">Not a member? <a class="modal-footer-link" href="#">Sign Up</a></p>
                  <p class="modal-footer-text">Forgot <a class="modal-footer-link" href="#">Password?</a></p>
                </div>
              </div>

            </div>
          </div>
        <img id="titleImage" src="assets/titleImage3.png">
        <div id="titleImgBox">
        </div>
        <div id="titleLoginBox">
        </div>
      </div>
    <div class="filter">
    </div>
    <div class="pageGrid" id="pageGrid">
      <!-- Get the array of games to be used for populatePageGrid() -->
	  <script type="text/javascript">
		var listOfGames = <?= json_encode($listOfGames) ?>;
		var userAds = <?= json_encode($userAds) ?>;
	  </script>
      <script language="javascript" src="test.js" onload="populatePageGrid(listOfGames);populateSideBar(userAds);"></script>
    </div>
  </div>
</body>
</html>
