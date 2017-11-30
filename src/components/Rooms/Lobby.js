import React, { Component } from 'react'
import ShowRooms from './ShowRooms'


class Rooms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: [
        {id: 0, type:0, users:0, author:'Waken', title: 'Blabla', testName:'Programming C'},
        {id: 1, type:0, users:0, author:'Desko27 puto', title: 'Mongolines Powa', testName:'Javascript Test!'}
      ],
      logged: 'pending'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { chargeUser } = this.props
    chargeUser()
  }
       
  handleClick (e) {
    let roomID = e.target.value.data
    this.props.history.push(`/room/${roomID}`)
  }

  render() {
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
          <ShowRooms rooms={ this.state.rooms }/>
        </div>
      </div>
    )
  }
}

export default Rooms