function sendMessage(send, socket) {
  socket.emit('new-message', send)
} 

function loadMessages(socket) {
  socket.emit('load-messages')
}

export { sendMessage, loadMessages }