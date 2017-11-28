import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'

import renderPlayers from './Players.js'
import { sendMessage, loadMessages } from '../../services/socket.js'


const { REACT_APP_API_SERVER } = process.env


export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      socket: null,
      user: null,
      message: '',
      chatText: [],
      users: []
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
    this.scrollToBottom()
    this.handleChargeChat()
    this.handleLoadMessages()
    this.handleChargeUsers()
  }

  initSocket = () => {
    const socket = io(REACT_APP_API_SERVER)
    this.setState({ socket })
    socket.on('connection', () => {
      console.log('Connected')
    })
    socket.on('chat-messages', messages => {
      this.setState({ chatText: messages })
    })
    socket.on('chat-new-message', message => {
      this.state.chatText.push(message)
      const updateState = this.state.chatText
      this.setState({chatText: updateState })
    })
    socket.on('get-users', users => {
      this.setState({ users: users })
    })
    this.setState({ socket })
  }

  handleChargeUsers() {
    return this.state.users ? renderPlayers(this.state.users) : null
  }

  handleLoadMessages() {
    loadMessages(this.state.socket)
  }

  handleNewUser() {
    return(<p className="chat-new-user">{ this.state.currentNewUser }</p>)
  }

  handleChargeChat() {
    const SameAuthor = this.state.socket.id || null
    return(this.state.chatText.map(function(chatmsg, i) {
      if (chatmsg.connection)
        return (<div key={i} className="connection-box-text"><p>{ chatmsg.message }</p></div>)
      else
        if (chatmsg.author === SameAuthor)
          return (<div key={i} className="chat-box-text-right"><p>{ chatmsg.author } : { chatmsg.message }</p></div>)
        else
          return (<div key={i} className="chat-box-text-left"><p>{ chatmsg.author } : { chatmsg.message }</p></div>)
    }))
  }

  handleSendMessage(e) {
    e.preventDefault()
    const send = {
      message: this.state.message,
      author: this.state.socket.id,
      connection: false
    }
    sendMessage(send, this.state.socket)
    this.setState({message: ''})
  }
  

  handleMessageChange(e) {
   this.setState({message: e.target.value})
  }

  render() {
    return(
      <div className="Room">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-izq">
              <div className="questions-card">
              </div>
              <div className="chat-box">
                <div className="chat">
                  { this.handleChargeChat() }
                  { this.handleNewUser() }
                  <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el }}>
                  </div>
                </div>
                <form className="send-box" onSubmit={ this.handleSendMessage }>
                  <button>Send</button>
                  <input value={ this.state.message } onChange={ this.handleMessageChange } type="text" placeholder="Write here..." autoFocus/>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-users">
              <div className="users-card">
                <p className="users-card-title">Players Online</p>
                <ul>
                  { this.handleChargeUsers() }
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
  } 
}