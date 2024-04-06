import React from "react";
import { Layout } from "../../layouts";
import { useNavigate } from "react-router";

export const PaymentDonePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <main className="content thankYou_page">
          <section className="thank_sc u_spc">
            <div className="conta_iner">
              <figure>
                <img src="static/images/thankyou_vector.svg" alt="Vector" />
              </figure>
              <h2>Payment has been done</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="btn_flex">
                <a onClick={() => navigate("/")} className="btnn btn_primary">
                  Back to Home
                </a>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};
