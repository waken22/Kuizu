import React, {Component} from 'react'

import './buttons.css'

const ButtonSpecial = props => {
  function MakeButton() {
    const textButton = props.text ? props.text : 'Default'
    const type = props.type
    const idName = props.idName ? props.idName : ''
      switch (type) {
        case 'fill':
          return <button className={`fill ${ idName }`}>{ textButton }</button>
        case 'close':
          return <button className="Close">{ textButton }</button>
        case 'pulse':
          return <button className="pulse">{ textButton }</button>
        case 'raise':
          return <button className="raise">{ textButton }</button>
        case 'up':
          return <button className="up">{ textButton }</button>
        case 'slide':
          return <button className="slide">{ textButton }</button>
        case 'offset':
          return <button className="offset">{ textButton }</button>
        default:
          console.log('Default Button...')
          return <button className="fill">{ 'No Type...' }</button>
      }
    }

  return MakeButton()
}

export default ButtonSpecial