<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['user'])) {
  header("Location: signin.html");
  exit;
}
$user = $_SESSION['user'];
?>


<!DOCTYPE html>
<html>
<head>
  <title>Your Profile</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Welcome, <?php echo $user['name']; ?>!</h1>
  <p>Email: <?php echo $user['email']; ?></p>
  <p>Phone: <?php echo $user['phone']; ?></p>
  <p>Country: <?php echo $user['country']; ?></p>
  <p>This is your dashboard.</p>
  <a href="logout.php">Logout</a>
</body>
</html>
