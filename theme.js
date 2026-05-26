(function () {
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const a11yToggle = document.getElementById('a11yToggle');

    // Load saved preferences
    const savedTheme = localStorage.getItem('ext-theme') || 'dark';
    const savedA11y = localStorage.getItem('ext-a11y') === 'true';

    html.setAttribute('data-theme', savedTheme);
    if (savedA11y) {
        html.setAttribute('data-a11y', 'true');
        a11yToggle.classList.add('active');
    }

    // Theme toggle
    themeToggle.addEventListener('click', function () {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('ext-theme', next);
    });

    // Accessibility toggle
    a11yToggle.addEventListener('click', function () {
        const isActive = html.getAttribute('data-a11y') === 'true';
        if (isActive) {
            html.removeAttribute('data-a11y');
            a11yToggle.classList.remove('active');
            localStorage.setItem('ext-a11y', 'false');
        } else {
            html.setAttribute('data-a11y', 'true');
            a11yToggle.classList.add('active');
            localStorage.setItem('ext-a11y', 'true');
        }
    });

    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();
})();