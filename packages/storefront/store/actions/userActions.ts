import Types from "../types";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export function signin(data: any, router: any) {
  return (dispatch: any) => {
    dispatch({
      type: Types.USER_LOGIN,
      payload: axios({
        method: "post",
        url: `${baseUrl}/user-auth/login`,
        data,
      }),
    })
      .then((response: any) => {
        localStorage.setItem("userData", JSON.stringify(response.value.data));
        router.push("/home");
      })
      .catch((error: any) => {
        alert(error.response.data.message);
      });
  };
}

export function signup(data: any, router: any) {
  return (dispatch: any) => {
    dispatch({
      type: Types.USER_REGISTER,
      payload: axios({
        method: "post",
        url: `${baseUrl}/user-auth/register`,
        data,
      }),
    })
      .then(() => {
        router.push("/sign-in");
      })
      .catch((error: any) => {
        alert(error.response.data.message);
      });
  };
}

export function signout() {
  return (dispatch: any) => {
    dispatch({
      type: Types.USER_LOGOUT,
      payload: axios({
        method: "get",
        url: `${baseUrl}/user-auth/logout`,
      }),
    }).then(() => {
      localStorage.removeItem("userData");
      window.location.href = "/sign-in";
    });
  };
}
