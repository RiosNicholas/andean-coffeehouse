<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json');

// API methods
require_once 'get_menu.php';
require_once 'post_email.php';

// Fetching environment variables
$db_username = getenv('DB_USERNAME');
$db_password = getenv('DB_PASSWORD');
$db_name = getenv('DB_NAME');
$servername = getenv('SERVER_NAME');

// Check if environment variables are set
if ($db_username === false || $db_password === false || $db_name === false || $servername === false) {
    echo "Error: Environment variables are not configured.";
    exit;
}

// Connecting to MariaDB
$dbConnect = new mysqli($servername, $db_username, $db_password, $db_name);

if (mysqli_connect_errno()) {
    echo "Error: Unable to connect to database.";
    exit;
}
// Check connection
if ($dbConnect->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed"]);
    exit();
}

// $conn->close();
?>
