<?php
    class DbConnect {
        // Fetching environment variables
        private $db_username;
        private $db_password;
        private $db_name;
        private $servername;

        public function __construct() {
            $this->db_username = getenv('DB_USERNAME');
            $this->db_password = getenv('DB_PASSWORD');
            $this->db_name = getenv('DB_NAME');
            $this->servername = getenv('SERVER_NAME');
        }

        public function connect() {
            try {
                $conn = new PDO('mysql:host=' . $this->servername . ';dbname=' . $this->db_name, $this->db_username, $this->db_password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            } catch (\Exception $e) {
                echo "Database Error: " . $e->getMessage();
            }
        }    
    }
?>
