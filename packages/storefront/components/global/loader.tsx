import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { FadeLoader, ClipLoader, HashLoader, BeatLoader } from "react-spinners";
import Breadcrumb from "./breadcrumbs/breadcrumb";
const Loading = () => {
  return (
    <>
      <Breadcrumb
        title="Create Account"
        pathArray={["Home", "Account"]}
        linkArray={["/home", "/account/sign-in"]}
      />
      <div className="flex flex-wrap justify-center content-center my-20">
        {/* <FadeLoader
          color="#16A34A"
          height={50}
          margin={40}
          speedMultiplier={1}
          width={6}
        />
        <ClipLoader color="#16A34A" size={100} />

        <HashLoader color="#16A34A" size={100} /> */}

        <BeatLoader color="#16A34A" margin={32} size={32} />
      </div>
    </>
  );
};

export default Loading;
