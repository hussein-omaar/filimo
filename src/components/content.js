import React from 'react'
import "../components/content.css"

import About from "../components/About"

import Episodes from './Episodes'
import Similar_Movies from './Similar_Movies'
import Comments from './Comments'
import Footer from './Footer'

function Content() {
  return (


    <>
    <div className='content-body'> 

    <About/>
    <Episodes/>
    <Similar_Movies/>
    <Comments/>
    <Footer/>
 
    
    
    
    </div>
    
    </>
  )
}
export default Content;