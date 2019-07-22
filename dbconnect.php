<?php 
    // Create connection
    $conn = mysqli_connect("localhost", "root", "", "projectweb");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    $conn->set_charset("utf8");
?>