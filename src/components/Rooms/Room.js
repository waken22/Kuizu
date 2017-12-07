import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'


import ShowPlayers from './ShowPlayers.js'
import ShowChatMessages from './ShowChatMessages'
import { sendMessage, loadMessages, newUser } from '../../services/EventServices.js'



const { REACT_APP_API_SERVER } = process.env


export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      socket: null,
      user: [],
      message: '',
      chatMessages: [],
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
    this.scrollToBottom()
  }

  // Disconnect the player if the component is unmounted
  componentWillUnmount(){
    const { socket } = this.state
    socket.disconnect()
  }

  componentWillMount() {
    this.initSocket()
  }

  componentDidMount() {
    this.scrollToBottom()
    this.handleLoadMessages()
    this.eventNewUser(this.props.user)

  }

  componentWillReceiveProps(nextProps){
    this.eventNewUser(nextProps.user)
  }

  initSocket = () => {
    const socket = io(REACT_APP_API_SERVER)
    socket.on('connection', () => {
      console.log('Connected!')
    })
    socket.on('chat-messages', messages => {
      console.log('Socket chat-messages')
      this.setState({ chatMessages: messages })
    })
    socket.on('chat-new-message', message => {
      this.state.chatMessages.push(message)
      const updateState = this.state.chatMessages
      this.setState({chatMessages: updateState })
    })
    socket.on('get-users', users => {
      this.setState({ users: users })
      if(this.state.users === 0){
        window.location.reload()
      } 
    })
    this.setState({ socket })
  }



  handleLoadMessages() {
    loadMessages(this.state.socket)
  }
  
  eventNewUser = (user) => {
    newUser(user, this.state.socket)
  }

  handleSendMessage(e) {
    e.preventDefault()
    const send = {
      message: this.state.message,
      author: this.props.user.username,
      socket: this.state.socket.id,
      connection: false
    }
    sendMessage(send, this.state.socket)
    this.setState({message: ''})
  }
  

  handleMessageChange(e) {
    this.setState({message: e.target.value})
  }

  render() {
    const { username } = this.props.user
    const { message, users, chatMessages } = this.state
    return(
      <div className="Room">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-izq">
              <div className="chat-box">
                <div className="chat">
                  <ShowChatMessages messages={ chatMessages } username={ username } />
                  <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el }}>
                  </div>
                </div>
                <form className="send-box" onSubmit={ this.handleSendMessage }>
                  <button>Send</button>
                  <input value={ message } onChange={ this.handleMessageChange } type="text" placeholder="Write here..." autoFocus/>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-users">
              <div className="users-card">
                <p className="users-card-title">Players Online</p>
                <ul>
                { users ? <ShowPlayers users={ users } /> : <div></div> }
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
  } 
}
