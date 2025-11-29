// DOM Elements
const codeEditor = document.querySelector('.code-editor');
const runButton = document.querySelector('button:has(i.fa-play)');
const submitButton = document.querySelector('button:has(i.fa-paper-plane)');
const languageSelector = document.querySelector('select');
const mockInterviewBtn = document.querySelector('#start-mock-interview');
const aiTutorInput = document.querySelector('#ai-tutor-input');
const aiTutorSubmit = document.querySelector('#ai-tutor-submit');
const aiTutorResponse = document.querySelector('#ai-tutor-response');

// Theme handling
function applyTheme(theme) {
    // Tailwind uses the 'dark' class on the HTML element
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Update the icon
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Wire up theme toggle button
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // ... rest of your initialization code ...
    if (typeof initializeCodeEditor === 'function') initializeCodeEditor();
});

// ... keep your other existing functions (runCode, submitCode, etc.) below ...