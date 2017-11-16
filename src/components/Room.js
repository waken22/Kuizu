import React from 'react'

import getPlayersOnline from './handlers/getPlayersOnline.js'

const Room = () => {
  const players = getPlayersOnline()
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
              </div>
                <form className="send-box">
                  <button>Send</button>
                  <input type="text" placeholder="Write here..." autoFocus/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Room