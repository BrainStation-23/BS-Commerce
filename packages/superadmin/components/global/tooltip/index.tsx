interface tooltipInterface {
  title: string;
}

const Tooltips = (props: tooltipInterface) => {
  const { title } = props;

  return (
    <>
      <div
        data-toggle="tooltip"
        className="bi bi-question-circle-fill p-0 mt-2 "
        data-placement="bottom"
        title={title}/>
    </>
  );
};

export default Tooltips;
