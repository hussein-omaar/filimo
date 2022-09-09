import React, { useState } from "react";
import "../components/about.css";
import triller from "../thriller-video/triller.mp4";

function About() {
  const [movie, setMovie] = useState([
    {
      Title: "Star Trek: Enterprise - In a Time of War",
      Year: "2014",
      imdbID: "tt3445408",
      Type: "movie",
      logo: "https://jooda.ir/wp-content/uploads/2020/10/Filimo-e1621505891300.jpg",
      Poster: "https://storage.googleapis.com/pod_public/750/124245.jpg",
    },
  ]);
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
}
export default About;
