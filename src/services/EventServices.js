// ****************************************************************************
// *                 Function Events - emit to socket server                 *
// ****************************************************************************


function sendMessage(send, socket) {
  socket.emit('new-message', send)
} 

function loadMessages(socket) {
  socket.emit('load-messages')
}

function loadUsers(socket) {
  socket.emit('load-users')
}

function newUser(user, socket) {
  // No new event if there is no username in the obj
  if(user.username)
    socket.emit('new-user', user)
}

export { sendMessage, loadMessages, newUser, loadUsers }