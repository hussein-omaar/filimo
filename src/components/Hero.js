import React, { useState } from "react";
import "../components/hero.css";
import user from "../images/user.png";
import logo from "../images/logo.png";

function Hero() {
  const [movie, setMovie] = useState([
    {
      Title: "Star Trek: Enterprise - In a Time of War",
      Year: "2014",
      imdbID: "tt3445408",
      Type: "movie",
      logo: "https://jooda.ir/wp-content/uploads/2020/10/Filimo-e1621505891300.jpg",
      Poster2:
        "https://i.pinimg.com/originals/05/e9/1a/05e91ad8f14bef57810399e14da2600f.jpg",
      Poster:
        "https://www.wallpaperflare.com/static/65/1010/479/breaking-bad-selective-coloring-walter-white-jesse-pinkman-wallpaper.jpg",
    },
  ]);

  return (
    <>
      <section
        style={{ backgroundImage: `url(${movie[0].Poster})` }}
        className="hero_section"
      >
        <div className="blur-div">
          <header>
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="nav-links">
              <nav>
                <ul>
                  <li>
                    <button>Home</button>
                  </li>
                  <li>
                    <button>Movies</button>
                  </li>
                  <li>
                    <button>Live</button>
                  </li>
                  <li>
                    <button>Popular</button>
                  </li>
                  <li>
                    <button>My List</button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="search-user">
              <div className="user-search-container">
                <div className="search-wraper">
                  <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                </div>

                <img src={user} alt="user-img" width="100%" />
              </div>
            </div>
          </header>

          <div className="movie-info">
            <div className="movie-details">
              <div className="poster">
                <img src={movie[0].Poster2} />
              </div>
              <div className="poster-details">
                <h1>breaking bad: S3 E6</h1>
                <span>series</span>
                <div className="rating">
                  <h2>9.4</h2>
                  <div className="rating-stars">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </div>

                  <div className="out-of">
                    <span>9.5/10 IMDB</span>
                  </div>
                </div>

                <h3>43 minutes-uSA</h3>
                <ul className="btn-list">
                  <li>
                    <button>Action</button>
                  </li>
                  <li>
                    <button>Thriller</button>
                  </li>
                  <li>
                    <button>Drama</button>
                  </li>
                  <li>
                    <button>Fantasy</button>
                  </li>
                  <li>
                    <button>Crime</button>
                  </li>
                </ul>
                <p>
                  {" "}
                  A high school chemistry teacher diagnosed with inoperable lung
                  cancer turns to manufacturing and selling methamphetamine in
                  order to secure his family's future
                </p>
              </div>
            </div>
            <div className="actions">
              <div className="partisipate">
                <div className="play">
                  <span>Play</span>
                  <i class="fa-solid fa-play"></i>
                </div>
                <div className="add-to-list">
                  <span>add to wishlist</span>
                  <i class="fa-sharp fa-solid fa-bookmark"></i>
                </div>
                <div className="download">
                  <span>download</span>
                  <i class="fa-sharp fa-solid fa-cloud-arrow-down"></i>
                </div>
              </div>

              <div className="give-rate">
                <div className="your-rate">
                  <span>Your rate</span>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
