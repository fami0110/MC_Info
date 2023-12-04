// Toggle dark mode

let mode = 'light';
const toggleTheme = document.getElementById('toggle-theme');

if (typeof(Storage) !== 'undefined') {
  if (localStorage.getItem('mode') !== null) {
    mode = localStorage.getItem('mode');
  } else {
    localStorage.setItem('mode', mode);
  }
}

toggleTheme.checked = (mode === 'dark') ? true : false; // To change the toggle check is true if the setting is in dark mode

function updateMode(mode) {
  if (mode === 'light') {
    document.body.classList.remove('darkmode');
  } else if (mode === 'dark') {
    document.body.classList.add('darkmode');
  }
}

toggleTheme.addEventListener('click', (e) => {
  mode = e.target.checked ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
  updateMode(mode);
})

updateMode(mode);

// Hamburger button
const toggleMenu = document.getElementById('toggle-menu');
const nav = document.querySelector('header nav ul');

toggleMenu.addEventListener('change', () => {
  if (toggleMenu.checked) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
});

// Nav fill background on 100vh scroll

window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight) {
    document.querySelector('header').classList.add('fill');
  } else {
    document.querySelector('header').classList.remove('fill');
  }
});