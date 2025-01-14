import React from 'react'
import GeneralTop from '../GeneralTop/GeneralTop'
import Contact_Form from '../Forms/Contact_Form/Contact_Form'
import { Image } from 'react-bootstrap'

import usamaBhai from '../Assets/images/usamaS1.jpg'
import pain from "../Assets/images/p1.jpg"
import p4 from "../Assets/images/p4.jpg"
import Motive from '../LandingPage/Motive'
import Location_map from './Location_map'

const Contact_Us = () => {

  let Content = [{
    slogan:"We don't just give money to anyone we find Real ",
    title:" Needy and Deserving People",
    para2:"At our core, we prioritize meaningful impact. Our commitment goes beyond simply contributing funds; we meticulously identify and support individuals who embody true need and merit. By diligently seeking out real, deserving recipients, we ensure that our assistance creates a genuine and lasting difference in the lives of those who need it most.",
    image:pain,
    first_block:"order-lg-2",
    second_block:"order-lg-1",
  },
  {
    slogan:"old man whose children does't support him  ",
    title:" Needy and Deserving old Man",
    para2:"In the quiet corners of life, there exists a needy and deserving old man, weathered by the passage of time and trials. Despite the weight of his years, his resilience and humble spirit radiate a quiet strength that speaks volumes. In our pursuit of kindness, let us extend our compassion to this venerable soul, recognizing the depth of his needs and the richness of his deserving heart",
    image:p4,
    first_block:"order-lg-1",
    second_block:"order-lg-2",
  }
  ]

  return (
    <div>
      <GeneralTop title="Contact Us" />
      <div className='container my-5'>
      <Motive Obj={Content[0]} />
        
        <div className='row'>
          <div className='col-md-12'  style={{ color: "#042a68",backgroundColor:'#fff' }} >
            <h3>Our Motives</h3>
            <p>If you have encountered individuals or communities whom you believe are deserving of our support, please don't hesitate to reach out to us. Your insights and suggestions are invaluable in ensuring that our resources are directed towards those who can benefit the most. Whether it's providing financial aid, essential supplies, or access to educational opportunities, we believe that every act of generosity has the power to transform lives. <br /> <br />
            Our contact page serves as a bridge between compassion and action. If you have specific cases or stories that resonate with our mission, we encourage you to share them with us. Your input fuels our efforts to make a positive impact on the lives of individuals facing challenges such as poverty, health crises, or educational barriers.
            </p>
          </div>
        </div>
        <div className='row '>
          <div className='col-md-6 p-4' style={{ color: "#042a68" }}  >
            <div className='w-100 contact_img my-4'>
              <div>
              <Image src={usamaBhai} fluid  />
              </div>
              <div>
                <h4>Usama Saeed</h4>
                <p>Full stack Developer</p>
              </div>
            </div>
            
            <h4 className='text-start'>Address:</h4>
            <p className='text-start'>House 3, street No 1, Behind Metro Cash & Cary, <br /> Gamama street, Marzi Pura Ravi Road, Lahore  </p>

            <h4 className='text-start'>Contact:</h4>
            <p className='text-start'>0333-4872281 </p>

            <h4 className='text-start'>Email:</h4>
            <p className='text-start'>usamasaeed3k@gmail.com </p>

          </div>
          <div className='col-md-6 p-0   '>

              <h2 className='text-center' style={{ color: "#042a68" }}>Contact Form</h2>
              <Contact_Form />

          </div>

        </div>
        <hr />
        <div className='text-center' style={{ color: "#042a68" }}>
        <h3> Location in Lahore : </h3>
        <p>You can Visit any time we will always welcome you</p>
        </div>
        <div className="row">
        <Location_map />
        </div>

      </div>

    </div>
  )
}

export default Contact_Us
