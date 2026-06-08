// Theme toggle: default dark; persist choice in localStorage
(function(){
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'pref-theme';

  function applyTheme(theme){
    if(theme === 'light'){
      body.classList.add('light');
      body.classList.remove('dark');
      toggle.textContent = 'Dark';
      toggle.setAttribute('aria-pressed','false');
    } else {
      body.classList.remove('light');
      body.classList.add('dark');
      toggle.textContent = 'Light';
      toggle.setAttribute('aria-pressed','true');
    }
  }

  // Initialize: prefer saved value, otherwise default to dark
  const saved = localStorage.getItem(STORAGE_KEY);
  applyTheme(saved || 'dark');

  toggle.addEventListener('click',()=>{
    const isLight = body.classList.contains('light');
    const next = isLight ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY,next);
  });
})();
