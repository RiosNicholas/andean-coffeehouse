<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

// Fetching credentials using environment variables
$db_username = getenv('DB_USERNAME');
$db_password = getenv('DB_PASSWORD');
$db_name = getenv('DB_NAME');
$servername = getenv('SERVER_NAME');

// Create database connection
$conn = new mysqli($servername, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed"]);
    exit();
}

$conn->close();
?>
