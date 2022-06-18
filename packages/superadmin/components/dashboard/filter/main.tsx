import { FC } from "react";
const DateTimeFilter: FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-lg-3 col-xl-3">
          <label
            style={{
              ["fontSize" as any]: "17px",
              ["marginRight" as any]: "5px",
            }}
          >
            Start Date:
          </label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
            style={{ ["width" as any]: "70%", ["padding" as any]: "10px" }}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3">
          <label
            style={{
              ["fontSize" as any]: "17px",
              ["marginRight" as any]: "5px",
            }}
          >
            Start Date:
          </label>
          <input
            type="time"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
            style={{ ["width" as any]: "70%", ["padding" as any]: "10px" }}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3">
          <label
            style={{
              ["fontSize" as any]: "17px",
              ["marginRight" as any]: "5px",
            }}
          >
            End Date:
          </label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
            style={{ ["width" as any]: "70%", ["padding" as any]: "10px" }}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3">
          <label
            style={{
              ["fontSize" as any]: "17px",
              ["marginRight" as any]: "5px",
            }}
          >
            End Date:
          </label>
          <input
            type="time"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
            style={{ ["width" as any]: "70%", ["padding" as any]: "10px" }}
          />
        </div>
      </div>
    </>
  );
};

export default DateTimeFilter;
