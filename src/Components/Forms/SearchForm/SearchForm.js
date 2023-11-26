import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Custom_input from '../Contact_Form/Custom_input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Yup from "yup";
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'



function SearchForm(props) {

    let tableData = props.tableData;
    let tableData2 = props.tableData;

    let SearchingKey = (elem) => {
        let matchingRecipients = tableData2.filter((recipient) =>
        recipient.Recipient_name.toLowerCase().includes(elem.toLowerCase())
      );
        if (matchingRecipients) {
            tableData = matchingRecipients;
        } else {
            tableData = tableData2;
        }
    }


    let initialValue = {
        Recipient_Search: ""
    }

    let validate = Yup.object({
        Recipient_Search: Yup.string().required("Required")
    });

    let onSubmit = (values) => {
        // alert(values)
        
        let indexOfFirstMatch = tableData.findIndex((recipient) =>
        recipient.Recipient_name.toLowerCase() === values.Recipient_Search.toLowerCase()
        );
        
        props.Sub(values.Recipient_Search+indexOfFirstMatch)
    }

    let [SearchDropDown, setSearchDropDown] = useState(false);

    return (
        <Formik
        initialValues={initialValue}
        // validationSchema={validate}
        onSubmit={onSubmit}>
        {({
            handleChange,
            setValues,
            errors,
            setFieldValue,
            values,
            handleBlur
        }) => <Form>

                <div className='row Search_Forms'>
                    <div className='col-md-12 pe-0'>
                        <Custom_input validate={errors.Recipient_Search}>
                            {/**    <Field type="text" className="form-control shadow" id="Recipient_Search" name="Recipient_Search" /> */}
                                <div className="input-group mb-3">
                                <Field type="text" className="form-control shadow" id="Recipient_Search" name="Recipient_Search"
                                    onFocus={(e) => { SearchingKey(e.target.value); setSearchDropDown(true);  }}
                                    onBlur={(e) => {
                                        setTimeout(() => {
                                            setSearchDropDown(false);
                                            handleBlur(e);
                                        }, 300);
                                    }}
                                    onInput={(e) => {
                                        SearchingKey(e.target.value);
                                    }}
                                    />
                                    
    
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip id="tooltip-id">Search by Name</Tooltip>}
                                >
                                    <label htmlFor="Recipient_Search" className="form-label">
                                        Search
                                    </label>
                                </OverlayTrigger>
    

                                    
                                    <div className="input-group-append">
                                    <button className={`btn btn-primary searchButton `}><FontAwesomeIcon icon={faMagnifyingGlass} /> <span className=' d-none d-md-inline'>Search</span> </button>
                                    </div>
                                </div>

                                <Dropdown.Menu show={SearchDropDown}>
                                    {tableData.map((elem, index) => {
                                        return (<Dropdown.Item 
                                            key={index}
                                            onClick={() => {
                                                setFieldValue("Recipient_Search", elem.Recipient_name);
                                                setSearchDropDown(false);
                                            }}>{elem.Recipient_name}</Dropdown.Item>)
                                    })
                                    }
                                </Dropdown.Menu>

                        </Custom_input>
                        <ErrorMessage className="text-danger" component="div" name="Recipient_Search" />
                    </div>
                {/**  <div className='col-1 col-md-3 col-lg-2 d-flex justify-content-start align-items-center mt-3 mt-md-0 ps-0 py-1 d-none'><button className={`btn btn-primary searchButton mt-md-${errors.Recipient_Search == "Required" ? "0" : "3"}`}><FontAwesomeIcon icon={faMagnifyingGlass} /> <span className=' d-none d-md-inline'>Search</span> </button></div> */}  
                </div>

            </Form>}
    </Formik>);
}


export default SearchForm