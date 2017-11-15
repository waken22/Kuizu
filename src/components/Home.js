import React from 'react'

import ButtonSpecial from './buttons'
import SliderHome from './SliderHome'

const Home = () => {
  return (
    <div className='Home'>
      <SliderHome />
      <div className='DivJoin'>
        <ButtonSpecial type='raise' text='Join Now !' />
      </div>
    </div>
  )
}
  export default Home