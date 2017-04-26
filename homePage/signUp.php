/****************************************************************************************/
/* FILE NAME: signup.php
/*
/* DESCRIPTION: PHP script for user account creation
/*
/* REFERENCE:
/*
/* DATE 		BY 			CHANGE REF  DESCRIPTION
/* ======== ======= =========== =============
/* 4/20/17  John Shipp          Created the file
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
  $username = $_POST['username'];
	$password = $_POST['password'];
  $email = $_POST['email'];
  $sql = "INSERT INTO teamfinder.users (`username`, `email`, `pass`) VALUES ('$username','$email','$password')";

  if ($conn->query($sql) === TRUE) {
    header("Location: index.html");
  }
  else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  $conn->close();
?>
