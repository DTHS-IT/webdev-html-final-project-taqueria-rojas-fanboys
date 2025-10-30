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

  const form = document.getElementById("application-form");

  const successDiv = document.getElementById("success");

  form.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    successDiv.innerHTML = `
        <h2>Form Submitted Successfully!</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Call 302-555-1234 for further assistance.</strong></p>
      `;

    form.reset();
});
});


function setActiveNav() {
    const header = document.getElementById('header');
    if (!header) return;
    const navbar = header.querySelector('#navbar');
    if (!navbar) return;

    const links = navbar.querySelectorAll('a[href]');
    const path = window.location.pathname;
    let page = path.substring(path.lastIndexOf('/') + 1);
    if (!page) page = 'index.html';

    links.forEach(a => {
        const href = a.getAttribute('href').split('/').pop();
        if (href === page) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header');
    if (!headerContainer) return;


    setActiveNav();

    const mo = new MutationObserver((mutations) => {
        for (const m of mutations) {
            if ([...m.addedNodes].some(n => n.nodeType === 1 && n.querySelector && n.querySelector('#navbar'))) {
                setActiveNav();
                break;
            }
        }
    });

    mo.observe(headerContainer, { childList: true, subtree: true });
});

document.addEventListener("DOMContentLoaded", function () {

  const orderForm = document.getElementById("order-form");

  const successDiv = document.getElementById("order-success");

  orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    successDiv.innerHTML = `
        <h2>Order has been received</h2>
        <p>Thank you for your order! <br>
        Call 302-555-1234 for further assistance.</p>
        
      `;

    form.reset();
});
});
