import React, { useState } from "react";
import "../components/episodes.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {data} from "../Data"
function Episodes() {
  const [poster, setPoster] = useState([
    {
      photo:
        "https://resizing.flixster.com/EEM4xDSyN8QtmrWwYJsFE84GwOg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyNjE3LndlYnA=",
      title: "Episode 1",
      alt: "image",

      id: 123,
    },
    {
      photo: "https://m.media-amazon.com/images/I/81QtuaZN7JL._AC_SY741_.jpg",
      title: "Episode 2",
      alt: "image",
      id: 123,
    },
    {
      photo:
        "https://celebrity.fm/wp-content/uploads/2020/08/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      title: "Episode 3",
      alt: "image",

      id: 123,
    },

    {
      photo:
        "https://www.pngitem.com/pimgs/m/214-2140411_walter-white-png-breaking-bad-season-4-poster.png",
      title: "Episode 4",
      alt: "image",

      id: 123,
    },
    {
      photo:
        "https://tv-fanatic-res.cloudinary.com/iu/s--WJ2UlNoX--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1541591144/attachment/bad-movie.png",
      title: "Episode 5",
      alt: "image",
      id: 123,
    },
    {
      photo:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/03f33237405627.560665af3dd6e.jpg",
      title: "Episode 6",
      alt: "image",

      id: 123,
    },
    {
      photo:
        "https://rukminim1.flixcart.com/image/416/416/poster/5/9/n/medium-andph287-ananyadesigns-breaking-bad-wall-poster-original-imae8afzcz8x43hh.jpeg?q=70",
      title: "Episode 7",
      alt: "image",

      id: 123,
    },
    {
      photo:
        "https://cdnb.artstation.com/p/assets/images/images/026/623/687/large/kunal-manocha-heisenberg-low.jpg?1589280428&dl=1",
      title: "Episode 8",
      alt: "image",

      id: 123,
    },
    {
      photo:
        "https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images/artworkimages/medium/1/breaking-bad-poster-heisenberg-print-walter-white-and-jesse-pinkman-portrait-wall-decor-lautstarke-studio.jpg",
      title: "Episode 9",
      alt: "image",

      id: 123,
    },
    {
      photo:
        "https://dspncdn.com/a1/media/692x/83/8d/b8/838db82c3991041c36146cc4ecf7c828.jpg",
      title: "Episode 10",
      alt: "image",

      id: 123,
    },
    {
      photo:
        "https://c8.alamy.com/comp/RYHC8J/aaron-paul-bryan-cranston-poster-breaking-bad-2008-RYHC8J.jpg",
      title: "Episode 11",
      alt: "image",

      id: 123,
    },
  ]);

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
            <h1>Episodes</h1>
            <div className="line"></div>
          </div>

          {/* <div className="arrows">
            <i class="fa-sharp fa-solid fa-circle-chevron-left"></i>
            <i class="fa-sharp fa-solid fa-circle-chevron-right"></i>
          </div> */}
        </div>

        <Slider {...settings}>
          {poster.map((item) => {
            return (
              <div className="card">
                <div className="cards-photo">
                  <img src={item.photo} />
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
