import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup";
import Custom_input from './Custom_input';

const Contact_Form = () => {



    let initialValue = {
        user_Name: "",
        user_Email: "",
        user_Phone: "",
        user_Topic:""
    }

    let validate = Yup.object({
        user_Name: Yup.string().required("Required"),
        user_Email: Yup.string().required("Required"),
        user_Phone: Yup.string().required("Required"),
        user_Topic: Yup.string().required("Required"),
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
                            <div className='col-md-6 mb-2'>
                                <Custom_input validate={errors.user_Name}>
                                    <Field
                                        type="text"
                                        className="form-control shadow"
                                        id="user_Name"
                                        name="user_Name"
                                    />
                                    <label htmlFor="user_Name" className="form-label">
                                        Name
                                    </label>
                                </Custom_input>
                                <ErrorMessage
                                    className="text-danger"
                                    component="div"
                                    name="user_Name" />
                            </div>
                            <div className='col-md-6 mb-2'>
                                <Custom_input validate={errors.user_Email}>
                                    <Field
                                        type="text"
                                        className="form-control shadow"
                                        id="user_Email"
                                        name="user_Email"
                                    />
                                    <label htmlFor="user_Email" className="form-label">
                                        Email
                                    </label>
                                </Custom_input>
                                <ErrorMessage
                                    className="text-danger"
                                    component="div"
                                    name="user_Email" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 mb-2'>
                                <Custom_input validate={errors.user_Topic}>
                                    <Field
                                        type="text"
                                        className="form-control shadow"
                                        id="user_Topic"
                                        name="user_Topic"
                                    />
                                    <label htmlFor="user_Topic" className="form-label">
                                        Subject
                                    </label>
                                </Custom_input>
                                <ErrorMessage
                                    className="text-danger"
                                    component="div"
                                    name="user_Topic" />
                            </div>
                            <div className='col-md-6 mb-2'>
                                <Custom_input validate={errors.user_Phone}>
                                    <Field
                                        type="number"
                                        className="form-control shadow"
                                        id="user_Phone"
                                        name="user_Phone"
                                    />
                                    <label htmlFor="user_Phone" className="form-label">
                                        Phone
                                    </label>
                                </Custom_input>
                                <ErrorMessage
                                    className="text-danger"
                                    component="div"
                                    name="user_Phone" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 mb-2' style={{color:"#042a68"}}>
                            <label htmlFor="user_Description" className="form-label">
                                Description
                            </label>
                                <Field
                                    as="textarea" // Specify that you are using a textarea
                                    className="form-control shadow"
                                    id="user_Description"
                                    name="user_Description"
                                   
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    component="div"
                                    name="user_Description" />
                            </div>
                        </div>

                        <button
                            className='float-end btn mt-2 btn-outline-primary form_button w-25' 
                            style={{ color: "#042a68", borderColor: "#042a68" }}
                            type="submit"
                        >
                            Save
                        </button>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}

export default Contact_Form
