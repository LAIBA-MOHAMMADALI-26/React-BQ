import React from 'react'

export default function Login() {
  return (
   
    <>
  {/* Hello world */}
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img
          src="https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?w=996&t=st=1687435020~exp=1687435620~hmac=aad64c4504d2016968e12d50cea27ea42e4ec9b6b4ea4ad5c51daeaa3a32b6a5"
          className="img-fluid"
          alt="Phone image"
        />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form1Example13"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form1Example13">
              Email address
            </label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form1Example23"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form1Example23">
              Password
            </label>
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form1Example3"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="form1Example3">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-lg btn-block w-100">
            Sign in
          </button>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
          <a
            className="btn btn-primary btn-lg btn-block mb-2 w-100"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f me-2  " />
            Continue with Facebook
          </a>
          <a
            className="btn btn-primary btn-lg btn-block w-100 "
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter me-2" />
            Continue with Twitter
          </a>
        </form>
      </div>
    </div>
  </div>
</>

    
  )
}
