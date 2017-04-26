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
  function clean($string) {
   $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

   return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
	}
  $username = $_POST['username'];
	$password = $_POST['password'];
  $email = $_POST['email'];
  $cleanuser = clean($username);
  $cleanpass = clean($password);
  $sql = "INSERT INTO teamfinder.users (`username`, `email`, `pass`) VALUES ('$cleanuser','$email','$cleanpass')";

  if ($conn->query($sql) === TRUE) {
    header("Location: index.html");
  }
  else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  $conn->close();
?>
