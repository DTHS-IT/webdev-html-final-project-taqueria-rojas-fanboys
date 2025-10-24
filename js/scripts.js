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