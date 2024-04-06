import React, { useState } from "react";
import { Layout } from "../../layouts";
import SignIn from "../../features/auth/SignIn";
import SignUp from "../../features/auth/SignUp";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  return (
    <Layout>
      <main className="content auth_page">
        <section className="auth_sc uh_spc">
          <div className="conta_iner">
            <div className="inner">
              <div className="hd_4 text_center">
                <h2>Welcome</h2>
                <p>Please enter your details.</p>
              </div>
              <div className="tab_btns">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsSignIn(true)}
                  className={isSignIn ? "active" : ""}
                >
                  Sign In
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsSignIn(false)}
                  className={!isSignIn ? "active" : ""}
                >
                  Sign Up
                </a>
              </div>

              <div className="tab-content">
                {isSignIn ? <SignIn /> : <SignUp />}
              </div>

              <div className="form_bottom">
                <p className="or">or</p>
                <div className="social_login">
                  <a href="javascript:void(0)">
                    <figure>
                      <img src="/static/images/facebook.png" alt="icon" />
                    </figure>
                  </a>
                  <a href="javascript:void(0)">
                    <figure>
                      <img src="/static/images/google.png" alt="icon" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Login;
