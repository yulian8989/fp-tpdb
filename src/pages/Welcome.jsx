import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Welcome() {
  return (
    <>
    <section id="#header">
        <Header />
    </section>
      <section id="hero">
        <div className="overflow-hidden">
          <div className="container-fluid col-xxl-8">
            <div className="row flex-lg-nowrap align-items-center g-5">
              <div className="order-lg-1 w-100">
                <img
                  style={{
                    clipPath: "polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)",
                  }}
                  src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Photo by Milad Fakurian"
                  loading="lazy"
                  srcSet="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768 1080w, https://images.unsplash.com/photo-1618004912476-29818d81ae2e??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1618004912476-29818d81ae2e??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1618004912476-29818d81ae2e??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1618004912476-29818d81ae2e??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w"
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  width="2160"
                  height="768"
                />
              </div>
              <div className="col-lg-6 text-center text-lg-center pt-lg-5 mt-xl-4">
                <div className="lc-block mb-4">
                  <div editable="rich">
                    <h1 className="fw-bold display-3">
                      The quick brown fox jumps over the lazy dog
                    </h1>
                  </div>
                </div>

                <div className="lc-block mb-5">
                  <div editable="rich">
                    <p className="rfs-8">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc et metus id ligula malesuada placerat sit amet quis
                      enim.
                    </p>
                  </div>
                </div>

                <div className="lc-block mb-6">
                    <a href="#price" className="btn btn-primary px-4 me-md-2 btn-lg">Get it Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price">
        <div className="container py-5 overflow-hidden">
          <div className="row mb-5 pb-2">
            <div className="col-md-12 text-center">
              <div className="lc-block mb-4">
                <span className="small mt-4 d-block">LOREM IPSUM</span>
                <h2 className="display-2 mb-0">
                  <b>Pricing</b>
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  et metus id ligula malesuada placerat sit amet quis enim.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pt-2 pb-4">
            {/* Personal Plan */}
            <div className="col-12 col-lg-4">
              <div className="lc-block text-center rounded border shadow-sm py-5 mb-5">
                <div className="lc-block text-center">
                  <img
                    src="https://cdn.livecanvas.com/media/svg/undraw-sample/undraw_steps_ngvm.svg"
                    alt="Designer"
                    className="w-50 mb-2"
                  />
                </div>
                <div className="lc-block text-center">
                  <h2>Personal</h2>
                </div>
                <div className="lc-block text-center small">
                  <p>
                    Perfect for <strong>designers</strong>
                  </p>
                </div>
                <div className="lc-block text-center text-info display-4">
                  <p>
                    <span>
                      <b>$79</b>
                    </span>
                    <span className="lead">/ per year</span>
                  </p>
                </div>
                <div className="lc-block">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li className="py-2">
                      <svg
                        viewBox="0 0 16 16"
                        className="text-success"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                        width="2em"
                        height="2em"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                        ></path>
                      </svg>
                      <span>Build Unlimited Websites</span>
                    </li>
                    <li className="py-2">
                      <svg
                        viewBox="0 0 16 16"
                        className="text-success"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                        width="2em"
                        height="2em"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                        ></path>
                      </svg>
                      <span>Updates for 1 Year</span>
                    </li>
                    <li className="py-2">
                      <svg
                        viewBox="0 0 16 16"
                        className="text-success"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                        width="2em"
                        height="2em"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                        ></path>
                      </svg>
                      <span>Support for 1 Year</span>
                    </li>
                  </ul>
                </div>
                <div className="lc-block" style={{ zIndex: 4 }}>
                  <Link
                    to="/signup"
                    className="btn btn-outline-primary"
                    role="button"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            {/* Business Plan */}
            <div className="col-12 col-lg-4" style={{ zIndex: 5 }}>
              <div
                className="lc-block text-center mb-5 py-5 shadow bg-white shadow-lg text-dark"
                style={{ borderRadius: 12, zIndex: 2, transform: "scale(1.2)" }}
              >
                <div className="lc-block text-center">
                  <img
                    src="https://cdn.livecanvas.com/media/svg/undraw-sample/undraw_video_influencer_9oyy.svg"
                    alt="Designer"
                    className="w-50 mb-2"
                  />
                </div>
                <div className="lc-block text-center">
                  <h2>Business</h2>
                </div>
                <div className="lc-block text-center small">
                  <p>
                    Perfect for <strong>agency</strong>
                  </p>
                </div>
                <div className="lc-block text-center text-info display-4">
                  <p>
                    <span>
                      <b>$199</b>
                    </span>
                    <span className="lead">/ per year</span>
                  </p>
                </div>
                <div className="lc-block">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li className="py-2">
                      <svg
                        viewBox="0 0 16 16"
                        className="text-success"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                        width="2em"
                        height="2em"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                        ></path>
                      </svg>
                      <span>Build Unlimited Websites</span>
                    </li>
                    <li className="py-2">
                      <svg
                        viewBox="0 0 16 16"
                        className="text-success"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                        width="2em"
                        height="2em"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                        ></path>
                      </svg>
                      <span>Updates for 1 Year</span>
                    </li>
                    <li className="py-2">
                      <svg
                        viewBox="0 0 16 16"
                        className="text-success"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        lc-helper="svg-icon"
                        width="2em"
                        height="2em"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                        ></path>
                      </svg>
                      <span>Support for 1 Year</span>
                    </li>
                  </ul>
                </div>
                <div className="lc-block" style={{ zIndex: 4 }}>
                  <a className="btn btn-outline-primary" href="#" role="button">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        hubungi kami
      </section>
    </>
  );
}

export default Welcome;
