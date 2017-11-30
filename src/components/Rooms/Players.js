import React from 'react'

const renderPlayers = users => {
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

export default renderPlayers