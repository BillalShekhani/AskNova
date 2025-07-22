export function initializeChat(inputSelector, buttonSelector, chatAreaSelector, apiEndpoint) {
    const inputField = document.querySelector(inputSelector);
    const sendButton = document.querySelector(buttonSelector);
    const chatArea = document.querySelector(chatAreaSelector);

    if (!inputField || !sendButton || !chatArea) {
        console.error('Selectors not found. Check selectors in initializeChat.');
        return;
    }

    function appendMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        messageDiv.innerHTML = `<p>${content}</p>`;
        chatArea.insertBefore(messageDiv, inputField.parentElement);
    }

    async function sendMessage() {
        const userInput = inputField.value.trim();
        if (!userInput) return;

        appendMessage(userInput, 'user');

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userInput })
            });

            const data = await response.json();
            const aiReply = data.reply || 'No response from AI.';
            appendMessage(aiReply, 'ai');

        } catch (error) {
            console.error('API Error:', error);
            appendMessage('Error getting AI response.', 'ai');
        }

        inputField.value = '';
    }

    sendButton.addEventListener('click', sendMessage);
    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}
