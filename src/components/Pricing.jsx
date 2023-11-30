import React from 'react';
import { Link } from 'react-router-dom';
const Pricing = () => {
  return (
    <div className="container py-5 overflow-hidden">
      <div className="row mb-5 pb-2">
        <div className="col-md-12 text-center">
          <div className="lc-block mb-4">
            <span className="small mt-4 d-block">LOREM IPSUM</span>
            <h2 className="display-2 mb-0"><b>Pricing</b></h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center pt-2 pb-4">
        {/* Personal Plan */}
        <div className="col-12 col-lg-4">
          <div className="lc-block text-center rounded border shadow-sm py-5 mb-5">
            <div className="lc-block text-center">
              <img src="https://cdn.livecanvas.com/media/svg/undraw-sample/undraw_steps_ngvm.svg" alt="Designer" className="w-50 mb-2" />
            </div>
            <div className="lc-block text-center">
              <h2>Personal</h2>
            </div>
            <div className="lc-block text-center small">
              <p>Perfect for <strong>designers</strong></p>
            </div>
            <div className="lc-block text-center text-info display-4">
              <p>
                <span><b>$79</b></span>
                <span className="lead">/ per year</span>
              </p>
            </div>
            <div className="lc-block">
              <ul className="list-unstyled mt-3 mb-4">
                <li className="py-2">
                  <svg viewBox="0 0 16 16" className="text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" width="2em" height="2em">
                    <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                  </svg>
                  <span>Build Unlimited Websites</span>
                </li>
                <li className="py-2">
                  <svg viewBox="0 0 16 16" className="text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" width="2em" height="2em">
                    <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                  </svg>
                  <span>Updates for 1 Year</span>
                </li>
                <li className="py-2">
                  <svg viewBox="0 0 16 16" className="text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" width="2em" height="2em">
                    <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                  </svg>
                  <span>Support for 1 Year</span>
                </li>
              </ul>
            </div>
            <div className="lc-block" style={{ zIndex: 4 }}>
                <Link to="/signup" className="btn btn-outline-primary" role="button">
                    Sign Up
                </Link>
            </div>

          </div>
        </div>
        {/* Business Plan */}
        <div className="col-12 col-lg-4" style={{ zIndex: 5 }}>
          <div className="lc-block text-center mb-5 py-5 shadow bg-white shadow-lg text-dark" style={{ borderRadius: 12, zIndex: 2, transform: 'scale(1.2)' }}>
            <div className="lc-block text-center">
              <img src="https://cdn.livecanvas.com/media/svg/undraw-sample/undraw_video_influencer_9oyy.svg" alt="Designer" className="w-50 mb-2" />
            </div>
            <div className="lc-block text-center">
              <h2>Business</h2>
            </div>
            <div className="lc-block text-center small">
              <p>Perfect for <strong>agency</strong></p>
            </div>
            <div className="lc-block text-center text-info display-4">
              <p>
                <span><b>$199</b></span>
                <span className="lead">/ per year</span>
              </p>
            </div>
            <div className="lc-block">
              <ul className="list-unstyled mt-3 mb-4">
                <li className="py-2">
                  <svg viewBox="0 0 16 16" className="text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" width="2em" height="2em">
                    <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                  </svg>
                  <span>Build Unlimited Websites</span>
                </li>
                <li className="py-2">
                  <svg viewBox="0 0 16 16" className="text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" width="2em" height="2em">
                    <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                  </svg>
                  <span>Updates for 1 Year</span>
                </li>
                <li className="py-2">
                  <svg viewBox="0 0 16 16" className="text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon" width="2em" height="2em">
                    <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                  </svg>
                  <span>Support for 1 Year</span>
                </li>
              </ul>
            </div>
            <div className="lc-block" style={{ zIndex: 4 }}>
              <a className="btn btn-outline-primary" href="#" role="button">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
