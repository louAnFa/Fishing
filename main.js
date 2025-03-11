// Prevent default action for navigation links
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Prevents the default anchor click behavior
    });
});
