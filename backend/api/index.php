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

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO Emails (contact_name, contact_email, contact_message, date_sent) VALUES (?, ?, ?, NOW())");
    $stmt->bind_param("sss", $name, $email, $message);
    
    // Execute the statement
    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(["message" => "Form submission successful"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to submit form"]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["message" => "Method not allowed"]);
}

// Close the connection
$stmt->close();
$conn->close();
?>
