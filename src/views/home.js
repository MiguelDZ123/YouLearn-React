import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>YouLearn</title>
        <meta property="og:title" content="YouLearn" />
      </Helmet>
      <div className="home-you-learn72">
        <div className="home-navbar202">
          <div className="home-container1">
            <img
              alt="Rectangle73"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzQ2JyB2aWV3Qm94PScwIDAgMTAwIDQ2JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cGF0aCBkPSdNMCAwSDEwMFY0NkgwVjBaJyBmaWxsPScjRkY2ODY0Jy8+Cjwvc3ZnPgo="
              className="home-image"
            />
            <Link to="/" className="home-navlink">
              <div className="home-group1764">
                <span className="home-text">You</span>
                <span className="home-text01">Learn</span>
              </div>
            </Link>
            <span className="home-text02">Tutorials</span>
            <span className="home-text03">Courses</span>
            <span className="home-text04">Pricing</span>
            <span className="home-text05">Contact</span>
            <Link to="/login" className="home-text06">
              Login
            </Link>
            <span className="home-text07">Register</span>
          </div>
        </div>
        <div className="home-hero203">
          <div className="home-container2">
            <div className="home-frame76">
              <div className="home-group77">
                <div className="home-group78">
                  <img
                    alt="Rectangle79"
                    src="/playground_assets/73303-coding-500w.gif"
                    className="home-image1"
                  />
                </div>
              </div>
            </div>
            <span className="home-text08">
              Start Coding Today at your Own Pace for Free
            </span>
            <span className="home-text09">
              Learn to code today for free whenever and however you want. Coding
              is the base of programming and programming means success.
            </span>
            <span className="home-text10">
              Why stay behind when you can start learning today at your own
              pace. Here you will learn from the basics to the expert. Learn to
              code websites, games, apps, and much more.
            </span>
            <span className="home-text11">Learn more 〉</span>
            <button className="home-button button">
              <span className="home-text12">
                <span>Start Coding!</span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
        <div className="home-footer204">
          <div className="home-container3">
            <span className="home-text15">Subscribe to the newsletter</span>
            <span className="home-text16">Navigation</span>
            <span className="home-text17">Tutorials</span>
            <span className="home-text18">Courses</span>
            <span className="home-text19">Pricing</span>
            <span className="home-text20">Contact</span>
            <span className="home-text21">Tools</span>
            <span className="home-text22">Code Editor</span>
            <span className="home-text23">Group Chat</span>
            <span className="home-text24">Web Designer</span>
            <span className="home-text25">Legal Documents</span>
            <span className="home-text26">Terms &amp; Services</span>
            <span className="home-text27">Privacy Policy</span>
            <span className="home-text28">Usage Policy</span>
            <span className="home-text29">
              Copyright © 2022 YouLearn. All Rights Reserved. Made with 💚 by
              YouLearn
            </span>
            <form className="home-form">
              <input
                type="text"
                placeholder="John.doe@gmail.com"
                className="home-textinput input"
              />
              <button className="home-subscribe button">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
