




<?php

$conn = mysqli_connect("localhost", "root", "", "loginregister");



$username = $_POST["username"];
$password = $_POST["password"];

#checkiing if username exist
$user = mysqli_query($conn, "SELECT * FROM tb_user WHERE username = '$username'");

if(mysqli_num_rows($user) > 0){
#collect that row data
  $row = mysqli_fetch_assoc($user);

  if($password == $row['password']){
    #json data 

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($row);
  
  }
  else{
    
    var_dump(http_response_code(401));
    echo "Wrong Password";
    
  }
}
else{
  var_dump(http_response_code(404));
  echo "User Not Registered";
 
}


?>