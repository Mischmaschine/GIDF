const darkModeToggle = document.querySelector('.dark-mode-toggle');
const mainStyles = document.getElementById('main-styles');

const darkModeStyles = `
  :root {
    --bg-color: #333;
    --text-color: #f0f0f0;
    --link-color: #1a73e8;
    --btn-bg-color: #1a73e8;
    --btn-bg-color-hover: #1559c1;
    --input-bg-color: #444;
  }

.text-box {
    background-color: rgba(22, 36, 46);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  body {
    background-image: linear-gradient(to right, #1c2d3a, #2f3f57);
  }
`;

const isSystemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (isSystemDarkMode) {
  mainStyles.innerHTML += darkModeStyles;
}

darkModeToggle.addEventListener('click', () => {
    if (mainStyles.innerHTML.includes(darkModeStyles)) {
        mainStyles.innerHTML = mainStyles.innerHTML.replace(darkModeStyles, '');
    } else {
        mainStyles.innerHTML += darkModeStyles;
    }
});
