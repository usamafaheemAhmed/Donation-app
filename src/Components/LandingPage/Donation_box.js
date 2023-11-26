import React from 'react'
import { Card } from 'react-bootstrap';

const Donation_box = () => {
    return (
        <div className='mb-5'>
            <div className='container'>
                <Card className='DonationCard'>
                    <div className='svg_Backend '>
                    </div>
                    <Card.Body>
                        <div className='row'>
                            <div className='col-md-7 px-4'>
                                <div className='box_Card_left'>
                                    <p>Empower Lives, Ignite Hope – Donate to Make a Difference Today.</p>
                                    <Card.Title>Donations for real needy people</Card.Title>
                                    <Card.Text>
                                        Empower real change through donations that directly impact lives in need. Donate today for a brighter tomorrow.
                                    </Card.Text>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='box_Card_right'>
                                    <div>
                                        <div className="input-group bg-light p-1">
                                            <input type="text" className="form-control" placeholder="Donation" aria-label="Button" aria-describedby="Search"/>
                                            <button className="btn donate_btn" type="button" id="donate">Donate</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}

export default Donation_box
