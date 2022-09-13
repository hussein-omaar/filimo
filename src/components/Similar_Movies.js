import React, { useState , useEffect} from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_LEY = 'api_key=26a410dd960c19b0851e922d8f9f49d7'
const BASE_URL = 'https://api.themoviedb.org/3'
const IMG_URL = "https://image.tmdb.org/t/p/w500/"
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_LEY; 

 function Similar_Movies() {


  
  const [movies , setMovies] = useState([])

  useEffect(()=>{

    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {

        setMovies (data.results);

       

       
    })
})

    const [poster, setPoster] = useState([
        {
          photo:
            "http://watchersonthewall.com/wp-content/uploads/2019/04/GOT-Aftermath-min.jpeg",
          title: "Game of Thrones",
          alt: "image",
    
          id: 123,
        },
        {
          photo:
            "https://c4.wallpaperflare.com/wallpaper/737/28/987/prison-break-tv-series-2-wallpaper-preview.jpg",
          title: " Prison Break",
          alt: "image",
    
          id: 123,
        },
        {
          photo:
            "https://i.ebayimg.com/images/g/g2sAAOSwxflZwsO8/s-l400.jpg",
          title: "Lost",
          alt: "image",
    
          id: 123,
        },
    
        {
          photo:
            "https://i.pinimg.com/736x/c5/bb/bf/c5bbbfe869b1159ad1e892cd2d7cd49d.jpg",
          title: "The Walking Dead",
          alt: "image",
    
          id: 123,
        },
        {
          photo:
            "https://i.pinimg.com/564x/08/d2/3a/08d23ae9ef49f1dc1f14c0a73cd3c266.jpg",
          title: "Vikings",
          alt: "image",
          id: 123,
        },
        {
          photo:
          "https://www.themoviedb.org/t/p/original/7sA08PDukeXaj9SpqZIhSL8ZCYx.jpg  ",
          title: "Under the Dome",
          alt: "image",
    
          id: 123,
        },
        {
          photo:
            "https://cdn.europosters.eu/image/1300/art-photo/the-big-bang-theory-crew-i106240.jpg",
          title: "Big bang Theory",
          alt: "image",
    
          id: 123,
        },
        {
          photo:
            "https://m.media-amazon.com/images/I/61CMdmBUSoL._AC_SX466_.jpg",
          title: "Friends",
          alt: "image",
    
          id: 123,
        },
        {
          photo:
            "http://images6.fanpop.com/image/photos/38800000/Black-Hawk-Down-2001-Poster-black-hawk-down-38824152-1000-1426.jpg",
          title: "Black Hawk Down",
          alt: "image",
    
          id: 123,
        },
        {
          photo:
            "https://cdn.dribbble.com/users/1675913/screenshots/6597891/______22_22.png?compress=1&resize=400x300",
          title: "Chernobyl",
          alt: "image",
    
          id: 123,
        },
        {
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_FMjpg_UX1000_.jpg",
          title: "Sherlock Holmes",
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (


   <>

   <div className='movies-wrapper'>
   <div className="episodes-wrapper">
        <div className="upper">
          <div className="sec-title-more">
            <div className="line"></div>
            <h1>Movies</h1>
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
   </div>
   
   </>

  )
}

export default Similar_Movies;
