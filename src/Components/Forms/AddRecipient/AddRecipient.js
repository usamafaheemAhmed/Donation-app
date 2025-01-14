
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup";
import Custom_input from '../Contact_Form/Custom_input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const AddRecipient = () => {



    let initialValue = {
        Recipient_Name: "",
        Recipient_FatherName: "",
        Received_amount: "",
        Recipient_Address:"",
        Recipient_Description:"",
        Recipient_CNIC:"",
        Recipient_Phone:"",
    }

    let validate = Yup.object({
        Recipient_Name: Yup.string().required("Required"),
        Recipient_FatherName: Yup.string().required("Required"),
        Received_amount: Yup.string().required("Required"),
        Recipient_Address: Yup.string().required("Required"),
        Recipient_Description: Yup.string().required("Required"),
        Recipient_CNIC: Yup.string().required("Required"),
        Recipient_Phone: Yup.string().required("Required"),
    });

    let onSubmit = (values) => {
        alert(values)
    }
    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={validate}
                onSubmit={onSubmit}
            >
                {({ handleChange, setValues, errors, setFieldValue, values, handleBlur }) =>
                (
                    <Form>
                        <div className='row'>
                            <div className='col-md-12 '>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <Custom_input validate={errors.Recipient_Name}>
                                            <Field
                                                type="text"
                                                className="form-control shadow"
                                                id="Recipient_Name"
                                                name="Recipient_Name"
                                            />
                                            <label htmlFor="Recipient_Name" className="form-label">
                                                Name
                                            </label>
                                        </Custom_input>
                                        <ErrorMessage
                                            className="text-danger"
                                            component="div"
                                            name="Recipient_Name" />
                                    </div>
                                    <div className='col-md-6'>
                                        <Custom_input validate={errors.Recipient_FatherName}>
                                            <Field
                                                type="text"
                                                className="form-control shadow"
                                                id="Recipient_FatherName"
                                                name="Recipient_FatherName" />
                                            <label htmlFor="Recipient_FatherName" className="form-label">
                                                Father Name
                                            </label>
                                        </Custom_input>
                                        <ErrorMessage
                                            className="text-danger"
                                            component="div"
                                            name="Recipient_FatherName" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <Custom_input validate={errors.Recipient_CNIC}>
                                            <Field
                                                type="text"
                                                className="form-control shadow"
                                                id="Recipient_CNIC"
                                                name="Recipient_CNIC"
                                            />
                                            <OverlayTrigger
                                                placement="top"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={<Tooltip id="tooltip-id">Enter CNIC With Dashes #####-#######-#</Tooltip>}
                                            >
                                                <label htmlFor="Recipient_CNIC" className="form-label">
                                                    CNIC (Computerized National Identity Card)
                                                </label>
                                            </OverlayTrigger>
                                        </Custom_input>
                                        <ErrorMessage
                                            className="text-danger"
                                            component="div"
                                            name="Recipient_CNIC" />
                                    </div>
                                    <div className='col-md-6'>
                                        <Custom_input validate={errors.Recipient_Phone}>
                                            <Field
                                                type="text"
                                                className="form-control shadow"
                                                id="Recipient_Phone"
                                                name="Recipient_Phone"
                                            />
                                            <OverlayTrigger
                                                placement="top"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={<Tooltip id="tooltip-id">Enter Phone number with Country Code +92 ### ####### Pakistan</Tooltip>}
                                            >
                                                <label htmlFor="Recipient_Phone" className="form-label">
                                                    Phone Number
                                                </label>
                                            </OverlayTrigger>
                                        </Custom_input>
                                        <ErrorMessage
                                            className="text-danger"
                                            component="div"
                                            name="Recipient_Phone" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <Custom_input validate={errors.Recipient_Address}>
                                            <Field
                                                type="text"
                                                className="form-control shadow"
                                                id="Recipient_Address"
                                                name="Recipient_Address"
                                            />
                                            <label htmlFor="Recipient_Address" className="form-label">
                                                Address
                                            </label>
                                        </Custom_input>
                                        <ErrorMessage
                                            className="text-danger"
                                            component="div"
                                            name="Recipient_Address" />
                                    </div>
                                    <div className='col-md-6'>
                                        <Custom_input validate={errors.Recipient_Description}>
                                            <Field
                                                type="text"
                                                className="form-control shadow"
                                                id="Recipient_Description"
                                                name="Recipient_Description" />
                                            <label htmlFor="Recipient_Description" className="form-label">
                                                Description
                                            </label>
                                        </Custom_input>
                                        <ErrorMessage
                                            className="text-danger"
                                            component="div"
                                            name="Recipient_Description" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <Custom_input validate={errors.Received_amount}>
                                            <Field
                                                type="text"
                                                className="form-control shadow"
                                                id="Received_amount"
                                                name="Received_amount" />
                                            <label htmlFor="Received_amount" className="form-label">
                                                Amount
                                            </label>
                                        </Custom_input>
                                        <ErrorMessage
                                            className="text-danger"
                                            component="div"
                                            name="Received_amount" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 '><button className={`btn btn-primary Primary float-end mt-md-${((errors.Recipient_Name == "Required") || (errors.Received_amount == "Required")) ? "0" : "3"}`}><FontAwesomeIcon icon={faPlus} /> Add New</button></div>
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}

export default AddRecipient
