import React from 'react'

  const showChatMessages = props => {
    const { username, messages } = props
    return(
      messages.map(function(msg, i) {
        if (msg.connection) {
          return (<div key={i} className="connection-box-text"><p>{ msg.message }</p></div>)
        }
        else {
          if (msg.author === username)
            return (<div key={i} className="chat-box-text-right"><p>{ msg.author } : { msg.message }</p></div>)
          else
            return (<div key={i} className="chat-box-text-left"><p>{ msg.author } : { msg.message }</p></div>)
        }
      })
    )
  }


export default showChatMessages