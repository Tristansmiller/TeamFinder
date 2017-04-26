/****************************************************************************************/
/* FILE NAME: login.php
/*
/* DESCRIPTION: login handler for home and game page.
/*
/* REFERENCE:
/*
/* DATE 		BY 			CHANGE REF  DESCRIPTION
/* ======== ======= =========== =============
/* 4/19/17  John Shipp          Created the file
/* 4/22/17  Jacob Farner				Added SQL conn verification
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
	function clean($string) {
   $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
   return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
	}
	$username = $_POST['username'];
	$password = $_POST['password'];
	$cleanuser = clean($username);
	$password = clean($password);
	// Select all games from the database
	$sql = "SELECT userID FROM teamfinder.users WHERE username = '".$cleanuser."' AND pass = '".$cleanpass."'";
	$queryResult = $conn->query($sql);
	if ($queryResult!=NULL) {
		// output data of each row
		while($row = $queryResult->fetch_assoc()) {
			$currentUser = $row['userID'];
		}
		session_start();
		$_SESSION['currentUser']=$currentUser;
		header('Location: index.php');
	}
  else {
		echo "0 results";
	}
	header('Location: index.php');
	} else {
		echo "0 results";
	}
	header('Location: index.php');
	echo "<h2>Wrong username and/or password:</h2>";
	echo $username;
	echo "<br>";
	echo $password;
?>
