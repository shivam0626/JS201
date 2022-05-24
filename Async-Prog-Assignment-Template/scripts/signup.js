document.querySelector("form").addEventListener("submit", signUpFun);

var userData = JSON.parse(localStorage.getItem("SignupCreds"))||[]
function signUpFun() {
  event.preventDefault();

  var userObj = {
    userName: document.querySelector("#user").value,
    userContact:document.querySelector("#contact").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#pass").value,
    
  };

  userData.push(userObj);

  localStorage.setItem("SignupCreds",JSON.stringify(userData));
  alert("Registration Successfull");
  window.location.href = "login.html";
}