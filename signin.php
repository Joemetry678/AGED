<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $result = $stmt->get_result();

  if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
      $_SESSION['user'] = $user;
      header("Location: profile.php");
      exit;
    } else {
      echo "Wrong password. <a href='sign in.html'>Try again</a>";
    }
  } else {
    echo "User not found. <a href='sign in.html'>Sign up</a>";
  }

  $stmt->close();
}
?>
