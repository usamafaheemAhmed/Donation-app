import React, { useState } from 'react'

const Custom_input = (props) => {

    let valid = props.validate || "";

  
  return (

      <div className={` mt-3 pt-1 Custom_input  ${((valid != '')||(valid == undefined)) ? 'error' : ''}`}
>  
      {props.children}
      </div>
  )
}

export default Custom_input
