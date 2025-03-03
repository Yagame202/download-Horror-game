/* main.js */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 6 }
        }
    });

    // Download button functionality
    const downloadBtn = document.getElementById('downloadBtn');
    const progressBar = document.getElementById('downloadProgress');
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        simulateDownload();
    });

    function simulateDownload() {
        let progress = 0;
        downloadBtn.style.pointerEvents = 'none';
        
        const interval = setInterval(() => {
            progress += 1;
            progressBar.style.width = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                downloadBtn.style.pointerEvents = 'auto';
                window.location.href = 'path/to/your/game.zip';
            }
        }, 50);
    }
});

// Language switcher
function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(lang)) {
            btn.classList.add('active');
        }
    });
}