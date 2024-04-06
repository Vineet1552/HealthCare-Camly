import { useEffect, useRef, useState } from "react";
import { SearchBar } from "../../components/searchBar";
import { Tab, Tabs } from "@mui/material";
// import Typed from "typed.js";
import { ReactTyped } from "react-typed";

const images = [
  "/static/images/hero_provider_attachment.png",
  "/static/images/hero_virtual_attachment.png",
  "/static/images/hero_herbal_attachment.png",
];

function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="tab-pane"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

export const TopBanner = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  // const el1 = useRef(null);
  // const el2 = useRef(null);

  // useEffect(() => {
  //   const strings1 = ["acupuncture", "acupuncture", "acupuncture", "acupuncture"];
  //   const strings2 = ["cancer", "cancer", "cancer", "cancer"];

  //   const longestStringLength = Math.max(
  //     Math.max(...strings1.map(str => str.length)),
  //     Math.max(...strings2.map(str => str.length))
  //   );

  //   const typeSpeed1 = calculateTypingSpeed(strings1, longestStringLength);
  //   const typeSpeed2 = calculateTypingSpeed(strings2, longestStringLength);

  //   const typed1 = new Typed(el1.current, {
  //     strings: strings1,
  //     loop: true,
  //     startDelay: 100,
  //     typeSpeed: typeSpeed1,
  //     backSpeed: typeSpeed1 * 0.75,
  //     backDelay: 250
  //   });

  //   const typed2 = new Typed(el2.current, {
  //     strings: strings2,
  //     loop: true,
  //     startDelay: 100,
  //     typeSpeed: typeSpeed2,
  //     backSpeed: typeSpeed2 * 0.5,
  //     backDelay: 200
  //   });

  //   return () => {
  //     typed1.destroy();
  //     typed2.destroy();
  //   };
  // }, []);

  // const calculateTypingSpeed = (strings: any[], longestStringLength: number) => {
  //   const averageStringLength = strings.reduce((acc, str) => acc + str.length, 0) / strings.length;
  //   const speedMultiplier = longestStringLength / averageStringLength;
  //   return Math.max(50, Math.round(speedMultiplier * 160)); // Minimum speed of 50
  // };

  return (
    <section className="hero_sc">
      <div className="conta_iner">
        <div className="inner">
          <div className="gap_p">
            <div className="left_s">
              <h1>
                Find a local, licensed <br />
                <ReactTyped
                  strings={[
                    "Activated charcoal cleanse",
                    "Acupressure",
                    "Acupuncture",
                    "Affirmative prayer",
                  ]}
                  typeSpeed={150}
                  backSpeed={150}
                  startDelay={100}
                  backDelay={200}
                  loop
                >
                  <span className="typing_text c_primary"></span>
                </ReactTyped>{" "}
                therapist <br />
                for{" "}
                <ReactTyped
                  strings={[
                    "Acne ",
                    "ADD/ADHD",
                    "Adolescents Mental Therapy",
                    "Adult Mental Therapy",
                  ]}
                  typeSpeed={250}
                  backSpeed={210}
                  startDelay={100}
                  backDelay={200}
                  loop
                >
                  <span className="typing_text c_danger"></span>
                </ReactTyped>{" "}
                treatment
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs example"
            className="custom_tabs"
          >
            <Tab
              className={`${value === 0 ? "nav-link active" : "nav-link"}`}
              label="Providers"
            />
            <Tab
              className={`${value === 1 ? "nav-link active" : "nav-link"}`}
              label="Virtual"
            />
            <Tab
              className={`${value === 2 ? "nav-link active" : "nav-link"}`}
              label="Herbal Store"
            />
          </Tabs>
          <div className="tab-content">
            <TabPanel value={value} index={value}>
              <figure>
                <img
                  // style={{ width: "312px", height: "385px" }}
                  src={images?.[value]}
                  alt=""
                />
              </figure>
              <SearchBar value={value} />
            </TabPanel>
          </div>
        </div>
      </div>
    </section>
  );
};
