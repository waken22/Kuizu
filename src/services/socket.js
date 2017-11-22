function sendMessage(send, socket) {
  socket.emit('new-message', send)
} 

function loadMessages(socket) {
  socket.emit('load-messages')
}

function loadUsers(socket) {
  socket.emit('load-users')
}

export { sendMessage, loadMessages, loadUsers }