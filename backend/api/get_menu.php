<?php
// Fetching credentials using environment variables
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

// Fetching data
$data = mysqli_query($dbConnect, "SELECT * FROM Coffee") or die("Unable to select data");

$menuItems = [];
while ($info = mysqli_fetch_assoc($data)) {
    $menuItem = [
        'product_id' => $info['product_id'],
        'product_name' => $info['product_name'],
        'unit_price' => $info['unit_price'],
        'flavor_description' => $info['flavor_description'],
        'origin' => $info['origin'],
        'drink_type' => $info['drink_type'],
        'bean_type' => $info['bean_type'],
        'roast' => $info['roast']
    ];
    
    $menuItems[] = $menuItem;
}


// Outputting JSON
header('Content-Type: application/json');
echo json_encode($menuItems);
?>
