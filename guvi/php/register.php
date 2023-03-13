<?php
#connecting to database 
# your system is localhost 
#root -username 
#loginregsiter = database name
$conn = mysqli_connect("localhost", "root", "", "loginregister");

#for accessing data from post information 
  $name = $_POST["name"];
  $username = $_POST["username"];
  $password = $_POST["password"];

  if(empty($name) || empty($username) || empty($password)){
    
    var_dump(http_response_code(400));
    exit;
    
  }
#duplicate checking
  $user = mysqli_query($conn, "SELECT * FROM tb_user WHERE username = '$username'");
  if(mysqli_num_rows($user) > 0){
    var_dump(http_response_code(409));
    exit;
  
  }
#add data 
  $query = "INSERT INTO tb_user VALUES('', '$name', '$username', '$password')";
  mysqli_query($conn, $query);


?>