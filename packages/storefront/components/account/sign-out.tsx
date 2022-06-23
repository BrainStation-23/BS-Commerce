async function signout() {
    localStorage.removeItem("token");
    window.location.href = "/account/sign-in";
}

export default signout;
