import React from 'react'


const ButtonSpecial = props => {
  function MakeButton() {
    const textButton = props.text ? props.text : 'Default'
    const type = props.type
    const idName = props.idName ? props.idName : ''
      switch (type) {
        case 'fill':
          return <button className={`fill ${ idName }`}>{ textButton }</button>
        case 'close':
          return <button className={`Close ${ idName }`}>{ textButton }</button>
        case 'pulse':
          return <button className={`pulse ${ idName }`}>{ textButton }</button>
        case 'raise':
          return <button className={`raise ${ idName }`}>{ textButton }</button>
        case 'up':
          return <button className={`up ${ idName }`}>{ textButton }</button>
        case 'slide':
          return <button className={`slide ${ idName }`}>{ textButton }</button>
        case 'offset':
          return <button className={`offset ${ idName }`}>{ textButton }</button>
        default:
          console.log('Default Button...')
          return <button className="fill">{ 'No Type...' }</button>
      }
    }

  return MakeButton()
}

export default ButtonSpecial