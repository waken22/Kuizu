import React from 'react'
import { Link } from 'react-router-dom'

import ButtonSpecial from './buttons'
import SliderHome from './SliderHome'

const Home = () => {
  return (
    <div className='Home'>
      <SliderHome />
      <div className='DivJoin'>
        <Link to='/login'><ButtonSpecial type='raise' text='Join Now !' /></Link>
      </div>
    </div>
  )
}
  export default Home