import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Loginin = () => {
  const navigate = useNavigate();
  const username = useRef("");
  const password = useRef("");

  function letscheck() {
    if (
      username.current.value === "Abdulwahab" &&
      password.current.value === "Avengers"
    ) {
      navigate("/");
    }
  }

  return (
    <main className="form-signin w-25 m-auto my-5 ">
      <form>
        <img
          className="mb-4"
          src="images/myntra_logo.webp"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={username}
          />
          <label htmlFor="floatingInput">UserName</label>
        </div>
        <div className="form-floating mt-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" onClick={letscheck}>
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </main>
  );
};

export default Loginin;
