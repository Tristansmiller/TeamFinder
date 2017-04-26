/****************************************************************************************/
/* FILE NAME: index.php
/*
/* DESCRIPTION: Home page
/*
/* REFERENCE:
/*
/* DATE 		BY 			CHANGE REF  DESCRIPTION
/* ======== ======= =========== =============
/* 4/25/17  John Shipp          Updated login button to a dynamic login/logout.
/****************************************************************************************/
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


	//Get the information about the game
	$sql = "SELECT * FROM game WHERE gameID = ".$_GET['id'];
	$result = $conn->query($sql);

	STATIC $i=0;
	if ($result->num_rows > 0) {
		// output data of each row; there should exactly 1 row
		while($row = $result->fetch_assoc()) {
			$game[$i]= $row;
			$i=$i+1;
		}
	} else {
		echo "0 results";
	}

	//Select all of the ads for the game
	$sql = "SELECT * FROM ad WHERE gameID = '".$game[0]['gameID']."'";
	$result = $conn->query($sql);
	/* Useful debugging script to check if the SQL is correct
	if (!$result) {
		trigger_error('Invalid query: ' . $conn->error);
	}
	*/
	$adsFound = false;
	STATIC $j=0;

	if ($result->num_rows > 0) {
		// output data of each row
		while($row = $result->fetch_assoc()) {
			$adArray[$j]= $row;
			$j=$j+1;
		}
		$adsFound = true;
	} else {
		echo "0 results";
	}

	//Find who the ads belong to
	if($adsFound==true){
		for($x=0;$x<sizeof($adArray);$x++){
			$sql = "SELECT username,picture FROM users INNER JOIN ad ON users.userID=ad.userID WHERE ad.userID = ".$adArray[$x]['userID'];
			$result = $conn->query($sql);
			if($result->num_rows>0){
				while($row=$result->fetch_assoc()){
					$adArray[$x]['username']=$row['username'];
					$adArray[$x]['picture']=$row['picture'];
				}
			}
		}
	}print_r($adArray);
	$conn->close();
?>
<html>
<head>
  <meta charset="UTF-8">
  <title>Test</title>
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
        <a id="account-link" href="#" class="btn btn-primary">Account</a>
        <a id="friends-link" href="#" class="btn btn-primary">Friends</a>
      </div>
      <a id="my-ads-link" href="#" class="btn btn-primary btn-block">My Ads</a>
    </div>
    <div class="sideFeed" id="sideFeed">
      <script language="javascript" src="test.js" onload="populateSideBar(15)"></script>
    </div>
  </div>
  <div class="pageBody">
    <div class="title">
			<script>
			var user = '<?= $username ?>';
			var content;
			var type;
			if (user == 'root') {
				content = "Login";
				type = "button";
			}
			else {
				content = "Logout";
				type = "submit";
			}
			window.onload = function() {
				document.getElementById("loginButton").innerHTML=content;
				document.getElementById("loginButton").type=type;
			}
			</script>
			<form method="get" action="logout.php">
				<!-- Trigger the modal with a button -->
        <button type="button" id="loginButton" class="btn btn-info btn" data-toggle="modal" data-target="#loginModal" data-backdrop="false"></button>
			</form>
        <!-- Modal -->
        <div class="modal fade" id="loginModal" role="dialog">
            <div class="modal-dialog">

              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-body" style="padding:40px 50px;">
                  <form role="form">
                    <div class="form-group">
                      <label for="usrname">Username</label>
                      <input type="text" class="form-control" id="usrname" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                      <label for="psw">Password</label>
                      <input type="password" class="form-control" id="psw" placeholder="Enter password">
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value="">Remember me</label>
                    </div>
                      <button id="login-submit" type="submit" class="btn btn-success btn-block"> Login</button>
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

          <!--Trigger the create ad modal with this button-->
        <button type="button" id="createButton" class="btn btn-info btn" data-toggle="modal" data-target="#createModal" data-backdrop="false">Create Ad</button>

        <!-- Create Ad Modal -->
        <div class="modal fade" id="createModal" role="dialog">
            <div class="modal-dialog">

              <!-- Modal content-->
              <div class="modal-content create-modal-content">
                <div class="modal-body" style="padding:40px 50px;">
                  <div class="imageNode">
                    <img class="listImage" src="assets/test.png">
                    <p class="listUSR">USERNAME</p>
                  </div>
                  <div class="listInfo">
                    <div class="form-group ad-desc-form">
                      <label for="adTitle">Ad Title</label>
                      <input class="form-control" id="adTitle" placeholder="Enter a title.">
                      <br>
                      <label for="adDesc">Ad Description</label>
                      <textarea class="form-control" row="50" col="50" id="adDesc" placeholder="Enter a description."></textarea>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button id="modal-close-button" type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal">Close</button>
                  <button id="createAdButton" type="submit" class="btn btn-default btn-primary pull-right">Create</button>
                </div>
              </div>

            </div>
          </div>
          <a href="../homePage/index.php">
        <img id="titleImage" src="assets/titleImage3.png" >
        </a>
        <div id="titleImgBox">
		  <!-- get the game picture and name from the query -->
          <img id="gameImage" src="..\<?php echo $game[0]['picture'] ?>">
          <h1 id="gameName"><?php echo $game[0]['gameName'] ?></h1>
        </div>
        <div id="titleLoginBox">
        </div>
      </div>
    <div class="filter">
    </div>
    <div class="pageList" id="pageList">
	  <!-- Set the array of ads as a global variable to call in populatePageList() -->
	  <script language="javascript"> var adArray = <?php echo json_encode($adArray)?>; </script>
	  <script src="testGame.js" type="text/javascript" onload="populatePageList(adArray)"></script>
    </div>
  </div>
</body>
</html>
