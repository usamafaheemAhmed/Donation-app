import React from 'react'
import { Image } from 'react-bootstrap'

import General_bg from '../Assets/images/p1.jpg'

const GeneralTop = (props) => {

  return (
    <div className='p-0'>
          <div className='GeneralTop'>
              <div>
                <Image src={General_bg} fluid className='w-100'/>
              </div>   
              <div>
                    <h1> {props.title} </h1>                   
              </div>   
          </div>   
    </div>
  )
}

export default GeneralTop
