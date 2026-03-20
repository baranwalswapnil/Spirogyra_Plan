// cursor.js - Custom cursor and trail effects

let currentFestival = null;

// Default cursor color when no festival is active
const DEFAULT_CURSOR_COLOR = 'rgba(255, 255, 255, 0.9)';

// Initialize Cursor
function initCursor() {
    currentFestival = getCurrentFestival();

    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    // Keep cursor visible at all times — set default color immediately
    cursor.style.background = DEFAULT_CURSOR_COLOR;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';

        if (currentFestival) {
            const randomColor = currentFestival.colors[Math.floor(Math.random() * currentFestival.colors.length)];
            cursor.style.background = randomColor;
            cursor.style.boxShadow  = `0 0 8px ${randomColor}`;
            createTrail(e.clientX, e.clientY);
        } else {
            cursor.style.background = DEFAULT_CURSOR_COLOR;
            cursor.style.boxShadow  = '0 0 6px rgba(0,0,0,0.2)';
        }
    });

    // Hide cursor when it leaves the window, show when it returns
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });

    // Scale up slightly on clickable elements
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, button, [onclick], input, textarea, select')) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('a, button, [onclick], input, textarea, select')) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });
}

// Generate Trail Particles
function createTrail(x, y) {
    if (Math.random() > 0.4) return;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';

    const particleChar = currentFestival.particles[Math.floor(Math.random() * currentFestival.particles.length)];
    trail.textContent = particleChar;
    trail.style.left = x + 'px';
    trail.style.top  = y + 'px';

    const spread = 15;
    const rx = (Math.random() - 0.5) * spread;
    const ry = (Math.random() - 0.5) * spread;
    trail.style.transform = `translate(calc(-50% + ${rx}px), calc(-50% + ${ry}px))`;

    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 1000);
}

// Start cursor on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCursor);
} else {
    initCursor();
}