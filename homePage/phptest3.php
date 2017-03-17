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
      <div id="topSideL">
        <img class="testImage" src="assets/placeholder.PNG" id="testImage"><br>
      </div>
      <div id="topSideR">
      </div>
      <div id="topSideU">
      </div>
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
        <h1 id="title-text"> TeamFinder</h1>
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
	  
      <script type="text/javascript">
	  var size = <?php echo $i ?>;
	  var array = JSON.parse('<?php echo $arrayJSON ?>');
function populatePageGrid(){
  for(var k = 0;k<size;k++){
    var outerDiv=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="gridCell";
    outerDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("gridCell"+k);
    outerDiv.setAttributeNode(att);

    var img = document.createElement("IMG");
    att = document.createAttribute("class");
    att.value = "cellImage";
    img.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("cellImage"+k);
    img.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = array[k].picture;
    img.setAttributeNode(att);

    var para = document.createElement("P");
    var content = document.createTextNode(array[k].name);
    para.appendChild(content);
    att = document.createAttribute("class");
    att.value="cellDesc";
    para.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("cellDesc"+k);
    para.setAttributeNode(att);

    outerDiv.appendChild(img);
    outerDiv.appendChild(document.createElement("BR"));
    outerDiv.appendChild(para);
    document.getElementById("pageGrid").appendChild(outerDiv);
  }
}
		<?php
			echo "populatePageGrid();";
		?>
	  </script>
	  

	  
    </div>
  </div>
</body>
</html>
