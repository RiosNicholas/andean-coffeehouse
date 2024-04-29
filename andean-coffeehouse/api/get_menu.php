<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');
require __DIR__ . '/vendor/autoload.php';

// Include setup file
require_once 'index.php';

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
echo json_encode($menuItems);
?>
