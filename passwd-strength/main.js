// Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let strength = document.getElementById("password").value.length;
  let outputEl = document.getElementById("output");
  let inputEl = document.getElementById("password");
  if (strength === 0) {
    outputEl.innerHTML = "Please provide a password.";
  } else if (strength > 0 && strength < 5) {
    outputEl.innerHTML = "Weak";
    outputEl.style = "color: red; font-weight: 2000;";
    inputEl.style = "border: 2px solid red;";
  } else if (strength > 4 && strength < 9) {
    outputEl.innerHTML = "Okay";
    outputEl.style = "color: orange; font-weight: 2000;";
    inputEl.style = "border: 2px solid orange;";
  } else if (strength > 8 && strength < 13) {
    outputEl.innerHTML = "Strong";
    outputEl.style = "color: lime; font-weight: 2000;";
    inputEl.style = "border: 2px solid lime;";
  } else {
    outputEl.innerHTML = "Very Strong";
    outputEl.style = "color: green; font-weight: 2000;";
    inputEl.style = "border: 2px solid green;";
  }
}
