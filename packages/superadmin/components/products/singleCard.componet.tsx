import Tooltips from "../global/tooltip";

const SingleCard = (props: any) => {
  const {label , value , toolkitMessage} = props;
  return <>
      
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="product-info"
        id="product-info"
      >
        <div className="collapse " id="prouctInfoTab">
          <div className="card-body">
            
          </div>
        </div>
      </div>
  </>;
};

export default SingleCard;
