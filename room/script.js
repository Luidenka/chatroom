var chatroom_name = document.getElementById('chatroom_name');
var message_history = document.getElementById('chat_messages');
var input = document.getElementById('send_message');
var socket = new WebSocket("ws://");

socket.onopen = (e) => {
    addMessage('<div>Username have entered the chat room.</div>');
};

function addMessage(el) {
    message_history.insertAdjacentHTML("beforeend", el);
    message_history.scrollTop = message_history.scrollHeight;
}