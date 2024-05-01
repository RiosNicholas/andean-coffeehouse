<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);

class CoffeeDAO {
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $database = "andean_coffeehouse_db";
    private $conn;

    public function __construct() {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->database);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function getAllMenuItems() {
        $menuItems = [];

        $result = mysqli_query($this->conn, "SELECT * FROM Coffee");
        if ($result) {
            while ($info = mysqli_fetch_assoc($result)) {
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
            return $menuItems;
        } else {
            return ['error' => 'Unable to select data'];
        }
    }

    public function getAllLocations() {
        $locations = [];
    
        $result = mysqli_query($this->conn, "SELECT * FROM Location");
        if ($result) {
            while ($info = mysqli_fetch_assoc($result)) {
                $location = [
                    'location_id' => $info['location_id'],
                    'city' => $info['city'],
                    'state' => $info['state'],
                    'address' => $info['address'],
                    'phoneNumber' => $info['phoneNumber']
                ];
                $locations[] = $location;
            }
            return $locations;
        } else {
            return ['error' => 'Unable to select data'];
        }
    }
  
    public function getCustomerLeaderboard() {
        $leaderboard = [];
    
        $result = mysqli_query($this->conn, "
            SELECT c.customer_id, c.customer_name, COUNT(o.order_id) AS orders, 
            MIN(o.date_purchased) AS first_purchase_date FROM Customer c 
            LEFT JOIN Orders o ON c.customer_id = o.customer_id WHERE c.customer_id != 0 
            GROUP BY c.customer_id ORDER BY orders DESC, first_purchase_date ASC LIMIT 10
        ");
        if ($result) {
            while ($info = mysqli_fetch_assoc($result)) {
                $customer = [
                    'customer_id' => $info['customer_id'],
                    'customer_name' => $info['customer_name'],
                    'orders' => $info['orders'], // Corrected key name to 'orders'
                    'first_purchase_date' => $info['first_purchase_date']
                ];
                $leaderboard[] = $customer;
            }
            return $leaderboard;
        } else {
            return ['error' => 'Unable to select data'];
        }
    }
    

    public function insertEmail($contact_name, $contact_email, $contact_message, $date_sent) {
        $stmt = $this->conn->prepare("INSERT INTO Emails(contact_name, contact_email, contact_message, date_sent) VALUES(?, ?, ?, ?)");
        $stmt->bind_param('ssss', $contact_name, $contact_email, $contact_message, $date_sent);
    
        if ($stmt->execute()) {
            return ['status' => 1, "message" => "Data inserted successfully"];
        } else {
            return ['status' => 0, "error" => "Error inserting data"];
        }
    }
     
    public function __destruct() {
        if ($this->conn) {
            $this->conn->close();
        }
    }
}

$coffeeDAO = new CoffeeDAO();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        if (isset($_GET['locations'])) {
            $locations = $coffeeDAO->getAllLocations();
            echo json_encode($locations);
        } elseif (isset($_GET['leaderboard'])) {
            $leaderboard = $coffeeDAO->getCustomerLeaderboard();
            echo json_encode($leaderboard);
        } else {
            $menuItems = $coffeeDAO->getAllMenuItems();
            echo json_encode($menuItems);
        }
        break;
    case "POST":
        $data = json_decode(file_get_contents("php://input"));
        if (isset($data->name, $data->email, $data->message)) {
            $date_sent = date('Y-m-d H:i:s'); // Getting the current date and time
            $result = $coffeeDAO->insertEmail($data->name, $data->email, $data->message, $date_sent);
            echo json_encode($result);
        } else {
            echo json_encode(['status' => 0, "error" => "Missing required fields"]);
        }
        break;
}
?>
