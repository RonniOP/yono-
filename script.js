document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor tags with href starting with http or https
    document.querySelectorAll('a[href^="http"], a[href^="https"]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent the default click behavior

            const url = link.getAttribute('href');
            // Use window.location.href to open the link in the browser
            window.location.href = url;
        });
    });
});