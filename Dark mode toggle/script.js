const toggleBox = document.getElementById('chk');

const userColor = localStorage.getItem('mode');
const isUserColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getUserColor = () => (userColor ? userColor : isUserColor);

window.onload = function() {
    if (getUserColor === 'dark') {
        localStorage.setItem('mode', 'dark');
        document.body.classList.add('dark');
    } else {
        localStorage.setItem('mode', 'light');
        document.body.classList.remove('dark');
    }
};

toggleBox.addEventListener('click', () => {
    if (toggleBox.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('mode', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('mode', 'light');
    }

});
