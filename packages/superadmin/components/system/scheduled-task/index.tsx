import TaskTable from "./taskTable";

const ScheduledTask = () => {
  return (
    <>
      <h4 className="font-weight-normal">Schedule tasks</h4>
      <div className="card rounded border-1 px-2 mt-3">
        <div className="card-body">
          <p>
            Task period should not exceed 24 days. Learn more about scheduled
            <a href="#" className="ms-1" style={{ textDecoration: "none" }}>
              tasks
            </a>
          </p>
          <h6 className="font-weight-bold">Do not forget to restart the application once a task has been modified.</h6>
          <div className="mt-4">
            <TaskTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduledTask;
