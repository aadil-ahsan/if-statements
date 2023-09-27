// Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

// Function

function btnClicked() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let outputEl = document.getElementById("output");
  if (username === "admin" && password === "1234") {
    outputEl.innerHTML = "Login Successful";
  } else if (username === "admin" && password !== "1234") {
    outputEl.innerHTML = "Invalid Password";
  } else {
    outputEl.innerHTML = "Invalid Username";
  }
}
