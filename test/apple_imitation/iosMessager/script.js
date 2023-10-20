function showPrompt(message) {
    const prompt = document.getElementById('iosPrompt');
    const promptMessage = prompt.querySelector('.prompt-message');
    promptMessage.textContent = message;
    prompt.style.display = 'flex';
}

function hidePrompt() {
    const prompt = document.getElementById('iosPrompt');
    prompt.style.display = 'none';
}

// 示例: 显示提示框
setTimeout(() => {
    showPrompt('欢迎使用我们的应用!');
}, 1000);
