import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - YouLearn</title>
        <meta property="og:title" content="Login - YouLearn" />
      </Helmet>
      <div className="login-container1">
        <div className="login-container2">
          <img
            alt="image"
            src="/playground_assets/622687e9b7919f8f5aeb5835_phito-900w.png"
            className="login-image"
          />
        </div>
        <div className="login-container3">
          <form className="login-form">
            <label className="login-text">Email</label>
            <input
              type="text"
              placeholder="John.doe@gmail.com"
              className="login-textinput input"
            />
            <label className="login-text01">Password</label>
            <input
              type="text"
              placeholder="•••••••••••••••"
              className="login-textinput1 input"
            />
            <input type="checkbox" className="login-checkbox" />
            <span className="login-text02">Remember me</span>
            <span className="login-text03">Forgot password?</span>
            <button className="login-button button">
              <span className="login-text04">
                <span>Login now</span>
                <span className="login-text06"></span>
              </span>
            </button>
            <button className="login-button1 button">
              <span className="login-text07">
                <span>Sign-in with google</span>
              </span>
              <img
                alt="image"
                src="/playground_assets/622636f8c0a0573db50afeaf_google-logo-png-suite-everything-you-need-know-about-google-newest-0-200h.png"
                className="login-image1"
              />
            </button>
          </form>
          <h1 className="login-text09">Login to your dashboard</h1>
        </div>
      </div>
    </div>
  )
}

export default Login
