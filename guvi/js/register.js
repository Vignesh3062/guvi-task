function registerData() {
  $(document).ready(function () {
    var postData = {
      name: $("#name").val(),
      username: $("#username").val(),
      password: $("#password").val(),
    };

    $.ajax({
      url: "php/register.php",
      type: "POST",
      data: postData,

      success: function (response) {
        alert("Registration is successful !");
        window.location.assign("index.html");
      },
      statusCode: {
        400: function () {
          alert("Please fill all the fields");
        },

        409: function () {
          alert("Username already exists !");
        },
      },
    });
  });
}
