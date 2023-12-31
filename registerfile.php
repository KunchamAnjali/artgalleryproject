<?php
header('Access-Control-Allow-Origin: *');
$connection = mysqli_connect("localhost", "root", "Anjali@123Archana", "artgallery");

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// Check if the table exists
$tableName = 'userregister';
$tableCheckQuery = "SHOW TABLES LIKE '$tableName'";
$tableCheckResult = mysqli_query($connection, $tableCheckQuery);

if ($tableCheckResult->num_rows == 0) {
    // Table doesn't exist, create it
    $createQuery = "CREATE TABLE $tableName (
        id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(20),
        password VARCHAR(20),
        confirmpassword VARCHAR(20)
    )";

    if (mysqli_query($connection, $createQuery)) {
        echo "Table created successfully";
    } else {
        echo "Error creating table: " . mysqli_error($connection);
    }
} else {
    // Table exists, handle login and registration logic

    // Handle login
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $query = "SELECT * FROM userregister WHERE username = ?";
        $stmt = mysqli_stmt_init($connection);

        if (mysqli_stmt_prepare($stmt, $query)) {
            mysqli_stmt_bind_param($stmt, "s", $username);
            mysqli_stmt_execute($stmt);

            $result = mysqli_stmt_get_result($stmt);
            $row = mysqli_fetch_assoc($result);

            if ($row) {
                // User found, compare passwords
                if ($row['password'] === $password) {
                    echo "Login successful";
                } else {
                    echo "Incorrect password";
                }
            } else {
                echo "User not found";
            }
        } else {
            echo "Error: " . mysqli_error($connection);
        }
    }

    // Handle registration
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $confirmpassword = $_POST['confirmpassword'];

        $query1 = "INSERT INTO userregister (username, password, confirmpassword) VALUES (?, ?, ?)";
        $initialize = mysqli_stmt_init($connection);

        if (mysqli_stmt_prepare($initialize, $query1)) {
            mysqli_stmt_bind_param($initialize, "sss", $username, $password, $confirmpassword);
            mysqli_stmt_execute($initialize);
            echo "Registration successful";
        } else {
            echo "Error: " . mysqli_error($connection);
        }
    }
}

// Close the connection
mysqli_close($connection);
?>
