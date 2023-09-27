// Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

// Function

function btnClicked() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  let output = document.getElementById("output");
  if (num1 > num2 && num1 > num3) {
    output.innerHTML = num1;
  } else if (num2 > num1 && num2 > num3) {
    output.innerHTML = num2;
  } else {
    output.innerHTML = num3;
  }
}
