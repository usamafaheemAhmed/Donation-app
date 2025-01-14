import { faBowlFood, faHeadphones, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card, Container } from 'react-bootstrap';

const CardBlocks = () => {
    return (
        <div className='my-4 cardBlocks'>
            <Container>
                <div className='row shadow'>
                    <div className='col-md-4 p-0'>
                        <Card style={{ height: "30vh" }} >
                            <div className='imgBlock' >
                                <div className='rounded-circle p-3' >
                                    <FontAwesomeIcon icon={faHeadphones} size='2xl' />
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center fw-bold'>Donations for real needy people</Card.Title>
                            <Card.Text>Help us Buying Hearing aids for People</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 p-0'>
                        <Card className='active'>
                            <div className='imgBlock' >
                                <div className='rounded-circle  p-3' >
                                    <FontAwesomeIcon icon={faBowlFood} size='2xl' />
                                </div>
                            </div>
                            <Card.Body>
                            <Card.Title className='text-center fw-bold'>Donations for real needy people</Card.Title>
                            <Card.Text>Help us Buying Hearing aids for People</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 p-0'>
                        <Card style={{ height: "30vh" }}  >
                            <Card.Body>
                                <div className='imgBlock' >
                                    <div className='rounded-circle  p-3' >
                                        <FontAwesomeIcon icon={faMoneyBillWave} size='2xl' /> 
                                    </div>
                                </div>
                                <Card.Title className='text-center fw-bold'>Donations for real needy people</Card.Title>
                                <Card.Text>Help us Buying Hearing aids for People</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default CardBlocks
