function submitLogin() {
  $(document).ready(function () {
    var data = {
      username: $("#username").val(),
      password: $("#password").val(),
    };

    $.ajax({
      url: "php/login.php",
      type: "POST",
      data: data,

      success: function (response) {
        localStorage.setItem("userId", response.id);
        window.location.assign("profile.html");
      },
      statusCode: {
        401: function () {
          alert("Incorrect password");
        },
        404: function () {
          alert("User not found");
        },
      },
    });
  });
}
