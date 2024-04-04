<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "nicholas.rios@rutgers.edu"; 
    $subject = "New Contact Form Submission";
    $message_content = "Name: $name\n";
    $message_content .= "Email: $email\n\n";
    $message_content .= "Message:\n$message\n";

    if (mail($to, $subject, $message_content)) {
        http_response_code(200);
        echo json_encode(array("message" => "Email sent successfully"));
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Failed to send email"));
    }
} else {
    http_response_code(405);
    echo json_encode(array("message" => "Method not allowed"));
}
?>
