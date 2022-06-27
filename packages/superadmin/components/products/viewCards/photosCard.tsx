import SingleView from "../singleView";

const PhotosCard = (props: any) => {
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
                className="bi bi-image-fill col-1"
                style={{ fontSize: "25px" }}
              />
              <div className="px-3 fs-5 col text-start">Photos</div> 
            </div>
        </div>
        <div className="" id="metaTab">
          <div className="card-body">
            <SingleView label="URL" value={product?.photos[0]?.url} toolkitMessage="toolkitMessage"/>
            <SingleView label="ID" value={product?.photos[0]?.id} toolkitMessage="toolkitMessage"/>
            <SingleView label="Title" value={product?.photos[0]?.title} toolkitMessage="toolkitMessage"/>
            <SingleView label="alt" value={product?.photos[0]?.alt} toolkitMessage="toolkitMessage"/>
            
          </div>
        </div>
      </div>
  </>;
};

export default PhotosCard;
