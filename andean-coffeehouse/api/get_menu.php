<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Include setup file
require_once 'index.php';

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
