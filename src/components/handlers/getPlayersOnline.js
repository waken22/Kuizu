import React from 'react'

const getPlayersOnline = users => {
  users = users.map(function(player, i) {
    return(
      <li key={ i }>
        <div>
          <div><img src="guest.jpeg" alt="GuestImg"/><p> { player }</p></div>
        </div>
      </li>
    )
  })
  return users
}

export default getPlayersOnline