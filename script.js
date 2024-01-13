console.log("check connection");
let elementTaking = document.getElementsByClassName("keyPress");

addEventListener("keydown", (e) => {
  let keyName = e.key;
  let keyNo = e.which;
  var textChange = document.querySelector(".text");
  textChange.innerText = `You Pressed  ${keyName}`;
  textChange.style.color = "orange";
  var displayText = document.querySelector("span");
  displayText.style.display = "block";
  displayText.style.display = "flex";
  displayText.style.alignItems = "center";
  displayText.style.justifyContent = "center";
  displayText.style.backgroundColor = "white";
  displayText.style.color = "green";
  displayText.innerText = `${keyNo}`;
  playSound("mysound.wav");
});
function playSound(mysound) {
  let audio = new Audio("mysound.wav");
  audio.play();
}
