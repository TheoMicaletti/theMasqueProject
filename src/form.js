const message = "Merci pour votre idée !";

document.getElementById("myForm").addEventListener("submit", function () {
  alert(message);
});

const butt = document.getElementById('myForm');

butt.addEventListener('submit', function(event) {
    event.target.disabled = true;
});