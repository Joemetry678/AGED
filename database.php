<?php
$host = "localhost";
$username = "root";
$password = "newStrongPassword"; // ✅ Double-check this matches phpMyAdmin root password
$database = "user_database";     // ✅ Ensure this DB exists

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}
?>
