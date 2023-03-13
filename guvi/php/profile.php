




<?php

$conn = mysqli_connect("localhost", "root", "", "loginregister");
function check()
{
  global $conn;

  $id = $_POST["userId"];

$profile = mysqli_query($conn, "SELECT * FROM tb_profile WHERE userId = '$id'");
$userData = mysqli_query($conn, "SELECT * FROM tb_user WHERE id = '$id'");

$userRow = mysqli_fetch_assoc($userData);
if(mysqli_num_rows($profile) > 0){

    $row = mysqli_fetch_assoc($profile);
 
    header('Content-Type: application/json; charset=utf-8');
    $res =json_encode(array($userRow, $row) );
   echo $res;
  
  }else{
    header('Content-Type: application/json; charset=utf-8');
    $res =json_encode(array($userRow) );
    echo $res;
  
  }
}
function create()
{

  global $conn;

  $hobbies = $_POST["hobbies"];
  $dob = $_POST["dob"];
  $contact = $_POST["contact"];
  $id = $_POST["userId"];
  $age = $_POST["age"];

  if(empty($hobbies) || empty($dob) || empty($contact) || empty($age)){
    var_dump(http_response_code(400));
    echo "Please Fill Out The Form!";
    exit;
  }

  $query = "INSERT INTO tb_profile VALUES('$id', '$contact', '$hobbies', '$dob', '$age')";
  mysqli_query($conn, $query);
  echo "Profile created";
}


function update()
  {
  
    global $conn;
  
    $hobbies = $_POST["hobbies"];
    $dob = $_POST["dob"];
    $contact = $_POST["contact"];
    $id = $_POST["userId"];
    $age = $_POST["age"];
    
    if(empty($hobbies) || empty($dob) || empty($contact) || empty($age)){
      var_dump(http_response_code(400));
      echo "Please Fill Out The Form!";
      exit;
    }

  $query = "UPDATE tb_profile SET contact = '$contact', hobbies = '$hobbies' , dob = '$dob' , age = '$age' WHERE userId= '$id'";
  mysqli_query($conn, $query);
}


if(isset($_POST["query"])){
  if($_POST["query"] == "create"){
    create();
  }
  else if($_POST["query"] == "check"){
    check();

  }else if($_POST["query"] == "update")
  {
    update();
  }
}


?>