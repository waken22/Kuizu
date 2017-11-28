import React from 'react'


const ShowRooms = props => {
  let RoomBars = props.rooms
  console.log(RoomBars)
  return(
    <div className="row">
    {
      RoomBars.map((Room, i) => {
      return (
        <div key={i} className="col-md-4">
          <div className="room-box">
            <div>{ Room.title + ' by @' + Room.author }</div>
            <div className="text-nametest">{ Room.testName }</div>
            <button className="ButtonJoinRoom" data={ Room.id }>
              <span className="RoomUsers">{ Room.users } / 5</span>
              <span className="JoinRoom">Join!</span>
            </button>
          </div>
        </div>
      )})
    }
    </div>
  )
}

export default ShowRooms