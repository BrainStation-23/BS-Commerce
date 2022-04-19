import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import Layout from "../components/layout";

import { signout } from "../store/actions/userActions";

const Signout: NextPage = () => {
  const dispatch = useDispatch();

  dispatch(signout());

  return <Layout></Layout>;
};

export default Signout;
