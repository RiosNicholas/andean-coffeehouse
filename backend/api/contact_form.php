<?php
$db_username = getenv('DB_USERNAME');
$db_password = getenv('DB_PASSWORD');
$db_name = getenv('DB_NAME');
$servername = getenv('SERVER_NAME');

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $date_sent = date("m-d-Y");

        // Prepare SQL statement to insert data into Emails table
        $stmt = $conn->prepare("INSERT INTO Emails (contact_name, contact_email, contact_message, date_sent) 
                                VALUES (:contact_name, :contact_email, :contact_message, :date_sent)");
        // Bind parameters
        $stmt->bindParam(':contact_name', $name);
        $stmt->bindParam(':contact_email', $email);
        $stmt->bindParam(':contact_message', $message);
        $stmt->bindParam(':date_sent', $date_sent);

        // Execute the statement
        if ($stmt->execute()) {
            http_response_code(200);
            echo json_encode(array("message" => "Data inserted successfully"));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to insert data"));
        }
    } else {
        http_response_code(405);
        echo json_encode(array("message" => "Method not allowed"));
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(array("message" => "Connection failed: " . $e->getMessage()));
}
?>
