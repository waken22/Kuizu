// ****************************************************************************
// *                 Function Events - emit to socket server                 *
// ****************************************************************************


function sendMessage(send, socket) {
  socket.emit('new-message', send)
} 

function loadMessages(socket) {
  socket.emit('load-messages')
}

function newUser(send, socket) {
  console.log(send)
  console.log(socket)
  socket.emit('new-user', send)
}

export { sendMessage, loadMessages, newUser }