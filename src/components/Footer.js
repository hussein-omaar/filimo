import React from 'react'
import "../components/footer.css"
import logo from "../images/logo.png"
 function Footer() {
  return (


    <>

    <div className='footer-wrapper'>

        <div className='main-content'>
            <nav className='links'>
                <ul className='first'>
                    <li>home</li>
                    <li>contact</li>
                    <li>terms</li>
                    <li>about</li>
                </ul>
                <ul className='second'>
                    <li>Live</li>
                    <li>Faq</li>
                    <li>Premium</li>
                    <li>Policy</li>
                </ul>
                <ul className='third'>
                    <li>Popular</li>
                    <li>Latest</li>
                    <li>250 IMDB</li>
                    <li>Ads</li>
                </ul>
            </nav>

            <div className='about-part'>
                <div className='logo'>
                    <img src={logo}/>
                </div>
                <p>filimo is the worlds leading community for creators to share grow and get hired</p>
                <div className='social-icons'>
                    <div className='circle'>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className='circle'>
                    <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div className='circle'>
                    <i class="fa-brands fa-youtube"></i>
                    </div>
                    <div className='circle'>
                    <i class="fa-brands fa-tiktok"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='rights'>
            <span>2020 filimo All rights reserved</span>
        </div>


    </div>




    </>
  )
}

export default Footer;