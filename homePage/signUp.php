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
  $sql "INSERT INTO teamfinder.users(`username`, `email`, `pass`, `picture`, `description`, `skill`, `friendliness`, `teamwork`, `average`, `startTime`, `endTime`) VALUES ($username,$email,$password,"assets\\testAvatar.png","I just want to have fun",2,2,2,2,"5:00","6:00")";
  ?>
