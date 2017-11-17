import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'

import getPlayersOnline from './handlers/getPlayersOnline.js'
import { sendMessage, loadMessages } from '../services/util.js'

const socketUrl = "https://nameless-meadow-40238.herokuapp.com/"

export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      socket: null,
      user: null,
      message: '',
      chatText: []
    }
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSendMessage = this.handleSendMessage.bind(this)
  }


  scrollToBottom = () => {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentWillMount() {
    this.initSocket()
  }

  componentDidMount() {
    this.scrollToBottom();
    this.handleChargeChat()
    this.handleLoadMessages()
  }

  handleLoadMessages() {
    loadMessages()
  }

  initSocket = () => {
    const socket = io(socketUrl)
    socket.on('connect', () => {
      console.log('Connected')
    })
    socket.on('chat-message', message => {
      this.setState({ chatText: message })
    })
    this.setState({ socket })
  }

  setUser = (user) => {
    const { socket } = this.state
    socket.emit('USER_CONNECTED', user)
  }

  logout = () => {
    const { socket } = this.state
    socket.emit('LOGOUT')
    this.setState({user:null })
  }

  handleChargeChat() {
    return(this.state.chatText.map(function(chatmsg, i) {
      return(<p key={i} className="chat-message">{chatmsg.author} : {chatmsg.message}</p>)
    }))
  }

  handleSendMessage(e) {
    e.preventDefault()
    const send = {
      message: this.state.message,
      author: 'test'
    }
    sendMessage(send)
    this.setState({message: ''})
  }
  

  handleMessageChange(e) {
   this.setState({message: e.target.value})
  }

  render() {
    const players = getPlayersOnline()
    const { socket } = this.state.socket
    return(
      <div className="Room">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-users">
              <div className="users-card">
                <p className="users-card-title">List of Players</p>
                <ul>
                {
                  players.map(function(player, i) {
                    return(
                    <li key={i}>
                      <p>{ player }</p>
                    </li>
                    )
                  }) 
                }
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="questions-card">
              </div>
              <div className="chat-box">
                <div className="chat">
                {
                  this.handleChargeChat()
                }
                <div style={{ float:"left", clear: "both" }}
                  ref={(el) => { this.messagesEnd = el; }}>
                </div>
                </div>
                  <form className="send-box" onSubmit={ this.handleSendMessage }>
                    <button>Send</button>
                    <input value={ this.state.message } onChange={ this.handleMessageChange } type="text" placeholder="Write here..." autoFocus/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  } 
}
