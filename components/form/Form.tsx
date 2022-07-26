import React, { useState } from 'react';

import classes from './form.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import StyledSelect from '../../components/select/Select.jsx';

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const accomArr: string | object[] = [
    { label: '6730 Luna Land North Rhiannonmouth', value: 1 },
    { label: '6731 Luna Land North Rhiannonmouth', value: 2 },
    { label: '6732 Luna Land North Rhiannonmouth', value: 3 },
  ];

  const guestsArr = [
    { label: '4 adults', value: 1 },
    { label: '3 adults', value: 2 },
    { label: '2 adults', value: 3 },
  ];

  const [accomodation, setAccomodation] = useState<(string | object)[]>([
    accomArr[0],
  ]);
  const [guests, setGuests] = useState<(string | object)[]>([guestsArr[0]]);

  return (
    <div className={classes.formContainer}>
      <h4 className={classes.title}>Book your vacation</h4>
      <form className={classes.form}>
        <div className={classes.selects}>
          <div className={classes.accomodation}>
            <span>Accomodation</span>

            <StyledSelect
              options={accomArr}
              values={accomodation}
              onChange={(values) => setAccomodation(values)}
              dropdownPosition="auto"
            />
          </div>

          <div className={classes.checkIn}>
            <div className={classes.checkInImg}>
              <img src="../../static/check.svg" alt="" />
            </div>

            <div className={classes.checkInRight}>
              <span>Check in</span>

              <DatePicker
                selected={startDate}
                dateFormat="dd.MM.yyyy"
                onChange={(date: Date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className={classes.checkOut}>
            <span>Check out</span>
            <DatePicker
              dateFormat="dd.MM.yyyy"
              selected={returnDate}
              onChange={(date: Date) => setReturnDate(date)}
            />
          </div>

          <div className={classes.guests}>
            <span>Guests</span>
            <StyledSelect
              options={guestsArr}
              values={guests}
              onChange={(value) => setGuests(value)}
              dropdownPosition="auto"
            />
          </div>
        </div>

        <div className={classes.btnContainer}>
          <button className={classes.btn}>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
