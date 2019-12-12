import React from 'react'
import '../index.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import {addCustomer} from '../actions/index.js'
import { connect } from 'react-redux'

{/* ADD TO THIS LATER WITH SELECT FIELDS */}
const validationSchema = Yup.object({
  //name: Yup.string().required("Name is required"),
  dob: Yup.string().required("Birthday is required"),
  //phoneNumber: Yup.string().required("Phone number is required"),
  //street: Yup.string().required("Address is required"),
  //city: Yup.string().required("City/Suburb is required"),
  // VALIDATION OF SELECT
  //postCode: Yup.string().required("Post code is required"),
});

function mapStateToProps(state) {
  return{
    customers: state.customersObj.customers
  };
}

const mapDispatchToProps = {
  addCustomer
}

class NewCustomerForm extends React.Component {
  render(){
  return (
    <div>
      <div className="container">
        <div className="row mb-5">
        </div>
        <div className="row">
          <div className="col-lg-12">

            <Formik
              validateOnChange={true}
              initialValues={{ name: "", dob: "", phoneNumber: "", street: "",
                city: "", state: "", postCode: "", package: "" }}
                validationSchema={validationSchema}
                onSubmit={(data, {props, setSubmitting, initialValues, resetForm}) => {
                  setSubmitting(true);
                  this.props.addCustomer(data)
                  resetForm(initialValues);
                  setSubmitting(false);
                }}
                >
                  {({ touched, errors, isSubmitting, values, data, handleChange, handleBlur}) => (
                    <Form>

                      {/* Name */}
                      <div className="form-group">
                        <label htmlFor="firstName"><b>Name</b></label>
                      <Field
                        type="input"
                        name="name"
                        placeholder="Full name"
                        className={`form-control ${
                          touched.name && errors.name ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="name"
                        className="invalid-feedback"
                      />
                    </div>

                    {/* DOB */}
                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth</label>
                    <Field
                      type="input"
                      name="dob"
                      placeholder="DD/MM/YYYY"
                      className={`form-control ${
                        touched.dob && errors.dob ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="dob"
                      className="invalid-feedback"
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                  <Field
                    type="input"
                    name="phoneNumber"
                    placeholder="0445912484"
                    className={`form-control ${
                      touched.phone && errors.phone ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="phoneNumber"
                    className="invalid-feedback"
                  />
                </div>

                {/* Address */}
                <div className="form-group">
                  <label htmlFor="street" style={{marginTop: 1+"em"}}><b>Address</b></label>
                <Field
                  type="input"
                  name="street"
                  placeholder="3/6 Flinders St"
                  className={`form-control ${
                    touched.street && errors.street ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="city"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City/ Suburb</label>
              <Field
                type="input"
                name="city"
                placeholder="Melbourne"
                className={`form-control ${
                  touched.city && errors.city ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="city"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
            <select
              type="input"
              name="state"
              style={{ display: 'block' }}
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              >
                <option value="" label="...................." />
              <option value="ACT" label="ACT" />
            <option value="NSW" label="NSW" />
          <option value="NT" label="NT" />
        <option value="QLD" label="QLD" />
      <option value="SA" label="SA" />
    <option value="TAS" label="TAS" />
  <option value="VIC" label="VIC" />
<option value="WA" label="WA" />
</select>
{errors.color &&
  touched.color &&
  <div className="input-feedback">
    {errors.color}
  </div>}
</div>

<div className="form-group">
  <label htmlFor="postCode">Post Code</label>
<Field
  type="input"
  name="postCode"
  placeholder="3000"
  className={`form-control ${
    touched.postCode && errors.postCode ? "is-invalid" : ""
  }`}
/>
<ErrorMessage
  component="div"
  name="postCode"
  className="invalid-feedback"
/>
</div>

{/* Package */}
<div className="form-group">
  <label htmlFor="package" style={{marginTop: 1+"em"}}><b>Package Type</b></label>
<select
  type="input"
  name="package"
  style={{ display: 'block' }}
  value={values.package}
  onChange={handleChange}
  onBlur={handleBlur}
  >
    <option value="" label="...................." />
  <option value="basic" label="Basic" />
<option value="multi" label="Multi-pack" />
<option value="deluxe" label="Deluxe" />
<option value="gold" label="Gold" />
</select>
{errors.package &&
  touched.package &&
  <div className="input-feedback">
    {errors.package}
  </div>}
</div>

<button
  type="submit"
  className="btn btn-success btn-block"
  disabled={isSubmitting}
  >
    {isSubmitting ? "Please wait..." : <b>Submit</b>}
  </button>

  <pre>
    {JSON.stringify(values, null, 2)}
  </pre>

</Form>
)}
</Formik>
</div>
</div>
</div>
</div>
);
}
}


export default connect(mapStateToProps, mapDispatchToProps)(NewCustomerForm);
