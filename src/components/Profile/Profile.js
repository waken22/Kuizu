import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


import { UpdateProfile } from '../../services/UserServices'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar: '',
      onLobby: false
    }
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleUpdateAvatar = this.handleUpdateAvatar.bind(this)
    this.handleSendAvatar = this.handleSendAvatar.bind(this)
    this.handleClickLobby = this.handleClickLobby.bind(this)
  }

  componentDidMount() {
    this.handleUpdateAvatar()
  }
  handleUrlChange(e) {
    this.handleUpdateAvatar()
    this.setState({avatar: e.target.value})
  }

  handleClickLobby() {
    this.setState({ onLobby: true })
  }

  handleUpdateAvatar = async () =>{
    await this.setState({avatar: this.props.user.avatar})
  }

  handleSendAvatar = async (e) => {
    e.preventDefault()
    const { avatar } = this.state
    await UpdateProfile(avatar)
    this.props.chargeUser()
  }
  render() {
    const { onLobby } = this.state
    return (
      <div className='profile-body'>
        <div className='profile-card'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5'>
                <div className='profile-avatar'>
                <img className="img-fluid GuestImg" src={ this.state.avatar } alt="loading"/>
                </div>
                <form onSubmit={this.handleSendAvatar}>
                  <input type="text" value={ this.state.avatar } onChange={ this.handleUrlChange }></input>
                  <button>Change Avatar</button>
                </form>
              </div>
              <div className='col-md-7'>
                <div className='container'>
                  <p>
                    <span>Name : {this.props.user.username}</span>
                    <span>Email : {this.props.user.email}</span>
                    <span>User since : {this.props.user.date_of_creation}</span>
                  </p>
                  <button onClick={this.handleClickLobby}>Return to Lobby</button>
                  {
                    onLobby
                    ?
                    (
                      this.setState({ onLobby: false }),
                      <Redirect to='/lobby'/>
                    )
                    :
                    <div></div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile