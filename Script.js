function showMessage() {
    alert("Hello! Thanks for visiting my website!");
}

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Scroll Animation
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
});
