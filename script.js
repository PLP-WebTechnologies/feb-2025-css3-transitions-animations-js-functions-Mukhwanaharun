const button = document.getElementById('magicButton');

// Load saved color from localStorage
const savedColor = localStorage.getItem('buttonColor');
if (savedColor) {
    button.style.backgroundColor = savedColor;
}

button.addEventListener('click', () => {
    // Trigger animation
    button.classList.add('animate');

    // Change color
    const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = newColor;

    // Save color to localStorage
    localStorage.setItem('buttonColor', newColor);

    // Remove animation class after animation ends so it can animate again
    button.addEventListener('animationend', () => {
        button.classList.remove('animate');
    }, { once: true });
});