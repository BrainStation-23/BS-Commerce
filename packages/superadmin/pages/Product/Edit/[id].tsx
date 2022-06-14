import { NextPage } from "next";
import { useRouter } from "next/router";

const LogDetailPage: NextPage = () => {
    const router = useRouter()
    const { id } = router.query;
    const { isReady  } = router.query;

    return (
        <div className="bg-light">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {/* <LogDetail id={id}/> */}
          <h1>{id}</h1>
          {/* {isReady? <h1>{router.query.id}</h1> : "not"} */}
          
        </main>
      </div>
    )
}

export default LogDetailPage;