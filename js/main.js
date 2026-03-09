// Toggle Password Visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle icon
    const icon = this.querySelector('i');
    if (type === 'password') {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
});

// Login Form Submit
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulação de login
    if (username && password) {
        showMessage('Login realizado com sucesso! 🎉', 'success');
        console.log('Login:', { username, password });
        
        // Aqui você pode adicionar a lógica de autenticação real
        // Por exemplo, fazer uma chamada à API
    } else {
        showMessage('Por favor, preencha todos os campos.', 'error');
    }
});

// Register Button
const registerBtn = document.getElementById('registerBtn');
registerBtn.addEventListener('click', function() {
    showMessage('Funcionalidade de cadastro em desenvolvimento...', 'info');
    console.log('Cadastrar clicado');
    // Aqui você pode redirecionar para uma página de cadastro
    // window.location.href = 'register.html';
});

// Gmail Login
const gmailBtn = document.getElementById('gmailBtn');
gmailBtn.addEventListener('click', function() {
    showMessage('Login com Gmail em desenvolvimento...', 'info');
    console.log('Login com Gmail clicado');
    // Aqui você pode integrar com a API do Google
});

// Phone Login
const phoneBtn = document.getElementById('phoneBtn');
phoneBtn.addEventListener('click', function() {
    showMessage('Login com número em desenvolvimento...', 'info');
    console.log('Login com número clicado');
    // Aqui você pode adicionar a lógica de autenticação por SMS
});

// iCloud Login
const icloudBtn = document.getElementById('icloudBtn');
icloudBtn.addEventListener('click', function() {
    showMessage('Login com iCloud em desenvolvimento...', 'info');
    console.log('Login com iCloud clicado');
    // Aqui você pode integrar com a API da Apple
});

// Function to show messages
function showMessage(message, type = 'info') {
    // Remove mensagem anterior se existir
    const existingMessage = document.querySelector('.message-toast');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Criar nova mensagem
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast message-${type}`;
    messageDiv.textContent = message;
    
    // Adicionar estilos inline para a mensagem
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 500;
        font-size: 14px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        max-width: 400px;
    `;
    
    // Cores baseadas no tipo
    if (type === 'success') {
        messageDiv.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        messageDiv.style.color = 'white';
    } else if (type === 'error') {
        messageDiv.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        messageDiv.style.color = 'white';
    } else {
        messageDiv.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        messageDiv.style.color = 'white';
    }
    
    document.body.appendChild(messageDiv);
    
    // Remover após 3 segundos
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 3000);
}

// Adicionar animações CSS para as mensagens
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Enter key navigation
document.getElementById('username').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('password').focus();
    }
});
document.getElementById("registerBtn").addEventListener("click", function () {
    window.location.href = "cadastro.html";
});