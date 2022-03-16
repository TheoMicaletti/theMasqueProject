const message = "Thanks for your message";

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});