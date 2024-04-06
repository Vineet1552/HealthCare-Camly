import React from "react";

const therapies = [
  {
    image: "static/images/icon_01.svg",
    name: "Acupuncture",
  },
  {
    image: "static/images/icon_02.svg",
    name: "Massage",
  },
  {
    image: "static/images/icon_03.svg",
    name: "Ayurveda",
  },
  {
    image: "static/images/icon_04.svg",
    name: "Yoga",
  },
  {
    image: "static/images/icon_05.svg",
    name: "Hypnotherapy",
  },
  {
    image: "static/images/icon_06.svg",
    name: "Reiki",
  },
  {
    image: "static/images/icon_07.svg",
    name: "Cupping",
  },
  {
    image: "static/images/icon_08.svg",
    name: "Chiropractor",
  },
];

export default function PopularTherapies() {
  return (
    <>
      <section className="specialities_sc u_spc">
        <div className="conta_iner">
          <div className="s_head text_center">
            <h2>Popular Therapies</h2>
          </div>
          <div className="gap_m hd_5">
            {therapies?.length
              ? therapies?.map((item, index) => (
                <div key={index} className="specialities_box">
                  <figure>
                    <img src={item?.image} alt="Icon" />
                  </figure>
                  <h3>{item?.name}</h3>
                </div>
              ))
              : undefined}
          </div>
        </div>
      </section>
      <section className="service_sc u_spc">
        <div className="conta_iner">
          <div className="s_head gap_p">
            <div className="left_s">
              <h2>We will serve you with healthcare services</h2>
            </div>
            <div className="right_s">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <a href=" " className="btnn btn_xsm btn_primary">
                Learn More
              </a>
            </div>
          </div>
          <div className="gap_m hd_4">
            <div className="service_box">
              <h3>Make <br /> Appointment</h3>
              <p>
                <small>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
              </p>
              <figure>
                <img src="static/images/service_attachment_01.png" alt="icon" />
              </figure>
            </div>
            <div className="service_box">
              <h3>Virtual <br /> Consultation</h3>
              <p>
                <small>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
              </p>
              <figure>
                <img src="static/images/service_attachment_02.png" alt="icon" />
              </figure>
            </div>
            <div className="service_box">
              <h3>Visit <br /> Doctor Clinic</h3>
              <p>
                <small>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
              </p>
              <figure>
                <img src="static/images/service_attachment_03.png" alt="icon" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="consulation_sc">
        <div className="conta_iner">
          <div className="gap_p aic">
            <div className="left_s">
              <h2>Consultation with our professional doctors</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
              </p>
              <ul>
                <li>24/7</li>
                <li>100+</li>
                <li>1M+</li>
              </ul>
            </div>
            <div className="right_s">
              <figure>
                <img src="static/images/doctor_attachment.png" alt="Icon" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
