import React, { Component } from 'react'
import ShowRooms from './ShowRooms'

import { Redirect } from 'react-router-dom'

class Rooms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: [
        {id: 0, type:0, users:0, author:'Waken', title: 'Main Chatroom!', testName:'Programming C'},
      ],
      logged: 'pending',
      onEnter: false
    }
    this.handleClickRoom = this.handleClickRoom.bind(this) 
  }

  componentDidMount() {
    const { chargeUser } = this.props
    chargeUser()
  }
       
  // handleClick (e) {
  //   let roomID = e.target.value.data
  //   this.props.history.push(`/room/${roomID}`)
  // }

  handleClickRoom(){
    this.setState({ onEnter: true })
  }

  render() {
    const onEnter = this.state.onEnter
    return (
      <div className="container">
        <div className="RoomsBody">
          <div className="BarRoom">
            <button>New Room</button>
            <div className="RoomsOnlineContainer">
              <div className="RoomsOnline"><p>Created Rooms</p>
              </div>
            </div>
          </div>
          <ShowRooms rooms={ this.state.rooms } handleClickRoom={ this.handleClickRoom }/>
          {
            onEnter
            ?
            (this.setState({ onEnter: false }),
            <Redirect to='/room'/>)
            :
            <div></div>
          }
        </div>
      </div>
    )
  }
}

export default Rooms