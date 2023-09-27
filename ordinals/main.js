// Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let num = +document.getElementById("input").value;
  let outputEl = document.getElementById("output");
  if (num < 1 || num > 9) {
    outputEl.innerHTML = "Please enter a number between 1 and 9.";
  } else if (num === 1) {
    outputEl.innerHTML = "1st";
  } else if (num === 2) {
    outputEl.innerHTML = "2nd";
  } else if (num === 3) {
    outputEl.innerHTML = "3rd";
  } else {
    outputEl.innerHTML = `${num}th`;
  }
}
