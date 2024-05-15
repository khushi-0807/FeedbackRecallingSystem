import React, { useState } from "react";
import HomeNav from "./HomeNav";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await Axios.post(
        "http://localhost:3000/auth/authAdmin/signin",
        {
          email,
          password,
        }
      ).then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          navigate("/AdminLAndingPage");
        } else {
          console.log(res.data.message);
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <HomeNav />
      <body class="text-center my-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="currentColor"
          class="bi bi-person-circle  "
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
        <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
        <div className="col-md-10 mx-auto col-lg-5">
          <form
            className="p-4 p-md-5 border border-black border-2 rounded-3 bg-body-tertiary"
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {/* <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div> */}
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Login
            </button>
            <p class="my-3">Do not have an account?</p>{" "}
            <a href="/LoginAsAdmin">Sign up</a>
          </form>
        </div>
      </body>
    </>
  );
}

export default Login;
