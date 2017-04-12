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
        <a id="account-link" href="../accountPage/indexP.html" class="btn btn-primary">Account</a>
        <a id="friends-link" href="../accountPage/indexF.html" class="btn btn-primary">Friends</a>
      </div>
      <a id="my-ads-link" href="../accountPage/indexM.html" class="btn btn-primary btn-block">My Ads</a>
    </div>
    <div class="sideFeed" id="sideFeed">
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
                      <input type="text" class="form-control" id="usrname" placeholder="Enter username" required>
                    </div>
                    <div class="form-group">
                      <label for="psw">Password</label>
                      <input type="password" class="form-control" id="psw" placeholder="Enter password" required>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" value="">Remember me</label>
                    </div>
                    <button id="login-submit" type="submit" class="btn btn-success btn-block submit"> Login</button>
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
	    <?php
			$servername = "localhost";
			$username = "root";
			$password = "";
			$dbname = "oneup";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			}
			$sql = "SELECT name,picture FROM game";
			$result = $conn->query($sql);
			STATIC $i=0;
			if ($result->num_rows > 0) {
				// output data of each row
				while($row = $result->fetch_assoc()) {
					$array[$i]= $row;
					$i=$i+1;
				}
			} else {
				echo "0 results";
			}
		//	print_r($array);
			$arrayJSON = json_encode($array);
			$conn->close();
		?>
	  <script type="text/javascript"> var gameArray = <?php echo json_encode($array) ?>;</script>
      <script language="javascript" src="./test.js" onload="populatePageGrid(gameArray);populateSideBar(15);"></script>
    </div>
  </div>
</body>
</html>
