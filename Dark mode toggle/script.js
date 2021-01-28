const toggleBox = document.getElementById('chk');
let userColor = localStorage.getItem('mode');

const darkMode = () => {
    document.body.classList.add('dark');
    localStorage.setItem('mode', 'dark');
}

const lightMode = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('mode', 'light');
}

if (userColor === 'dark') {
    darkMode();
    toggleBox.checked = true;
}

toggleBox.addEventListener('click', () => {
    userColor = localStorage.getItem('mode');
    if (userColor === 'dark') {
        lightMode();
        toggleBox.checked = false;
    } else {
        darkMode();
        toggleBox.checked = true;
    }

});
