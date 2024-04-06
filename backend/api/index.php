<?php
// Fetch credentials using environment variables
$db_username = getenv('DB_USERNAME');
$db_password = getenv('DB_PASSWORD');
$db_name = getenv('DB_NAME');
$servername = getenv('SERVER_NAME');

// Create database connection
$conn = new mysqli($servername, $db_username, $db_password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$conn->close(); 
?>