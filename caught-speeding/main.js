// Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let outputEl = document.getElementById("output");
  let speed = +document.getElementById("speed").value;
  let limit = +document.getElementById("limit").value;
  let difference = speed - limit;
  if (difference >= 20) {
    outputEl.innerHTML = "BIG TICKET";
  } else if (difference > 0 && difference < 20) {
    outputEl.innerHTML = "SMALL TICKET";
  } else {
    outputEl.innerHTML = "NO TICKET";
  }
}
