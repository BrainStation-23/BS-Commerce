import axios from "axios";

const baseUrl = "http://localhost:3000";

async function signout() {
  try {
    const response = await axios.get(`${baseUrl}/user-auth/logout`);
    localStorage.removeItem("userData");
    window.location.href = "/account/sign-in";
  } catch (error: any) {
    alert(error.response.data.message);
  }
}

export default signout;
