import { NextPage } from "next";
import { useRouter } from "next/router";
import LogDetail from "../../components/system/log/logDetail";

const LogDetailPage: NextPage = () => {
    const router = useRouter()
    const { id } = router.query;

    return (
        <div className="bg-light">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <LogDetail id={id}/>
        </main>
      </div>
    )
}

export default LogDetailPage;