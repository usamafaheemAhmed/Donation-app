import React, { useRef } from 'react'
import GeneralTop from '../GeneralTop/GeneralTop'
import AddDonation from '../Forms/AddDonation/AddDonation'
import { OverlayTrigger, Table, Tooltip } from 'react-bootstrap'

import seed_data from "./MOCK_DATA"
import SearchForm from '../Forms/SearchForm/SearchForm'
import { ScrollRestoration } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'


const Donations = () => {

    const myElementRef = useRef();

    let table = seed_data;

    let SubData = (elem) => {
        // // scrollTo.id(elem)
        // // ScrollRestoration
        // myElementRef.current.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start', // You can adjust the scroll position (start, center, end)
        //   });
        // alert(elem);

        const element = document.getElementById(elem);
        element.style.backgroundColor = "#042a68"
        element.style.color = "#fff"

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center', // You can adjust the scroll position (start, center, end)
        });

        setTimeout(() => {
            element.style.backgroundColor = "transparent"
            element.style.color = "#000"
        }, 1000);
    }


    return (
        <div className='donations'>
            <GeneralTop title="Donations" />
            <div className='container'>
                <div className='row my-4'>
                    <h3>
                        Donations
                        <span className='float-end'>
                            Rp{
                                (() => {
                                    let sum = 0;
                                    table.forEach(element => {
                                        sum = sum + element.Recipient_total;
                                    });
                                    return sum; // Display the calculated sum
                                })()
                            }
                            /-
                        </span>
                    </h3>
                    <div className='col-md-12'>
                        <AddDonation />
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col-md-5 pe-4'>
                        <SearchForm tableData={table} Sub={SubData} />
                    </div>
                    <div className='col-md-7 pt-3'>
                        <button className={`btn btn-primary Primary mt-1 float-end `}> <FontAwesomeIcon icon={faSort} /> <span className=' d-none d-md-inline'>Sort</span> </button>
                    </div>
                </div>

                <div className='row'>

                    <Table striped bordered responsive hover ref={myElementRef}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Data</th>
                                <th>Amount Given</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody >
                            {table.map((elem, key) => {
                                return (<tr id={elem.Recipient_name + key}>
                                    <td>{elem.Recipient_name}</td>
                                    <td>{elem.Recipient_description}</td>
                                    <td>{elem.Recipient_Date}</td>
                                    <td>{elem.Recipient_amount}</td>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip id="tooltip-id">Rp{elem.Recipient_total - elem.Recipient_amount}/- left</Tooltip>}
                                    >

                                        <td>{elem.Recipient_total}</td>

                                    </OverlayTrigger>
                                </tr>)
                            })}

                        </tbody>
                    </Table>
                </div>
                <div className='row mb-5 '>
                <div className='col-md-5 pe-4'>
                    <SearchForm tableData={table} Sub={SubData} />
                </div>
                <div className='col-md-7 pt-3'>
                    <button className={`btn btn-primary Primary mt-1 float-end `}> <FontAwesomeIcon icon={faSort} /> <span className=' d-none d-md-inline'>Sort</span> </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Donations
