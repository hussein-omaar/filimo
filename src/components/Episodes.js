import React, { useState, useEffect } from "react";
import "../components/episodes.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const API_LEY = "api_key=26a410dd960c19b0851e922d8f9f49d7";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const API_URL =
  BASE_URL +
  "/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&" +
  API_LEY;

function Episodes() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="episodes-wrapper">
        <div className="upper">
          <div className="sec-title">
            <div className="line"></div>
            <h1>Series</h1>
            <div className="line"></div>
          </div>
        </div>

        <Slider {...settings}>
          {movies.map((item) => {
            return (
              <div className="card">
                <div className="cards-photo">
                  <img src={IMG_URL + item.poster_path} />
                </div>
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Episodes;
