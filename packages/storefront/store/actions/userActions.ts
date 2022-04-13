import Types from "../types";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export function signin(data: any, router: any) {
  return (dispatch: any) => {
    dispatch({
      type: Types.USER_LOGIN,
      payload: axios({
        method: "post",
        url: `${baseUrl}/auth/login`,
        data,
      }),
    }).then((response: any) => {
        localStorage.setItem("userData", JSON.stringify(response.value.data));
        router.push('/home');
        //window.location.href = "/home"
    }).catch((error: any) => {
        alert('invalid email or password');
    })
  };
}

export function signup(data: any, router: any) {
  return (dispatch: any) => {
    dispatch({
      type: Types.USER_REGISTER,
      payload: axios({
        method: "post",
        url: `${baseUrl}/auth/register`,
        data,
      }),
    }).then(() => {
      router.push("/sign-in");
    }).catch((error: any) => {
        alert('error');
    })
  };
}

export function signout(router: any) {
   return (dispatch: any) => {
        dispatch({
          type: Types.USER_LOGOUT,
          payload: axios({
            method: "get",
            url: `${baseUrl}/auth/logout`,
          }),
        }).then(() => {
            localStorage.removeItem('userData');
            router.push('/sign-in');
        });
      };
}
