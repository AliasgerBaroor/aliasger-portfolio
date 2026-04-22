document.addEventListener('DOMContentLoaded', () => {
    const themeLink = document.getElementById('dynamic-theme');
    const skinButtons = document.querySelectorAll('.skin-btn');
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const panel = document.querySelector('.theme-panel');

    // Toggle the panel slide-in
    toggleBtn.addEventListener('click', () => {
        panel.classList.toggle('active');
    });

    // Switch Theme logic
    skinButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            let fileName = btn.getAttribute('data-file');

            // 1. Fix the extension: Convert .html to .css if necessary
            if (fileName.endsWith('.html')) {
                fileName = fileName.replace('.html', '.css');
            }

            // 2. Fix the Path: Multicolor files are in /css, single colors are in /css/skins
            if (fileName.includes('multicolors') || fileName.includes('monochrome')) {
                themeLink.href = `css/${fileName}`;
            } else {
                themeLink.href = `css/skins/${fileName}`;
            }

            // 3. Update Body Class for background shapes
            // This extracts the color (e.g., 'teal' from 'exotic-teal')
            const colorPart = fileName.split('-').pop().replace('.css', '');
            const newClass = `demo-${colorPart}`;

            document.body.classList.forEach(cls => {
                if (cls.startsWith('demo-')) document.body.classList.remove(cls);
            });
            document.body.classList.add(newClass);

            console.log("Loading skin:", themeLink.href);
        });
    });
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('theme-switcher').classList.remove('opacity-0');
    }, 2000);
    
});