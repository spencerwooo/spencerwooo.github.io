document.addEventListener('DOMContentLoaded', () => {
  // Theme constants
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';
  const THEME_SYSTEM = 'system';
  const STORAGE_KEY = 'preferred-theme';
  
  // Elements
  const themeContainer = document.querySelector('.theme-switch-container');
  
  // Create the theme toggle elements
  function createThemeToggle() {
    themeContainer.innerHTML = `
      <div class="theme-switch">
        <div class="theme-option" data-theme="${THEME_LIGHT}"><i class="fas fa-sun"></i></div>
        <div class="theme-option" data-theme="${THEME_SYSTEM}"><i class="fas fa-cog"></i></div>
        <div class="theme-option" data-theme="${THEME_DARK}"><i class="fas fa-moon"></i></div>
      </div>
    `;
    
    // Add event listeners to theme options
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
      option.addEventListener('click', () => {
        const selectedTheme = option.getAttribute('data-theme');
        setTheme(selectedTheme);
      });
    });
  }
  
  // Check if system prefers dark mode
  function prefersDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  // Listen for system theme changes
  function listenForSystemThemeChanges() {
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        // Only update if we're in system mode
        if (localStorage.getItem(STORAGE_KEY) === THEME_SYSTEM) {
          applyTheme(event.matches ? THEME_DARK : THEME_LIGHT, true);
        }
      });
    }
  }
  
  // Set theme and save preference
  function setTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    
    if (theme === THEME_SYSTEM) {
      applyTheme(prefersDarkMode() ? THEME_DARK : THEME_LIGHT, true);
    } else {
      applyTheme(theme, false);
    }
    
    // Update active state in UI
    updateActiveThemeInUI(theme);
  }
  
  // Apply the selected theme to the document
  function applyTheme(theme, isSystemTheme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Additional logic for theme changes can go here
    console.log(`Applied ${theme} theme${isSystemTheme ? ' (from system preference)' : ''}`);
  }
  
  // Update which theme is active in the UI
  function updateActiveThemeInUI(activeTheme) {
    const options = document.querySelectorAll('.theme-option');
    options.forEach(option => {
      const isActive = option.getAttribute('data-theme') === activeTheme;
      option.classList.toggle('active', isActive);
    });
  }
  
  // Initialize theme based on saved preference or system default
  function initializeTheme() {
    createThemeToggle();
    
    const savedTheme = localStorage.getItem(STORAGE_KEY) || THEME_SYSTEM;
    setTheme(savedTheme);
    
    listenForSystemThemeChanges();
  }
  
  // Start the theme management
  initializeTheme();
});
