import React from 'react'
import GeneralTop from '../GeneralTop/GeneralTop'
import Motive from '../LandingPage/Motive'

import J1 from "../Assets/images/usamaJ1.jpg"
import S1 from "../Assets/images/usamaS1.jpg"

const AboutPage = () => {
    let Content = [{
        slogan:"Ui and Ux Was Developed by Full Stack Developer",
        title:"Usama Faheem Ahmed",
        para2:"With expertise spanning both front-end and back-end technologies, Usama brings a wealth of experience in creating robust web applications. His commitment to delivering high-quality code and embracing emerging technologies makes him a valuable asset in the dynamic field of software development.",
        image:J1,
        first_block:"order-lg-1",
        second_block:"order-lg-2",
      },
      {
        slogan:"Backend Was Developed by Full Stack Developer",
        title:"Usama Saeed",
        para2:"With expertise spanning both front-end and back-end technologies, Usama brings a wealth of experience in creating robust web applications. His commitment to delivering high-quality code and embracing emerging technologies makes him a valuable asset in the dynamic field of software development.",
        image:S1,
        first_block:"order-lg-2",
        second_block:"order-lg-1",
      }
      ]

  return (
    <div>
          <GeneralTop title="About" />
          <div className='mt-5 text-center '>
            <h1 style={{color:"#042a68"}}>Web Developers</h1>
          </div>
          <Motive Obj={Content[0]} owner={"1"} />
          <Motive Obj={Content[1]} owner={"1"} />

    </div>
  )
}

export default AboutPage
