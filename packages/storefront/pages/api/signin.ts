import { userAPI } from "APIs";
import axios from "axios";
var cookie = require("cookie");
var escapeHtml = require("escape-html");
var http = require("http");
var url = require("url");

export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    // userAPI.signIn(req.data).then((response: any) => {
    //     if (response?.code != 200) {
    //       alert(response.response.data.error);
    //     } else {
    //     //   dispatch(storeUserToken(response?.data.token));
    //       // let expires = new Date();
    //       // expires.setTime(expires.getTime() + response?.data.expires_in * 1000);
    //       // setCookie("access_token", response?.data.token, { path: "/", expires });
    //       res.setHeader('Set-Cookie', cookie.serialize('name', String(response?.data.token), {
    //         httpOnly: true,
    //         maxAge: 60 * 60 * 24 * 7 // 1 week
    //       }));

    //     //   window.location.href = "/home";
    //     }
    //   })
    // if (req.method === 'POST') {
    const token = await fetch("http://localhost:3000/api/customer/auth/sign-in", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await token.json()

    console.log("000000000000000000000000000000", data.data.token)

    // res.setHeader(
    //     "Set-Cookie",
    //     cookie.serialize("token", String(data.data.token), {
    //         httpOnly: true,
    //         maxAge: 60 * 60 * 24 * 7, // 1 week
    //     })
    // );
    res.setHeader('Set-Cookie',
                cookie.serialize('token', data.data.token,
                {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 7,
                    sameSite: 'strict',
                    path: '/'
                }))
    res.json(data)

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // }
      
}