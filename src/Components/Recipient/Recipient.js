import React, { useRef } from 'react'
import GeneralTop from '../GeneralTop/GeneralTop'

import AddRecipient from '../Forms/AddRecipient/AddRecipient'
import { OverlayTrigger, Table, Tooltip } from 'react-bootstrap'

import seed_data from "../Donations/MOCK_DATA"
import SearchForm from '../Forms/SearchForm/SearchForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'



const Recipient = () => {


  const myElementRef = useRef();

  let table = seed_data.slice(0, 5);

  let SubData = (elem) => {
 

      const element = document.getElementById(elem);
      element.style.backgroundColor = "#042a68"
      element.style.color = "#fff"

      element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
      });

      setTimeout(() => {
          element.style.backgroundColor = "transparent"
          element.style.color = "#000"
      }, 1000);
  }


  return (
      <div className='donations'>
      <GeneralTop title="Recipient" />
      
      <div className='container'>
      <div className='row my-4'>
          <h3>
            Recipient
              <span className='float-end'>
                  #{table.length}
              </span>
          </h3>
          <div className='col-md-12'>
              <AddRecipient />
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

export default Recipient