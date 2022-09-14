import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import filterStyle from "./styles/datePicker.module.css";

const DateTimeFilter: FC = () => {
  const day = new Date();
  const previousDay = day.setDate(day.getDate() - 1);
  const previousTime = day.setDate(day.getDate() - 0.125);
  const currentTime = `${new Date().getHours}: ${
    new Date().getMinutes
  }: ${"00"}`;
  const [startDate, setStartDate] = useState(previousDay);
  const [startTime, setStartTime] = useState(previousTime);
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  return (
    <>
      <div style={{ marginLeft: "20px" }}>
        <div className="row gx-5">
          <div className="col-md-6 col-lg-3 col-xl-3">
            {/* <div style={{ paddingLeft: "20px" }}> */}
            <div>Start Date:</div>
            <div>
              <DatePicker
                className={filterStyle.datePicker}
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                maxDate={new Date()}
              />
            </div>
            {/* </div> */}
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3">
            {/* <div style={{ paddingLeft: "20px" }}> */}
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
            {/* </div> */}
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3">
            {/* <div style={{ paddingLeft: "20px" }}> */}
            <div>End Date:</div>
            <div>
              <DatePicker
                className={filterStyle.datePicker}
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
                maxDate={new Date()}
              />
            </div>
            {/* </div> */}
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3">
            {/* <div style={{ paddingLeft: "20px" }}> */}
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
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default DateTimeFilter;
