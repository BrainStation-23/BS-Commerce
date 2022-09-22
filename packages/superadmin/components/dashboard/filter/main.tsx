import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import filterStyle from './styles/datePicker.module.css';

const DateTimeFilter: FC = () => {
  const day = new Date();
  const previousDay = day.setDate(day.getDate() - 1);
  const previousTime = day.setDate(day.getDate() - 0.125);
  const currentTime = `${new Date().getHours}: ${
    new Date().getMinutes
  }: ${'00'}`;
  const [startDate, setStartDate] = useState(new Date(previousDay));
  const [startTime, setStartTime] = useState(new Date(previousTime));
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  return (
    <>
      <div className="d-flex justify-content-evenly ms-4 flex-wrap">
        <div className="w-25">
          <div>Start Date:</div>
          <div>
            <DatePicker
              className={filterStyle.datePicker}
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              maxDate={new Date()}
            />
          </div>
        </div>
        <div className="w-25">
          <div>Start Time:</div>
          <div>
            <DatePicker
              className={filterStyle.datePicker}
              selected={startTime}
              onChange={(time: any) => setStartTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>
        </div>
        <div className="w-25">
          <div>End Date:</div>
          <div>
            <DatePicker
              className={filterStyle.datePicker}
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              maxDate={new Date()}
            />
          </div>
        </div>
        <div className="w-25">
          <span>End Time:</span>
          <span>
            <DatePicker
              className={filterStyle.datePicker}
              selected={endTime}
              onChange={(time: any) => setEndTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default DateTimeFilter;
