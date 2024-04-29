<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Include setup file
require_once 'index.php';

// Posting form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieving form data
    $contact_name = $_POST['contact_name'] ?? '';
    $contact_email = $_POST['contact_email'] ?? '';
    $contact_message = $_POST['contact_message'] ?? '';
    $date_sent = date('Y-m-d H:i:s'); 
    
    // Preparing SQL statement
    $stmt = $conn->prepare("INSERT INTO Emails(contact_name, contact_email, contact_message, date_sent) VALUES(?, ?, ?, ?)");
    
    // Bind parameters
    $stmt->bind_param('ssss', $contact_name, $contact_email, $contact_message, $date_sent);
    
    if ($stmt->execute()) {
        echo json_encode(array("message" => "Data inserted successfully"));
    } else {
        echo json_encode(array("error" => "Error inserting data"));
    }
} else {
    echo json_encode(array("error" => "Invalid request method"));
}
?>
