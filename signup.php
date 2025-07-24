<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['username'];
  $email = $_POST['email'];
  $phone = $_POST['phone-number'];
  $country = $_POST['country'];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encrypt it

  $stmt = $conn->prepare("INSERT INTO users (name, email, phone, country, password) VALUES (?, ?, ?, ?, ?)");
  $stmt->bind_param("sssss", $name, $email, $phone, $country, $password);

  if ($stmt->execute()) {
    echo "Sign up successful. <a href='sign in.html'>Go to Sign In</a>";
  } else {
    echo "Error: " . $stmt->error;
  }

  $stmt->close();
}
?>
