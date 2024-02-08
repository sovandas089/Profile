const nameElement = document.getElementById("name");
const messageBtn = document.getElementById("message-btn");
const followBtn = document.getElementById("follow-btn");

nameElement.textContent = "Sovan Das";

messageBtn.addEventListener("click", () => {
  alert("Sovan get a Coffiee from you!");
});

function myFunction() {
  alert("Sovan get a Coffiee from you!");
}

followBtn.addEventListener("click", () => {
  alert("You are now following Sovan!");
});

function myFunction() {
  alert("You're now following Sovan !");
}
