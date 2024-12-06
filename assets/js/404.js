//<!--Countdown Script -->
var el = document.getElementById("seconds"),
  total = el.innerHTML,
  timeinterval = setInterval(function () {
    total = --total;
    el.textContent = total;
    if (total <= 0) {
      clearInterval(timeinterval);
      window.location = "index.html"; // Redirect to index.html
    }
  }, 1000);
