import type { GetServerSideProps, NextPage } from "next";

import { useAuth } from "../context/auth.context";

const TestPage: NextPage = (props) =>{

  const { authData, setAuthData } = useAuth()

  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Storefront</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      { authData.isLoggedIn ? <p>Logged in</p> : <p>Not logged in</p> }
      <button onClick={() => setAuthData({isLoggedIn: true, user: "test"})}>Login</button>
    </>)

}

export default TestPage