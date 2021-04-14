import React from 'react'
import './bannerHeader.css'
import Header from '../Header/Header'
import newLogo from '../../images/logo.png'
import BannerLearn from '../BannerLearn/BannerLearn'
import { Link } from 'react-router-dom'
function BannerHeader() {
   
        return (
            <div className="home">
             
             <Header/>
                  <Link to="/">
             <div className="logo">
                         <img src={newLogo}/>
                     </div>
                     </Link>
             <div className="bg">
               <div className="bg1">
              
               </div>
             <div className="home">
                 <div className="banner">
                 <BannerLearn/>
               
                 </div>
            
             </div>
             </div>
            
             </div>
         )
     }
     
export default BannerHeader
