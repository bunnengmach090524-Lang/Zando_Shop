function openModal(target) {
    document.getElementById('unifiedModal').style.display = 'flex';
    
    // Switch between the Settings View and Auth View
    if (target === 'settings') {
        showView('view-settings');
    } else {
        showView('view-auth');
        switchAuthTab(target); // 'login' or 'register'
    }
}

function showView(viewId) {
    document.querySelectorAll('.modal-view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

function switchAuthTab(type) {
    // 1. Update Buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + type).classList.add('active');
    
    // 2. Update Form Content
    document.querySelectorAll('.auth-sub-view').forEach(f => f.classList.remove('active'));
    document.getElementById('form-' + type).classList.add('active');
}

function closeModal() {
    document.getElementById('unifiedModal').style.display = 'none';
}

// Close on outside click
window.onclick = function(event) {
    if (event.target.id === 'unifiedModal') closeModal();
}

//  switch dark & light mode 
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    // Optional: Save preference to localStorage
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// Check for saved user preference on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  toggle.checked = true;
  document.documentElement.setAttribute('data-theme', 'dark');
}

// setting
// 1. Define your translations
const translations = {
  en: {
    settings_title: "Settings",
    dark_mode: "Dark Mode"
  },
  km: {
    settings_title: "កំណត់ Settings",
    dark_mode: "លក្ខណៈងងឹត"
  },
  zh: {
    settings_title: "设置",
    dark_mode: "深色模式"
  }
};

// 2. Function to apply the language
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Save preference
  localStorage.setItem("selectedLang", lang);
}

// 3. Event Listeners for the Radio Buttons
const langRadios = document.querySelectorAll('input[name="lang"]');
langRadios.forEach(radio => {
  radio.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
});

// 4. Load saved language on startup
const savedLang = localStorage.getItem("selectedLang") || "km";
setLanguage(savedLang);

// Ensure the correct radio button is visually checked on load
document.querySelector(`input[value="${savedLang}"]`).checked = true;