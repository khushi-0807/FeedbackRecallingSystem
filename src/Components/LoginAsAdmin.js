import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";
import AdminLAndingPage from "./AdminLAndingPage";
import HomeNav from "./HomeNav";

function LoginAsAdmin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {

      const response = await Axios.post("http://localhost:3000/auth/authAdmin/signup", {
        name,
        email,
        password,
        confirmPassword
      }).then((res) => {
       
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          navigate("/AdminLAndingPage");
        } else {
          console.log(res.data.message)
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
      <div className="container col-xl-10 col-xxl-8 px-4 py-1">
        <div className="row align-items-center g-lg-5">
          <div className="col-lg-7 text-center text-lg-start">
            <img src="./assets/feedback3.webp" alt="feedback" />
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border border-black border-2 rounded-3 bg-body-tertiary"
              onSubmit={handleSubmit} 
            >
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="aryam"
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="form-control"
                  id="email"
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
                  id="password"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  placeholder="Confirm password"
                />
                <label htmlFor="floatingInput">Confirm password</label>
              </div>
              {/* <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div> */}
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <a href="/Login">Login</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAsAdmin;