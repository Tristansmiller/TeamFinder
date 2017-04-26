/****************************************************************************************/
/* FILE NAME: logout.php
/*
/* DESCRIPTION: PHP function to log out the current user and restore the default session.
/*
/* REFERENCE:
/*
/* DATE 		BY 			CHANGE REF  DESCRIPTION
/* ======== ======= =========== =============
/* 4/24/17  John Shipp          Created the file
/****************************************************************************************/
<?php
// Inialize session
session_start();
// Delete certain session
unset($_SESSION['username']);
// Delete all session variables
session_destroy();
// Jump to login page
header('Location: index.php');
?>
