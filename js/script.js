
// menutoggle
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
function toggleMenu() {
    menuToggle.classList.remove('active');
    navigation.classList.remove('active');
}

// delay action 
function delay(URL) {
    setTimeout(function () { window.location = URL }, 350);
}

// sticky navbar
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// theme switch
// getting the selected theme from the local storage
let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light-mode');
}
else {
    setTheme(theme);
}

// switching themes
let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.id;
        setTheme(mode);
        setTimeout(function () {
            toggleMenu();
        }, 0.4 * 1000);
        // setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light-mode') {
        document.getElementById('theme-style').href = 'css/style.css';
    }
    if (mode == 'dark-mode') {
        document.getElementById('theme-style').href = 'css/dark.css';
    }
    localStorage.setItem('theme', mode);
}

// toggle colors
function toggleColors() {
    bw = document.querySelectorAll('.bw');
    button = document.querySelector('.rainbow-button');
    if (button.getAttribute('data-value') === 'off') {
        button.setAttribute('data-value', 'on');
        for (i = 0; i < bw.length; i++) {
            bw[i].classList.add('active');
        }
    }
    else {
        button.setAttribute('data-value', 'off');
        for (i = 0; i < bw.length; i++) {
            bw[i].classList.remove('active');
        }
    }
}