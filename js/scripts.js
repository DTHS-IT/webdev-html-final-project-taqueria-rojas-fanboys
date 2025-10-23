// Plain JS loader for header and footer
document.addEventListener("DOMContentLoaded", function() {
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById('header');
      if (header) header.innerHTML = data;
    });
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    });
});