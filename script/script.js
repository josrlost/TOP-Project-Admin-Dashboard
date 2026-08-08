const btnToggle = document.querySelector('.toggleBtn');
const btnNew = document.querySelector('#btnNew')
const btnUpload = document.querySelector('#btnUpload');
const btnShare = document.querySelector('#btnShare');

function pressingBtn (evt) {
    evt.target.style.backgroundColor = '#ddbeaa';
}

function releasingBtn (evt) {
    evt.target.style.backgroundColor = 'var(--backgroundColorAside)';
}

btnNew.addEventListener('mousedown', pressingBtn);
btnNew.addEventListener('mouseup', releasingBtn);

btnUpload.addEventListener('mousedown', pressingBtn);
btnUpload.addEventListener('mouseup', releasingBtn);

btnShare.addEventListener('mousedown', pressingBtn);
btnShare.addEventListener('mouseup', releasingBtn);

const root = document.documentElement;

function setTheme() {
    const newTheme = root.className === 'dark' ? '' : 'dark';
    root.className = newTheme;
}

btnToggle.addEventListener('click', setTheme);