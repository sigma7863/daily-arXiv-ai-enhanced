(function () {
  const STORAGE_KEY = 'site-theme';
  const DARK_ICON =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const LIGHT_ICON =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.8"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function updateToggleButton(button, theme) {
    if (!button) return;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    button.setAttribute('title', nextTheme === 'dark' ? 'ダークモードに切り替え' : 'ライトモードに切り替え');
    button.setAttribute('aria-label', button.getAttribute('title'));
    button.innerHTML = theme === 'dark' ? LIGHT_ICON : DARK_ICON;
  }

  function setTheme(theme, persist = true) {
    applyTheme(theme);
    if (persist) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }

  window.setupThemeToggle = function setupThemeToggle(buttonId = 'themeToggle') {
    const button = document.getElementById(buttonId);
    const currentTheme = getPreferredTheme();
    setTheme(currentTheme, false);
    updateToggleButton(button, currentTheme);

    if (!button) return;

    button.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme, true);
      updateToggleButton(button, nextTheme);
    });
  };

  applyTheme(getPreferredTheme());
})();
