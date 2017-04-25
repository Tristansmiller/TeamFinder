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
