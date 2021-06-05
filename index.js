
function generateButton() {
  var y = document.getElementById("buttonNumber").value;
  var random = Math.floor((Math.random() * y));
  var button;
  for (let i = 0; i < y; ++i) {
  	button = document.createElement("BUTTON");
    button.innerHTML = "Button";
    button.addEventListener("click", function() {
    	let b = document.getElementById("ai");
    	if (random == i) {
      	b.innerHTML = "Win";
        b.style.color = "green";
      } else {
      	b.innerHTML = "Lose";
        b.style.color = "red";
      }
    })
    document.getElementById("2").appendChild(button);
  }
}
