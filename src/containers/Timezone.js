import React from 'react';
import { newTimezone } from '../actions/index.js';
import { connect } from 'react-redux';
import {
  Card
} from 'react-bootstrap';
import { Formik, Form } from 'formik';
var moment = require('moment-timezone');

function mapStateToProps(state) {
  return{
    timezone: state.timezoneObj.timezone,
  };
}

const mapDispatchToProps = {
  newTimezone
}

class Timezone extends React.Component {
  render() {
    const timezone = this.props.timezone;
    const timezoneSplit = timezone.split('/');
    const timezoneCity = timezoneSplit[1]
    const timezoneCountry = timezoneSplit[0]

    const TIME = moment().utc(moment().format("DD-MM-YYYY h:mm:ss A"));
    // FORMAT FOR DISPLAYING TIME
    const localTIME = TIME.clone().tz('America/New_York').format("DD-MM-YYYY h:mm:ss A")

    return(
      <Card>
      <Card.Body>
      <Card.Title>Timezone</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Times currently shown as in timezone of
      {' ' + timezoneCity + ', ' + timezoneCountry}
      </Card.Subtitle>

      <Formik
      validateOnChange={true}
      initialValues={{ timezone: "" }}
      onSubmit={(data, {props, setSubmitting, initialValues, resetForm}) => {
        setSubmitting(true);
        this.props.newTimezone(data)
        resetForm(initialValues);
        setSubmitting(false);
      }}
      >
      {({ touched, errors, isSubmitting, values, data, handleChange, handleBlur}) => (
        <Form>
        <div className="form-group">
        <label htmlFor="timezone">Change timezone: &nbsp;</label>
        <select
        type="input"
        name="timezone"
        style={{ display: 'inline-block' }}
        value={values.timezone}
        onChange={handleChange}
        onBlur={handleBlur}
        >
        <option value="" label="Select new timezone" />
        <option value="Pacific/Niue" label="Samoa/ Niue (GMT-11:00)" />
        <option value="Pacific/Tahiti" label="Hawaii/ Tahiti (GMT-10:00)" />
        <option value="America/Sitka" label="Alaska/ Gambier (GMT-09:00)" />
        <option value="America/Vancouver" label="Los Angeles/ Vancouver (GMT-08:00)" />
        <option value="America/Phoenix" label="Phoenix/ Mexican Pacific (GMT-07:00)" />
        <option value="America/Monterrey" label="Mexico City/ Chicago (GMT-06:00)" />
        <option value="America/Lima" label="New York/ Peru (GMT-05:00)" />
        <option value="America/Barbados" label="Puerto Rico/ Venezuela (GMT-04:00)" />
        <option value="America/Belem" label="Argentina/ Brazil (GMT-03:00)" />
        <option value="America/Noronha" label="South Georgia Time (GMT-02:00)" />
        <option value="Atlantic/Azores" label="Cape Verde (GMT-01:00)" />
        <option value="Europe/London" label="UK/ Reykjavik (GMT+00:00)" />
        <option value="Europe/Paris" label="Algiers/ Paris/ Rome (GMT+01:00)" />
        <option value="Europe/Kiev" label="Central Africa/ Eastern European (GMT+02:00)" />
        <option value="Asia/Baghdad" label="Arabia/ East Africa (GMT+03:00)" />
        <option value="Asia/Dubai" label="Dubai/ Mauritius (GMT+04:00)" />
        <option value="Asia/Tashkent" label="Pakistan/ Uzbekistan (GMT+05:00)" />
        <option value="Indian/Chagos" label="Bangladesh/ Indian Ocean (GMT+06:00)" />
        <option value="Asia/Bangkok" label="Indochina (GMT+07:00)" />
        <option value="Australia/Perth" label="Australian Western/ Singapore (GMT+08:00)" />
        <option value="Asia/Tokyo" label="Japan/ East Timor (GMT+09:00)" />
        <option value="Pacific/Guam" label="Australian Eastern Standard (GMT+10:00)" />
        <option value="Australia/Melbourne" label="Eastern Australian (GMT+11:00)" />
        <option value="Pacific/Tarawa" label="Marshall Islands/ Tuvalu (GMT+12:00)" />
        <option value="Pacific/Auckland" label="Fiji/ New Zealand (GMT+13:00)" />
        <option value="Pacific/Kiritimati" label="Apia/ Line Islands (GMT+14:00)" />

        </select>
        {errors.color &&
          touched.color &&
          <div className="input-feedback">
          {errors.color}
          </div>}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : <b>Submit</b>}
            </button>

          </Form>
        )}
        </Formik>
        </Card.Body>
        </Card>
      )
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Timezone);
