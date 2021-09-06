import React from 'react';
import './Home.css';
import BannerImage from './assets/amazon-banner.jpg';
import Product from './Product';
import lean from './assets/lean.png'
import kenwood from './assets/kenwood.jpg'
import samsung from './assets/samsung.png'
import echo from './assets/echo bot.jpg'
import apple from './assets/apple i pad pro.jpg'
import tv from './assets/tv.jpg'




function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img className="home_bannerImage" src={BannerImage} />

            <div className="home_row">
               <Product id="01" title="The Lean Startup: How Constant Innovation Creates Radically Seccessful Businesses Paperback" price={300} image={lean} rating={3}/>
               <Product id="02" title="Kenwood Mixer" price={4000} image={kenwood} rating={3}/>
            </div>

            <div className="home_row">
            <Product id="03" title="Samsung Galaxy Active 2 - Aluminium, 44 mm (Black)" price={16438} image={samsung} rating={3}/>
            <Product id="04" title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)" price={3499} image={echo} rating={3}/>
            <Product id="05" title="Apple I Pad Pro " price={29999} image={apple} rating={1}/>
            </div>

            <div className="home_row">           
            <Product id="06" title="Tv Monitor" price={18999} image={tv} rating={5}/>        
            </div>

            </div>  
        </div>
    )
}

export default Home
