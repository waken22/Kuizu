import React, { Component } from 'react'

import ButtonSpecial from './buttons'
import SliderHome from './SliderHome'

const Main = () => {
  return (
    <div>
      <SliderHome />
      <div className='DivJoin'>
        <ButtonSpecial type='raise' text='Join Now !' />
      </div>
    </div>
  )
}


export default Main