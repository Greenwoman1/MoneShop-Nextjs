import styles from "./AboutUs.module.css";
import Header from "@/components/header/page";
import RemoveParallax from "./RemoveParallax";
import aboutContent from "./aboutContent.json";
import history from "/public/history.jpg"; 
import enviroment from "/public/enviroment.jpg";

export const metadata = {
  title: "About us",
  description: "Our history"
};

const awards = [
   "Top Bankable Manufacturer Rated by Bloomberg New Energy Finance (BNEF) in 2022",
    "Tier 1 Solar Company by Bloomberg New Energy 2017-2022",
    "Leading company in PHOTON PV TRIATHALON 2017",
    "No. 1 Module Supplier for Quality and Performance/Price Ratio in IHS Module Customer Insight Survey in 2016",
    "The Best PV Module Manufacturer Award in Brazil by Smart Energy 2016",
    "No. 1 Silicon module solar plant developer by Greentech Media Research in 2017",
    "Best Structured Project Bond Award by Environmental Finance 2017",
    "TWO DEAL OF THE YEAR AWARDS FROM POWER FINANCE & RISK in 2018",
    "Intersolar North America 2012 Solar Project Award Finalist"
]

const AboutUs = () => {

  return (

    <>
      <div className={styles.container}>
        <Header src={"./about-us-cover.jpg"} title={"About us"} />
      </div>
      <div className="layout">
        <div className="middle">
          <section id="about_sec">
            <div className={styles.o_nama_main}>
              <RemoveParallax  image={history}></RemoveParallax>
              <div className={styles.column}>
                <div className={styles.centeredText}>
                  <h1>OUR HISTORY</h1>
                  <p>{aboutContent.history}</p>
                </div>
              </div>
            </div>
           <div className={styles.o_nama_main}>
              <div className={styles.column}>
                <div className={styles.centeredText}>
                  <h1>Environmental, Social and Governance (ESG)</h1>
                  <br />
                  <h4>2022 SUSTAINABILITY REPORT</h4>
                  <p>{aboutContent.sustainability}</p>
                </div>
              </div>
              <RemoveParallax image={enviroment}></RemoveParallax>
            </div>
          </section>
        </div>
          <div className="thirdRow-all-columns">
          <div className={styles.fullImageContainer}>
            <div className={styles.overlay}></div>
            <div className="layout">
              <div className="middle">
                <div className={styles.textOverlay}>
                  <h1>AWARDS</h1>
                  <ul>
                        
                  <li>{awards[0]}</li>
                    <li>{awards[1]}</li>
                    <li>{awards[2]}</li>
                    <li>{awards[3]}</li>
                    <li>{awards[4]}</li>
                    <li>{awards[5]}</li>
                    <li>{awards[6]}</li>
                    <li>{awards[7]}</li>
                    <li>{awards[8]}</li>
                      </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default AboutUs;
