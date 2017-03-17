<?php
// define variables and set to empty values
$usrname = $psw = ;
if (isset($_POST["submit"])){
       $usrname = test_input($_POST["usrname"]);
       $psw = test_input($_POST["psw"]);
       //echos for testing received input, remove later.
        echo "<h2>Your Input:</h2>";
        echo $usrname;
        echo "<br>";
        echo $psw;
    }
function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
