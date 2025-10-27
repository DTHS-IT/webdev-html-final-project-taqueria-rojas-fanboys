document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollButton');
    const targetSection = document.querySelector('.targetSection');

    if (scrollButton && targetSection) {
        scrollButton.addEventListener('click', function() {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    } 
});

document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.getElementById("myForm");

  const successDiv = document.getElementById("success");

  form.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const stateAbbreviation  = document.getElementById("stateAbbreviation").value
    const zipCode = document.getElementById("zipCode").value

    successDiv.innerHTML = `
        <h2>Form Submitted Successfully!</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${stateAbbreviation}</p>
        <p><strong>Zip Code:</strong> ${zipCode}</p>
      `;

    form.reset();
  });
});