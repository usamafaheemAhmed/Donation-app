import React from 'react'
import GeneralTop from '../GeneralTop/GeneralTop'
import { Accordion } from 'react-bootstrap'
import Conventional_Image from '../GeneralTop/Conventional_Image'

const FAQs = () => {
    return (
        <div>
            <GeneralTop title="FAQs" />

            <div className='container my-5'>


                <div className='row mb-3' style={{ color: "#042a68" }}>
                    <div className='col-md-6'>
                        <h3>Frequently Asked Questions (FAQs)</h3>
                        <p>Welcome to our FAQs page, where we aim to provide clarity and address common queries about our mission and operations. At DONATE, we prioritize transparency, privacy, and the impactful use of donations. We understand the importance of building trust with our valued donors and recipients. Rest assured that we adhere to a strict policy of donor privacy and recipient confidentiality. We do not disclose specific donation amounts or reveal the identities of those who benefit from our assistance. Our commitment is to maximize the impact of your generosity while respecting the privacy and dignity of all involved. If you have additional questions or require further information, feel free to reach out to our team directly.</p>
                    </div>
                    <div className='col-md-6'>
                        <Conventional_Image />
                    </div>
                </div>




                <div className='row ' style={{ color: "#042a68" }}>
                    <h3> FAQs</h3>
                </div>

                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How are eligibility and need help ? </Accordion.Header>
                        <Accordion.Body>
                            How eligibility and need are determined is a daily interaction with individuals who express their need. Instead of relying solely on verbal requests, we personally visit their homes to assess their situation. By closely observing their living conditions, we gain firsthand knowledge of their circumstances. When we ascertain that someone is not only in need but also deserving, we make a conscious decision to extend financial assistance, ensuring that our donations are directed to those who genuinely require and deserve support.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Do you keep giving them money and make them dependent on donations?</Accordion.Header>
                        <Accordion.Body>
                            Our approach is centered on fostering sustainable solutions and empowerment rather than creating dependence. While we provide financial assistance to those in need, our commitment extends beyond mere monetary support. We strive to implement initiatives that promote self-sufficiency and long-term well-being.

                            Our organization is dedicated to investing in education, skill development, and community empowerment programs. By offering avenues for growth and self-improvement, we aim to break the cycle of dependency and empower individuals to create positive changes in their lives.

                            Through thoughtful and strategic interventions, our goal is to equip individuals with the tools and resources they need to achieve financial independence, fostering a sense of self-reliance and resilience within the communities we serve.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Can donors specify how their contributions will be used?</Accordion.Header>
                        <Accordion.Body>
                            Donors may want to know if they have the option to designate their donations for specific causes or if the funds are allocated based on the organization's priorities.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What percentage of donations goes toward administrative costs?</Accordion.Header>
                        <Accordion.Body>
                            All donated funds are entirely dedicated to supporting deserving and needy individuals. We take pride in ensuring that every rupee contributed goes directly to those in need, with zero allocation for administrative costs. Our commitment is to maximize the impact of your generosity and make a meaningful difference in the lives of those we aim to assist.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>What steps are taken to protect the privacy of beneficiaries?</Accordion.Header>
                        <Accordion.Body>
                            We adhere to a strict policy of donor privacy and recipient confidentiality. We do not disclose the specific amounts donated by individuals or the identities of the recipients. This approach extends to all parties involved, including government officials. Our focus is on respecting the privacy and dignity of both donors and recipients, ensuring a confidential and secure process for everyone involved in our mission to support deserving and needy individuals.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>



        </div>
    )
}

export default FAQs