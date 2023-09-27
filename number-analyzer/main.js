// Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

// Function

function btnClicked() {
  let num = +document.getElementById("input").value;
  let evenOdd = document.getElementById("even");
  let posNeg = document.getElementById("pos");
  if (num % 2 !== 0) {
    evenOdd.innerHTML = "Odd";
  } else {
    evenOdd.innerHTML = "Even";
  }
  if (num > 0) {
    posNeg.innerHTML = "Positive";
  } else if (num === 0) {
    posNeg.innerHTML = "Zero";
  } else {
    posNeg.innerHTML = "Negative";
  }
}
