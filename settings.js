// settings.js

document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');
    const tabTitleInput = document.getElementById('tab-title');
    const faviconInput = document.getElementById('favicon-url');
    const applyBtn = document.getElementById('apply-btn');

    // Load saved settings on page load
    const savedTheme = localStorage.getItem('theme') || 'default';
    const savedTitle = localStorage.getItem('tabTitle') || 'PVPN | H0ME';
    const savedFavicon = localStorage.getItem('favicon') || '';

    // Set initial values
    themeSelector.value = savedTheme;
    tabTitleInput.value = savedTitle;
    faviconInput.value = savedFavicon;
    document.body.className = savedTheme;
    document.title = savedTitle;

    // Apply settings when the button is clicked
    applyBtn.addEventListener('click', () => {
        const selectedTheme = themeSelector.value;
        const newTitle = tabTitleInput.value;
        const newFavicon = faviconInput.value;

        // Save settings
        localStorage.setItem('theme', selectedTheme);
        localStorage.setItem('tabTitle', newTitle);
        localStorage.setItem('favicon', newFavicon);

        // Update the favicon
        if (newFavicon) {
            const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/png';
            link.rel = 'icon';
            link.href = newFavicon;
            document.head.appendChild(link);
        }

        // Update the body class for theme
        document.body.className = selectedTheme;
        document.title = newTitle;
    });
});
