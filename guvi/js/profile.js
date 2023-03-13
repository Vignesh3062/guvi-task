if (localStorage.getItem("userId") == null) {
  window.location.assign("login.html");
}
let globalData;
$(document).ready(function () {
  $.ajax({
    url: "php/profile.php",
    type: "POST",
    dataType: "json",
    data: {
      userId: localStorage.getItem("userId"),
      query: "check",
    },

    success: function (response) {
      globalData = response;
      if (response.length == 2) {
        document.getElementById("profile-username").innerText =
          "Hi, " + response[0].username;
        const profile = response[1];
        var profileList = document.getElementById("profile-exist");
        document.getElementById("profile-exist-1").style.display = "block";
        profileList.style.display = "block";

        profileList.insertAdjacentHTML(
          "beforeend",
          "<li>" + "DOB" + " : " + profile.dob + " </li>"
        );
        profileList.insertAdjacentHTML(
          "beforeend",
          "<li>" + "Contact Number" + " : " + profile.contact + " </li>"
        );
        profileList.insertAdjacentHTML(
          "beforeend",
          "<li>" + "Age" + " : " + profile.age + " </li>"
        );
        profileList.insertAdjacentHTML(
          "beforeend",
          "<li>" + "Hobbies" + " : " + profile.hobbies + " </li>"
        );
      } else {
        var profileHide = document.getElementById("no-profile");
        profileHide.style.display = "block";

        document.getElementById("create-profile-username").innerText =
          "Hi, " + response[0].username;
      }
    },
    error: function (err) {},
  });
});
const enableEdit = () => {
  document.getElementById("profile-exist").style.display = "none";
  document.getElementById("profile-exist-1").style.display = "none";
  document.getElementById("no-profile").style.display = "block";

  document.getElementById("hobbies").value = globalData[1].hobbies;
  document.getElementById("age").value = globalData[1].age;
  document.getElementById("dob").value = globalData[1].dob;
  document.getElementById("contact").value = globalData[1].contact;
  document.getElementById("create-profile-heading").style.display = "none";
  document.getElementById("create-profile-btn").style.display = "none";
  document.getElementById("edit-profile-heading").style.display = "block";
  document.getElementById("edit-profile-btn").style.display = "inline";
  document.getElementById("edit-my-profile").style.display = "none";
  document.getElementById("logout-2").style.display = "none";
};
const editProfile = () => {
  var data = {
    hobbies: $("#hobbies").val(),
    contact: $("#contact").val(),
    dob: $("#dob").val(),
    age: $("#age").val(),
    userId: localStorage.getItem("userId"),
    query: "update",
  };
  console.log(data);
  $(document).ready(function () {
    $.ajax({
      url: "php/profile.php",
      type: "POST",
      data: data,

      success: function (response) {
        console.log(response);
        alert("Profile edited successfully!");
        window.location.reload();
      },
      statusCode: {
        400: function () {
          alert("Please fill all the fields!");
        },
      },
    });
  });
};

const createProfile = () => {
  var data = {
    hobbies: $("#hobbies").val(),
    contact: $("#contact").val(),
    dob: $("#dob").val(),
    age: $("#age").val(),
    userId: localStorage.getItem("userId"),
    query: "create",
  };
  console.log(data);
  $(document).ready(function () {
    $.ajax({
      url: "php/profile.php",
      type: "POST",
      data: data,

      success: function (response) {
        alert(response);
        window.location.reload();
      },
      statusCode: {
        400: function () {
          alert("Please fill all the fields!");
        },
      },
    });
  });
};

const logout = () => {
  localStorage.removeItem("userId");
  window.location.assign("index.html");
};
