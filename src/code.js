const hexEl = document.getElementById('hexElement');
const darkModeBtn = document.getElementById('dark');
const bodyEl = document.getElementById('body');
let isDarker = Boolean;
let rotateDeg = 0;

// rotating hex
if (hexEl) {
    const intervalId = setInterval(rotateHexEl, 20);
}

function rotateHexEl() {
    rotateDeg += 1;
    hexEl.style.transform = "rotate(" + rotateDeg + "deg)";
    if (rotateDeg === 360) rotateDeg = 0;
}

if (!hexEl) {
    clearInterval(intervalId);
}

// mode switch
if (localStorage.getItem('darker')) {
    isDarker = localStorage.getItem('darker');
    if (isDarker === 'true') {
        console.log('isDarker is in storage and true');
        modeToggle();
    }
}
else isDarker = false;

darkModeBtn.addEventListener('click', modeToggle);

function modeToggle() {
    darkModeBtn.classList.toggle('dark-mode_is-active');
    isDarker = bodyEl.classList.toggle('make-it-darker');
    localStorage.setItem('darker', isDarker);
}