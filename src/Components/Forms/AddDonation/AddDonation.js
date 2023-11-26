
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup";
import Custom_input from '../Contact_Form/Custom_input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddDonation = () => {



    let initialValue = {
        Recipient_Name: "",
        Received_amount: ""
    }

    let validate = Yup.object({
        Recipient_Name: Yup.string().required("Required"),
        Received_amount: Yup.string().required("Required")
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
                            <div className='col-md-9 col-lg-10 '>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <Custom_input validate={errors.Recipient_Name}>
                                            <Field
                                                type="text"
                                                className="form-control shadow"
                                                id="Recipient_Name"
                                                name="Recipient_Name"
                                                as="Select"
                                            >
                                                <option value={""}>Select</option>
                                                <option value={"Usama"}>Usama</option>
                                            </Field>
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
                            <div className='col-md-3  col-lg-2 d-flex justify-content-end align-items-center mt-3 mt-md-0 '><button className={`btn btn-primary Primary mt-md-${((errors.Recipient_Name=="Required")||(errors.Received_amount=="Required"))?"0":"3"}`}><FontAwesomeIcon icon={faPlus} /> Add New</button></div>
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}

export default AddDonation
