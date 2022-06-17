import { FC } from "react";
import filter from "./styles/filterStyle.module.css";
const DateTimeFilter: FC = () => {
  return (
    <>
      <div className="row">
        <div className={`col-3 ${filter.filter_input}`}>
          <label>Start Date:</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
          ></input>
        </div>
        <div className={`col-3 ${filter.filter_input}`}>
          <label>Start Date:</label>
          <input
            type="time"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
          ></input>
        </div>
        <div className={`col-3 ${filter.filter_input}`}>
          <label>End Date:</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
          ></input>
        </div>
        <div className={`col-3 ${filter.filter_input}`}>
          <label>End Date:</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
          ></input>
        </div>
      </div>
    </>
  );
};

export default DateTimeFilter;
