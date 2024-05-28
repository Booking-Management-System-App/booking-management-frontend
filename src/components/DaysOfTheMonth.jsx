//import { useEffect } from 'react';
import PropTypes from 'prop-types';
//import api from '../api/axiosConfig';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function DaysOfTheMonth(props) {

  const {selectedDay, firstDayOfWeek, lastDayOfMonth, setSelectedDay} = props;

  return (
    <>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Row key={idx} className="m-auto justify-content-between px-5 py-1 daysOfMonthRow">
        {Array.from({ length: 7 }).map((_, idy) => (
          <Col key={(idx * 7) + idy + 1 - firstDayOfWeek} xs={1} className="p-0 text-center">
            <Button
              variant="dark"
              text="light"
              className={
                (idx * 7) + idy + 1 - firstDayOfWeek > 0 &&
                (idx * 7) + idy + 1 - firstDayOfWeek <= lastDayOfMonth
                ? (
                  selectedDay === (idx * 7) + idy + 1 - firstDayOfWeek
                  ? (
                    "mt-2 dayButton active"
                  ) : (
                    "mt-2 dayButton"
                  )
                ) : (
                  "mt-2 dayButton d-none"
                )
              }
              onClick={() => setSelectedDay((idx * 7) + idy + 1 - firstDayOfWeek)}
            >
              {(idx * 7) + idy + 1 - firstDayOfWeek}
            </Button>
          </Col>
        ))}
        </Row>
      ))}
    </>
  );
}

DaysOfTheMonth.propTypes = {
  selectedDay: PropTypes.number,
  firstDayOfWeek: PropTypes.number,
  lastDayOfMonth: PropTypes.number,
  setSelectedDay: PropTypes.func
};

export default DaysOfTheMonth;
