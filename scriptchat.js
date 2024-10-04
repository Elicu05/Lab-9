document.addEventListener("DOMContentLoaded", function () {
    const user1Form = document.getElementById('user1-form');
    const user2Form = document.getElementById('user2-form');
    const messageBox = document.getElementById('message-box');

    user1Form.addEventListener('submit', function (e) {
        e.preventDefault();
        const user1Input = document.getElementById('user1-input');
        const message = user1Input.value.trim();

        if (message) {
            addMessage(message, 'user1-message');
            user1Input.value = '';  
        }
    });

    user2Form.addEventListener('submit', function (e) {
        e.preventDefault();
        const user2Input = document.getElementById('user2-input');
        const message = user2Input.value.trim();

        if (message) {
            addMessage(message, 'user2-message');
            user2Input.value = ''; 
        }
    });

    function addMessage(message, className) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', className);
        newMessage.textContent = message;

        messageBox.appendChild(newMessage);
        messageBox.scrollTop = messageBox.scrollHeight;  
});
