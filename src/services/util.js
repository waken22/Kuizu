import openSocket from 'socket.io-client'
const socket = openSocket('localhost:3231')


function sendMessage(send) {
  socket.emit('new-message', send)
} 

function loadMessages() {
  socket.emit('load-messages')
}

export { sendMessage, loadMessages }