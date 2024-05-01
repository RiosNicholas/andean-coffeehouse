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

    public function postEmail($contact_name, $contact_email, $contact_message) {
        $date_sent = date('Y-m-d H:i:s');

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
        $menuItems = $coffeeDAO->getAllMenuItems();
        echo json_encode($menuItems);
        break;
    case "POST":
        $data = json_decode(file_get_contents("php://input"));
        if (isset($data->contact_name, $data->contact_email, $data->contact_message)) {
            $result = $coffeeDAO->postEmail($data->contact_name, $data->contact_email, $data->contact_message);
            echo json_encode($result);
        } else {
            echo json_encode(['status' => 0, "error" => "Missing required fields"]);
        }
        break;
}
?>
