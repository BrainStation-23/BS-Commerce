import SingleView from "../singleView";

const MetaCard = (props: any) => {
  const {product} = props;
  
  return <>
      
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="meta"
        id="meta"
      >
        
        <div className="card-header with-border d-flex justify-content-between align-items-center"> 
            <div className="card-title row align-items-center  pt-2 ps-2">
              <i
                className="bi bi-meta col-1"
                style={{ fontSize: "25px" }}
              />
              <div className="px-3 fs-5 col text-start">Meta</div> 
            </div>
        </div>
        <div className="" id="metaTab">
          <div className="card-body">
            <SingleView label="Keywords" value={product?.meta?.keywords} toolkitMessage="toolkitMessage"/>
            <SingleView label="Title" value={product?.meta?.title} toolkitMessage="toolkitMessage"/>
            <SingleView label="Description" value={product?.meta?.description} toolkitMessage="toolkitMessage"/>
            <SingleView label="Friendly Page Name" value={product?.meta?.friendlyPageName} toolkitMessage="toolkitMessage"/>
            
          </div>
        </div>
      </div>
  </>;
};

export default MetaCard;
