import React from "react";
import "../components/about.css";
import triller from "../thriller-video/triller.mp4"

function About() {
  
  return (
    <>
      <div className="about">
        <div className="about-wrapper">
          <div className="sec-title">
            <div className="line"></div>
            <h1>About</h1>
            <div className="line"></div>
          </div>
          <div className="movie-det">
            <div className="media">
              <video className="triller-vieo" controls>
                <source src={triller} type="video/mp4" />
              </video>
            </div>
            <div className="summary">
              <div className="summary-details">
                <h1>Summary:</h1>
                <p>
                  A high school chemistry teacher diagnosed with inoperable lung
                  cancer turns to manufacturing and selling methamphetamine
                </p>
              </div>
              <div className="creator">
                <h1>Creator:</h1>
                <p>Vince Gilligan</p>
              </div>
              <div className="casts">
                <h1>Casts:</h1>
                <div className="casts-names">
                  <p>
                    Bryan Cranston · Walter White ; Aaron Paul · Jesse Pinkman ;
                  </p>
                  <p>
                    Skyler White ; Betsy Brandt · Marie Schrader ; RJ Mitte ·
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );


  // new pr //
}
export default About;
