window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    // Add 'scrolled' class to header when page is scrolled
    // The number (50) is the scroll distance in pixels
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
