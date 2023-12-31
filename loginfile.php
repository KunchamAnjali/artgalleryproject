<?php
header('Access-Control-Allow-Origin: *');
$connection = mysqli_connect("localhost", "root", "Anjali@123Archana", "artgallery");

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// Check if the table exists
$tableName = 'userlogin';
$tableCheckQuery = "SHOW TABLES LIKE '$tableName'";
$tableCheckResult = mysqli_query($connection, $tableCheckQuery);

if ($tableCheckResult->num_rows == 0) {
    // Table doesn't exist, create it
    $createQuery = "CREATE TABLE $tableName (
        id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(20),
        password VARCHAR(20)
    )";

    if (mysqli_query($connection, $createQuery)) {
        echo "Table created successfully";
    } else {
        echo "Error creating table: " . mysqli_error($connection);
    }
} else {
    echo "Table '$tableName' already exists";
}

$query1 = "INSERT INTO userlogin (username, password) VALUES (?, ?)";
$initialize = mysqli_stmt_init($connection);

if (mysqli_stmt_prepare($initialize, $query1)) {
    $username = $_POST['username']; // Replace with the actual username
    $password = $_POST['password']; // Replace with the actual password

    mysqli_stmt_bind_param($initialize, "ss", $username, $password);
    mysqli_stmt_execute($initialize);
    echo "Data inserted successfully";
} else {
    echo "Error: " . mysqli_error($connection);
}

// Close the connection
mysqli_close($connection);
?>


