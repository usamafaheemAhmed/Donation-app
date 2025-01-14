import React from 'react'
import Topper from './Topper'
import Donation_box from './Donation_box'
import Motive from './Motive'

import pain from "../Assets/images/p1.jpg"
import p4 from "../Assets/images/p4.jpg"
import Naruto_boy from "../Assets/images/Naruto_boy.jpeg"

import J1 from "../Assets/images/usamaJ1.jpg"
import S1 from "../Assets/images/usamaS1.jpg"

import CardBlocks from './CardBlocks'

const LandingPage = () => {

  let Content = [{
    slogan: "We don't just give money to anyone we find Real ",
    title: " Needy and Deserving People",
    para2: "At our core, we prioritize meaningful impact. Our commitment goes beyond simply contributing funds; we meticulously identify and support individuals who embody true need and merit. By diligently seeking out real, deserving recipients, we ensure that our assistance creates a genuine and lasting difference in the lives of those who need it most.",
    image: pain,
    first_block: "order-lg-2",
    second_block: "order-lg-1",
  },
  {
    slogan: "old man whose children does't support him  ",
    title: " Needy and Deserving old Man",
    para2: "In the quiet corners of life, there exists a needy and deserving old man, weathered by the passage of time and trials. Despite the weight of his years, his resilience and humble spirit radiate a quiet strength that speaks volumes. In our pursuit of kindness, let us extend our compassion to this venerable soul, recognizing the depth of his needs and the richness of his deserving heart",
    image: p4,
    first_block: "order-lg-1",
    second_block: "order-lg-2",
  },
  {
    slogan: "Ui and Ux Was Developed by Full Stack Developer",
    title: "Usama Faheem Ahmed",
    para2: "With expertise spanning both front-end and back-end technologies, Usama brings a wealth of experience in creating robust web applications. His commitment to delivering high-quality code and embracing emerging technologies makes him a valuable asset in the dynamic field of software development.",
    image: J1,
    first_block: "order-lg-1",
    second_block: "order-lg-2",
    link:"/UsamaFaheemAhmed"
  },
  {
    slogan: "Backend Was Developed by Full Stack Developer",
    title: "Usama Saeed",
    para2: "With expertise spanning both front-end and back-end technologies, Usama brings a wealth of experience in creating robust web applications. His commitment to delivering high-quality code and embracing emerging technologies makes him a valuable asset in the dynamic field of software development.",
    image: S1,
    first_block: "order-lg-2",
    second_block: "order-lg-1",
    link:"/UsamaSaeed"
  },
  ]


  return (
    <div>
      <Topper />
      <Donation_box />
      <Motive Obj={Content[0]} />
      <Motive Obj={Content[1]} owner={"1"} />
      <Motive Obj={Content[0]} />
      <CardBlocks />
      <Motive Obj={Content[2]} owner={"1"} />
      <Motive Obj={Content[3]} owner={"1"} />


    </div>

  )
}

export default LandingPage