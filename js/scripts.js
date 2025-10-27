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
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    successDiv.innerHTML = `
        <h2>Form Submitted Successfully!</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `;

    form.reset();
});
});

// Highlight the active navbar link based on the current page
function setActiveNav() {
    const header = document.getElementById('header');
    if (!header) return;
    const navbar = header.querySelector('#navbar');
    if (!navbar) return;

    const links = navbar.querySelectorAll('a[href]');
    // determine current file name (e.g., "menu.html") or default to index.html
    const path = window.location.pathname;
    let page = path.substring(path.lastIndexOf('/') + 1);
    if (!page) page = 'index.html';

    links.forEach(a => {
        // Normalize href (remove any leading path)
        const href = a.getAttribute('href').split('/').pop();
        if (href === page) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    });
}

// If header is loaded asynchronously (via jQuery .load), use a MutationObserver
// to run setActiveNav once the #navbar is inserted.
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header');
    if (!headerContainer) return;

    // Try to set right away in case header is already present
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