import React from 'react'
import { Image } from 'react-bootstrap'

import p3 from "../Assets/images/p3.jpg"
import p2 from "../Assets/images/p2.jpg"

import { useNavigate } from "react-router-dom";


const Topper = props => {
  let Navigate = useNavigate();

    return (
        <div className='Donar_Main'>
          <div className='Main_body'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 Main_left'>
                  <h1>Protect someone from danger</h1>
                  <p>More than just a certifications or regulatory requirement, get emergency medical training for your business that could truly make you someone's hero.</p>
                  <div className='d-flex flex-wrap align-items-center justify-content-start justify-content-lg-start w-100'>
                    <button className='btn me-5 btn_Start'>START HERE</button>
                  <a onClick={() => { Navigate("/Explore"); }} className='link_btn'>EXPLORE CLASES</a>
                  </div>
                </div>
                <div className='col-lg-6 p-0 Main_right'>
                  
                  <div className='image_parent p-0'>
                    <Image src={p2} fluid className='w-100 h-100'/>
                  </div>
                  <div className='image_parent p-0'>
                    <Image src={p3} fluid  className='w-100 h-100' />
                  </div>
              
                </div>
              </div>
            </div>
          </div>
          <div className='Main_back'></div>
        </div>
    
      )
}


export default Topper