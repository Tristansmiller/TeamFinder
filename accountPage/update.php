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
	$username = $_POST['username'];
	$password = $_POST['password'];
	$email = $_POST['email'];
	$bio = $_POST['bio'];

	// Update their username
	if(!empty($username)){
		$sql = "UPDATE users SET username = '".$username."' WHERE userID = ".$_SESSION['currentUser'];
		$queryResult = $conn->query($sql);
	}

	// Update their password
	if(!empty($password)){
		$sql = "UPDATE users SET pass = '".$password."' WHERE userID = ".$_SESSION['currentUser'];
		$queryResult = $conn->query($sql);
	}
	
	// Update their email
	if(!empty($email)){
		$sql = "UPDATE users SET email = '".$email."' WHERE userID = ".$_SESSION['currentUser'];
		$queryResult = $conn->query($sql);
	}
	
	// Update their bio
	if(!empty($bio)){
		$sql = "UPDATE users SET description = '".$bio."' WHERE userID = ".$_SESSION['currentUser'];
		$queryResult = $conn->query($sql);
	}
	
	header('Location: indexP.html');
?>