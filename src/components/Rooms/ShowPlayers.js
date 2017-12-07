import React from 'react'

// ****************************************************************************
// *      Component that shows the players on the list of players online      *
// ****************************************************************************

const ShowPlayers = props => {
  let { users } = props
  users = users.map(function(player, i) {
    return(
      <li key={ i }>
        <div className='card-user'>
          <div className='avatar-container'>
            <img src={ player.avatar } alt='Avatar'/>
          </div>
          <div className='username-container'>
            <span> { player.username }</span>
          </div>
        </div>
      </li>
    )
  })
  return users
}

export default ShowPlayers