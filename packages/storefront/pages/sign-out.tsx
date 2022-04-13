import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import Layout from "../components/layout";
import { useRouter } from "next/router";

import { signout } from "../store/actions/userActions";

const Signout: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  dispatch(signout(router));

  return <Layout></Layout>;
};

export default Signout;
