function generateButton() {
  var y = document.getElementById("buttonNumber").value;
  var random = Math.floor((Math.random() * y));
  var button;
  for (let i = 0; i < y; ++i) {
  	button = document.createElement("BUTTON");
    button.innerHTML = "Button";
    button.addEventListener("click", function() {
    	let text = document.getElementById("txt");
    	if (random == i) {
      	text.innerHTML = "Win";
        text.style.color = "green";
      } else {
      	text.innerHTML = "Lose";
        text.style.color = "red";
      }
    })
    document.getElementById("createButton").appendChild(button);
  }
}
