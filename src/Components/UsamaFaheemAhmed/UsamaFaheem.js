import React from 'react'
import GeneralTop from '../GeneralTop/GeneralTop'

import coverImg from "../Assets/images/Web Development.png"
import profileImg from "../Assets/images/usamaJ1.jpg"
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGithubSquare, faLinkedin, faSquareFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const UsamaFaheem = () => {
    return (
        <div className='container portfolio'>
            <div className='row'>
                <div className='col-md-4 p-mb-0 '>
                    <div className='cover-img'>
                        <Image src={coverImg} fluid className='w-100' />
                    </div>
                    <div className='P-profile-img'>
                        <div className='profile-img'>
                            <Image src={profileImg} fluid className='w-100' />
                        </div>
                    </div>
                    <div className='General-info text-center mt-3'>
                        <h5>Usama Faheem Ahmed</h5>
                        <p><strong>Full Stack Web Developer</strong></p>
                        <hr />
                    </div>
                    <div className='General-info'>
                        <strong>About:</strong>
                        <p> Passionate about excelling in my field, I strive to continuously enhance my web development skills. Reading and physical games are my favorite hobbies while designing is an inseparable extracurricular activity. </p>
                        <hr />
                    </div>
                    <div className='General-info'>
                        <p className='my-1'><strong>Email:</strong> <a href='mailto:usamafaheem80@gmail.com?subject=DevelopWeb&body=i%20need%20a%20Website!'>usamafaheem80@gmail.com</a> </p>
                        <p className='my-1'><strong>Contact:</strong> <a href='whatsapp://send?phone=+923124513576&text=Hello%20there!'>+92312-4513576</a></p>
                        <p className='my-1'><strong>Github:</strong><a href='https://github.com/usamafaheemAhmed' target='_blank'> https://github.com/usamafaheemAhmed</a></p>
                        <p className='my-1'><strong>linkedin:</strong><a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank'> https://www.linkedin.com/in/usama-faheem-ahmed/ </a></p>
                        <p className='my-1'><strong>StackOverFlow:</strong><a href='https://stackoverflow.com/users/13608016/usama-faheem' target='_blank'> https://stackoverflow.com/users/13608016/usama-faheem</a></p>
                        <hr />
                    </div>
                    <div className='General-info'>
                        <p><strong>Skills :</strong></p>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <ul>
                                <li>Html,Css,Js</li>
                                <li>React.js</li>
                                <li>Recoil</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Mongodb</li>
                                <li>PHP</li>
                                <li>SQL</li>
                                <li>Azure Deployment</li>
                                <li>Cyclic Deployment</li>
                            </ul>
                        </div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <ul>
                                <li>C#, C++</li>
                                <li>Axios</li>
                                <li>Formilk</li>
                                <li>Bootstrap</li>
                                <li>Laravel</li>
                                <li>Ajax, Axios</li>
                                <li>Python</li>
                                <li>Ui/Ux Design</li>
                                <li>Js-To-PDF</li>
                                <li>MERN</li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className='General-info'>
                        <p><strong>Language :</strong></p>
                        <p><strong>Urdu :</strong> <div style={{ backgroundColor: "#042a68", width: "75%", height: "10px", display: " inline-block" }}></div></p>
                        <p><strong>English :</strong> <div style={{ backgroundColor: "#042a68", width: "50%", height: "10px", display: " inline-block" }}></div></p>
                    </div>

                </div>
                <div className='col-md-8 p-3'>
                    <div className='General-info'>
                        <h4> Certification </h4>
                        <hr />
                        <ul>
                            <li>Python Zero</li>
                            <p><strong>Sep,2019 - Mar,2020 | Lahore Garrison University</strong></p>
                            <p>I was in 2nd Semester when I joined Python certification. We learned many things but most exiting was machine
                                learning with python. I created Projects like Speed Detector Face I deification using Open CV</p>

                            <li>IT course</li>
                            <p><strong>Jun,2017 - Aug,2017 | Brains Collage</strong></p>
                            <p>I Learned many Skills form there like Ms.Office, PhotoShop, illustrator, coral draw, CCTV, mobile software repairing, and computer hardware assembling etc.</p>
                        </ul>

                        <h4> Education </h4>
                        <hr />
                        <ul>
                            <li> <p className='mb-2 p-0'><strong>2019 - 2023</strong> Lahore Garrison University | <strong>Bachelors in Software Engineering</strong> </p></li>
                            <p >I graduated from my BsSE programme with a CGPA of 3.2.I learned many skills from there like C++, C#, java, AI, and UI&UX design etc.</p>

                            <li> <p className='mb-2'><strong>2016 - 2018</strong> Islamia Collage Civil Lines | <strong>Intermediate ICS</strong> </p></li>
                            <p>I Started my ICS because I like computer and I wanted to learn more and more about it.</p>

                            <li> <p className='mb-2'><strong>2016 - 2018</strong> Allied school | <strong>Matriculation</strong> </p></li>
                            <p>Completed my Matriculation with computer science.</p>
                        </ul>
                        <h4> Experience </h4>
                        <hr />
                        <ul>
                            <li> <p className='mb-2 p-0'><strong>Nov,2023</strong> Fahad Tech Solution as <strong>Full Stack Developer</strong> </p></li>
                            <p>
                                I began my journey at <strong>Fahad Tech Solution</strong> as an intern, mastering foundational web technologies like
                                <strong>HTML, CSS, JavaScript, Bootstrap, and PHP</strong>. Transitioning to <strong>Laravel development</strong>, I gained insights into MVC architecture and database management, setting the stage for a transformative shift towards MERN stack development.
                                <br /><br />
                                Delving into React.js, I navigated its <strong>comprehensive ecosystem</strong>, mastering state management, hooks, Recoil, and Higher Order Components (HOC). Transitioning seamlessly to Node.js, I discovered the power of independent project creation, leveraging the versatility of Node.js in API development and <strong>JWT token implementation</strong>.
                            </p>
                            <p>
                                My journey at <strong>Fahad Tech Solution</strong> has been marked by continuous learning, hands-on experiences, and a dynamic environment that fosters a holistic understanding of full-stack development. Contributing to the evolution of projects, I've gained invaluable experience and expertise in crafting innovative solutions.
                            </p>



                            <li> <p className='mb-2'><strong>Sep,2021 - March,2022</strong> Smart Groups as <strong>Graphic Designer</strong> </p></li>
                            <p>DHA Phase-6 from September2021 to March2022 before returning to my original field of development. During my time there,I significantly improved my design skills and gained valuable experience in communication,teamwork, and time management. Despite my departure,the knowledge and growth I acquired at Smart Groups continue to positively impact my professional journey.</p>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 p-mb-0'>
                    <div className='Bottom-Area mb-4'>
                        <FontAwesomeIcon icon={faSquareFacebook} size="lg" />
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UsamaFaheem