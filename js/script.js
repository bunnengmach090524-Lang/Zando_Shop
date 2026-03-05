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