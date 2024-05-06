import React, { useState } from "react";
import HomeNav from "./HomeNav";

function Login() {
  return (
    <>
      <HomeNav />
      <body class="text-center ">
        <form
          class="form-signin my-5 mx-5 p-md-3 border rounded-5 border-black border-4 bg-body-secondnary"
          method="POST"
          action="http://localhost:5000/Login"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
          <div class="col-md-10 mx-auto col-lg-5">
            <div class="form-floating mb-3 border-black">
              <input
                type="email"
                name="email"
                class="form-control border-black border-2"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                name="password"
                class="form-control border-black border-2"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="checkbox mb-3 justify-content-ends">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
              <br />
              <label>
                <a href="">Forget password?</a>
              </label>
            </div>
            <button class="w-50 btn btn-lg btn-primary" type="submit">
              {/* <a
              href="/SecondPage"
              class="w-50 btn btn-lg btn-primary"
              type="submit"
            > */}
              Login
              {/* </a> */}
            </button>
            <br />
            <br />

            <small class="text-black">
              Do not have an account? <a href="/SignIn">Sign In</a>
            </small>
            <p class="mt-2 mb-2 text-black justify-content-center border-left">
              or connect with
            </p>
          </div>
          <div>
            <ul class="list-unstyled d-flex justify-content-center">
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>
                </a>
              </li>

              <li class="ms-3">
                <a class="link-dark" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </form>
      </body>
    </>
  );
}

export default Login;
